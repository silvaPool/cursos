import { Avatar, Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextField from '@mui/material/TextField';
import FeedIcon from '@mui/icons-material/Feed';


const StyledBox = styled(Box)`
    & {
        background: #16222A;  
        background: -webkit-linear-gradient(to right, #3A6073, #16222A);  
        background: linear-gradient(to right, #3A6073, #16222A); 
    }
`

function EditarPerfil() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container sx={{ border: '1px solid red' }}>
            <Grid xs={12} item sx={{ border: '1px solid red', height: '15vh' }}>
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
                                <Tab label="Experiência Profissional" value="2" />
                                <Tab label="Formação Acadêmica" value="3" />
                            </TabList>
                        </Box>
                        <Box >
                            <TabPanel value="1" >
                                <Typography variant="body2">
                                    Informações pessoais
                                </Typography>
                                <Divider sx={{ backgroundColor: 'white' }} />

                                <Avatar
                                    sx={{ bgcolor: 'white' }}
                                    alt="Remy Sharp"
                                    src="/broken-image.jpg"
                                >
                                    B
                                </Avatar>

                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
                                </Grid>

                                <Button>Cancelar</Button>
                                <Button>Salvar</Button>
                            </TabPanel>
                            <TabPanel value="2">Experiência Profissional</TabPanel>
                            <TabPanel value="3">Formação Acadêmica</TabPanel>
                        </Box>
                    </TabContext>
                </Box>
            </Grid>
        </Grid>
    )
}

export default EditarPerfil;