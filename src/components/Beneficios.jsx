import { Avatar, Box, Card, CardActions, CardContent, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import WorkIcon from '@mui/icons-material/Work';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import PersonIcon from '@mui/icons-material/Person';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import StyledBeneficios from "./StyledBeneficios";

function Beneficios() {

    return (
        <StyledBeneficios>
            <Typography variant="h2">
                Benefícios de estudar na Reign
            </Typography>
            <Box sx={{ flexGrow: 1, padding: '1rem', width: '80%', margin: '0 auto' }}>
                <Grid container spacing={2} columns={12}>
                    <Grid item xs={4}>
                        <Card>
                            <WorkIcon sx={{ fontSize: '90px', marginRight: '225px' }} />
                            <CardContent>
                                <Typography sx={{ fontSize: '1.2rem', marginBottom: '20px' }}>
                                    Ambiente Empresarial Simulado
                                </Typography>
                                <Typography variant="body3">
                                    "Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarcticadfsdfsdfsdf"
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <GroupsIcon sx={{ fontSize: '90px', marginRight: '225px' }} />
                            <CardContent>
                                <Typography sx={{ fontSize: '1.2rem', marginBottom: '20px' }}>
                                    Participe em Células
                                </Typography>
                                <Typography variant="body3">
                                    "Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarcticadfsdfsdfsdf"
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <MenuBookIcon sx={{ fontSize: '90px', marginRight: '225px' }} />
                            <CardContent>
                                <Typography sx={{ fontSize: '1.2rem', marginBottom: '20px' }}>
                                    Acesso a Ebooks
                                </Typography>
                                <Typography variant="body3">
                                    "Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarcticadfsdfsdfsdf"
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <PersonalVideoIcon sx={{ fontSize: '90px', marginRight: '225px' }} />
                            <CardContent>
                                <Typography sx={{ fontSize: '1.2rem', marginBottom: '20px' }}>
                                   Aulas Ao Vivo
                                </Typography>
                                <Typography variant="body3">
                                    "Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarcticadfsdfsdfsdf"
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <PersonIcon sx={{ fontSize: '90px', marginRight: '225px' }} />
                            <CardContent>
                                <Typography sx={{ fontSize: '1.2rem', marginBottom: '20px' }}>
                                   Contanto Com Missionários 
                                </Typography>
                                <Typography variant="body3">
                                    "Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarcticadfsdfsdfsdf"
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <NetworkWifiIcon sx={{ fontSize: '90px', marginRight: '225px' }} />
                            <CardContent>
                                <Typography sx={{ fontSize: '1.2rem', marginBottom: '20px' }}>
                                 Acesso Vitalício
                                </Typography>
                                <Typography variant="body3">
                                    "Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarcticadfsdfsdfsdf"
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </StyledBeneficios>
    )
}

export default Beneficios;