import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Formik, useField, useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { Form, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import styled from 'styled-components';




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
    margin-bottom: 1rem;
    width: 100%;
    padding: 12px 18px;
    font-size: 16px;
    font-family: inherit;
    box-shadow: 0 0 0 1px #070707;
    border: none;
    border-radius: 25px;
    background-color: #fff5f5;
    transition: all .3s;

    &::placeholder {
        color: #243B55;
        font-size: 14px;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 10px 1px black;
        border: none;
        transition: all .3s;
    }
}`;



function Login() {

    const navigate = useNavigate();
    const { login, user, signed } = useContext(AuthContext);
    const [errorsFirebase, setErrosFirebase] = useState("");

   

  


    return (
        <>
        
            <Stack spacing={4} textAlign={'left'} sx={{ height: '400px', paddingTop: '6rem'}}>
                <Typography>
                    Login
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
                        <Form onSubmit={handleSubmit}>
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

                            <Button type="submit">Entrar</Button>

                        </Form>

                    )}
                </Formik>
                <Typography variant='body1'>{errorsFirebase}</Typography>

            </Stack>
        </>

    )
}

export default Login;
