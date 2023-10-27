import * as React from 'react';
import { Typography } from "@mui/material";
import StyledDepoimentos from "./StyledDepoimentos";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import EstudanteAvatar from '../assets/images/estudante.jpg';
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function Depoimentos() {

    return (
        <StyledDepoimentos>
            <Typography variant="h2" sx={{color: 'white', marginTop: '5px'}}>
                O que os alunos dizem sobre a Reign
            </Typography>

            <Box sx={{display: 'flex', gap: '5rem', marginTop: '100px'}}>
                <Card>
                    <CardContent>
                        <Typography variant="body2">
                            "Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarcticadfsdfsdfsdf"
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" src={EstudanteAvatar}/>
                        </Stack>
                        <Typography variant='body1'  sx={{marginLeft: '1rem'}}>Davi Silva </Typography>
                      
                      <LinkedInIcon sx={{fontSize: '2rem', color: 'white', marginLeft: '5px'}} />
                      
                    </CardActions>
                </Card>

                <Card>
                    <CardContent>
                        <Typography variant="body2">
                            "Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarcticadfsdfsdfsdf"
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" src={EstudanteAvatar}/>
                        </Stack>
                        <Typography variant='body1'  sx={{marginLeft: '1rem'}}>Davi Silva </Typography>
                      
                      <LinkedInIcon sx={{fontSize: '2rem', color: 'white', marginLeft: '5px'}} />
                      
                    </CardActions>
                </Card>

                <span class="loader"></span>
            </Box>


        </StyledDepoimentos>


    )
}

export default Depoimentos;