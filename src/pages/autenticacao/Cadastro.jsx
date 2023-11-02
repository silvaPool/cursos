import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';


const validationSchema = yup.object({
    email: yup
        .string('Entre com seu email')
        .email('Entre com um email válido')
        .required('Email Obrigatório'),
    password: yup
        .string('Entre sua senha')
        .min(8, 'Minímo de 8 caracteres')
        .required('Senha Obrigatória'),
    passwordRepet: yup.string()
        .oneOf([yup.ref("password"), null], "As senhas não estão iguais")
        .required("A senha é obrigatória"),
});



const Cadastro = () => {

    const {register} = useContext(AuthContext);
   

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
           const res = await register(values.email, values.password);
        console.log(values);
           
        },
    });

    


    return (
        <div>
            <form onSubmit={formik.handleSubmit} style={{marginTop: '80px'}}>
                <TextField
                    sx={{ marginBottom: '3rem' }}
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    sx={{ marginBottom: '3rem' }}
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                 <TextField
                    sx={{ marginBottom: '3rem' }}
                    fullWidth
                    id="passwordRepet"
                    name="passwordRepet"
                    label="passwordRepet"
                    type="passwordRepet"
                    value={formik.values.passwordRepet}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.passwordRepet && Boolean(formik.errors.passwordRepet)}
                    helperText={formik.touched.passwordRepet && formik.errors.passwordRepet}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Cadastrar
                </Button>
            </form>
        </div>
    );
};

export default Cadastro;

ReactDOM.render(<Cadastro />, document.getElementById('root'));
