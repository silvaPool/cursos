import { Avatar, Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextField from '@mui/material/TextField';
import FeedIcon from '@mui/icons-material/Feed';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import * as yup from 'yup';

const MyTextInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <Typography sx={{ color: 'red', marginBottom: '5px', fontSize: '1rem' }} className="error">{meta.error}</Typography>
            ) : null}
        </>
    );
};



const StyledBox = styled(Box)`
    & {
        /* background: #232526;  
        background: -webkit-linear-gradient(to right, #414345, #232526); 
        background: linear-gradient(to right, #414345, #232526);  */


        border-radius: 1rem;
        padding: 1rem;
    }
`

const StyledInput = styled(MyTextInput)`
&& {
    /* margin-bottom: 1rem; */
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


function EditarPerfil() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Grid container >
                <Grid xs={12} item sx={{ height: '15vh' }}>
                    <StyledBox sx={{ border: '1px solid white', height: '15vh' }}>
                        <Typography variant="h2">
                            Complete o seu perfil
                        </Typography>
                        <Typography variant="body2">
                            Complete o seu perfil, você ganhará XP e ficará mais fácil de subir de nível!
                        </Typography>
                    </StyledBox>
                </Grid>
                <Grid xs={12} item>
                    <Box sx={{ width: '100%', typography: 'body1', height: '40vh' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">

                                    <Tab
                                        label={
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FeedIcon style={{ marginRight: 8 }} />
                                                Informações Pessoais
                                            </div>
                                        }
                                        value="1"
                                    />

                                    <Tab
                                        label={
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <ImportContactsIcon style={{ marginRight: 8 }} />
                                                Turma passada
                                            </div>
                                        }
                                        value="2"
                                    />
                                    <Tab label="Formação Acadêmica" value="3" />
                                </TabList>
                            </Box>
                            <Box sx={{ border: '1px solid red', borderRadius: '1rem', height: '45vh' }}>
                                <TabPanel value="1" >
                                    <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                                        Informações pessoais
                                    </Typography>
                                    <Divider sx={{ backgroundColor: 'white' }} />

                                    <Avatar
                                        sx={{ bgcolor: 'white', margin: '1rem auto' }}
                                        alt="Remy Sharp"
                                        src="/broken-image.jpg"
                                    >
                                        B
                                    </Avatar>

                                    <Formik
                                        initialValues={{ nome: '', sobrenome: '', email: '', telefone: '' }}
                                        validationSchema={yup.object({
                                            nome: yup.string()
                                                .min(5, "Limite de 5 caracteres")
                                                .required("Campo obrigatório"),
                                            sobrenome: yup.string()
                                                .required("Campo obrigatório"),
                                            email: yup.string().email('Email inválido').required('Email é obrigatório'),
                                            telefone: yup.string()
                                                .required('Telefone obrigatório!'),
                                        })}
                                        onSubmit={async (values) => {

                                            console.log(values);
                                        }}
                                    >

                                        {({ handleSubmit, errors }) => (

                                            <Form onSubmit={handleSubmit}>

                                                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: '2rem', textAlign: 'center' }}>
                                                    <Grid item xs={6}>
                                                        <StyledInput

                                                            name="nomeCompleto"
                                                            type="text"
                                                            placeholder="Nome Completo"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={6}>

                                                        <StyledInput

                                                            name="sobrenome"
                                                            type="text"
                                                            placeholder="sobrenome"
                                                        />

                                                    </Grid>

                                                    <Grid item xs={6}>
                                                        <StyledInput

                                                            name="email"
                                                            type="email"
                                                            placeholder="example@example.com"
                                                        />
                                                    </Grid>

                                                    <Grid item xs={6}>

                                                        <StyledInput

                                                            name="telefone"
                                                            type="text"
                                                            placeholder="Telefone"
                                                        />

                                                    </Grid>
                                                    <Grid item xs={12}  sx={{ display: 'flex', gap: '1rem'}}>

                                                    <Button variant="outlined">Cancelar</Button>
                                                    <Button type="submit" variant="contained">Entrar</Button>

                                                    </Grid>

                                                </Grid>

                                            </Form>

                                        )}
                                    </Formik>

                                    {/* <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                    <Grid item xs={6}>
                                        <TextField fullWidth id="outlined-basic" label="Seu nome" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField fullWidth id="outlined-basic" label="Sobrenome" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField fullWidth id="outlined-basic" label="E-Mail" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField fullWidth id="outlined-basic" label="Telefone para contato" variant="outlined" />
                                    </Grid>
                                </Grid> */}


                                </TabPanel>
                                <TabPanel value="2">
                                    <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
                                        Turma passada
                                    </Typography>
                                    <Divider sx={{ backgroundColor: 'white' }} />


                                    <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                        <Grid item xs={6}>
                                            <TextField fullWidth id="outlined-basic" label="Nome da turma" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField fullWidth id="outlined-basic" label="Sobrenome" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField fullWidth id="outlined-basic" label="E-Mail" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField fullWidth id="outlined-basic" label="Telefone para contato" variant="outlined" />
                                        </Grid>
                                    </Grid>
                                    <Box sx={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                                        <Button variant="outlined">Cancelar</Button>
                                        <Button variant="contained">Salvar</Button>
                                    </Box>

                                </TabPanel>
                                <TabPanel value="3">Formação Acadêmica</TabPanel>
                            </Box>
                        </TabContext>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default EditarPerfil;