import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Formik, useField, useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Form, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import styled from 'styled-components';
import StyledForm from '../../components/StyledForm';
import StyledButtonForm from '../../components/StyledButtonForm';




const MyTextInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};


const StyledInput = styled(MyTextInput)`
&& {
    width: 100%;
    height: 40px;
    background: #e0dede;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 4px;
    margin-bottom: 10px;
}`;



function Login() {

    const navigate = useNavigate();
    const { login, user, signed, handleSignIn } = useContext(AuthContext);
    const [errorsFirebase, setErrosFirebase] = useState("");


    return (
        <>
            <Stack spacing={4} textAlign={'left'} sx={{position: 'relative', padding: '10px', gap: '5px', textAlign: 'center'}}>
                <Typography sx={{margin: '25% 0 5%', color: '#fff', fontSize: '2rem', display:"flex", justifyContent: 'center', fontWeight: 'bold', cursor: 'pointer', transition: '.5s ease-in-out'}}>
                    Log in
                </Typography>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={yup.object({
                        email: yup.string().email('Email inválido').required('Email é obrigatório'),
                        password: yup.string()
                            .min(5, 'A senha deve ter mais de 8 digitos')
                            .required('Senha é obrigatória!'),
                    })}
                    onSubmit={async (values) => {

                        const res = await login(values.email, values.password);
                        if (res.user) {
                            if (res.user.email === 'admin@admin.com') {
                                navigate("/home/admin");
                            } else {
                                navigate("/home/estudante");
                            }
                        } else {
                            setErrosFirebase("Não encontrado");
                            
                        }

                    }}
                >

                    {({ handleSubmit, errors }) => (
                        <form onSubmit={handleSubmit}>
                            <StyledInput

                                name="email"
                                type="email"
                                placeholder="example@example.com"
                            />

                            <StyledInput

                                name="password"
                                type="password"
                                placeholder="******"
                            />

                            <StyledButtonForm type="submit">Entrar</StyledButtonForm>
                            <StyledButtonForm onClick={handleSignIn} type="submit">Entrar com faceio</StyledButtonForm>
                          

                        </form>

                    )}
                </Formik>
                <Typography variant='body1'>{errorsFirebase}</Typography>

            </Stack>

        </>

    )
}

export default Login;
