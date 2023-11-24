import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Button, TextField } from '@mui/material';
import StyledForm from '../../components/StyledForm';
import StyledInputForm from '../../components/StyledInputForm';





const validationSchema = Yup.object({
  nome: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("Email inválido").required('Email obrigatório'),
  password: Yup.string().min(8, "Minímo de 8 caracteres").required("Senha obrigatória"),
  passwordRepet: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const Cadastro = () => {

  const { register } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      password: "",
      passwordRepet: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {

      try {
        const res = await register(values.email, values.password);

        await emailjs.send(
          'service_pfpjiho',
          'template_y2pjws2',
          values,
          'dcHSE3CHKSx-085M1'
        );
      }
      catch (error) {
        console.error("Erro ao cadastrar usuário: ", error);
      }
    },
  });

  return (
    <div>
      <form style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px'}} onSubmit={formik.handleSubmit}>
        <TextField
          sx={{ marginBottom: '3rem', border: '1px solid white', width: '70%' }}
          fullWidth
          id="nome"
          name="nome"
          label="Nome"
          value={formik.values.nome}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.nome && Boolean(formik.errors.nome)}
          helperText={formik.touched.nome && formik.errors.nome}
         />

        <TextField
          sx={{ marginBottom: '3rem', border: '1px solid white', width: '70%' }}
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
          sx={{ marginBottom: '3rem', border: '1px solid white', width: '70%' }}
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
          sx={{ marginBottom: '3rem', border: '1px solid white', width: '70%' }}
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

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Cadastro;

ReactDOM.render(<Cadastro />, document.getElementById('root'));


