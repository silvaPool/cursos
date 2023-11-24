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
import Estudante from '../assets/images/estudante.jpg'


function Depoimentos() {

    return (
        <StyledDepoimentos>
            <Typography variant="h2" sx={{ color: 'white', marginTop: '5px' }}>
                O que os alunos dizem sobre a Reign
            </Typography>

            <Box>
                <Box className="cards">
                    <Box className='card'>
                        <Avatar src={Estudante} />
                        <Typography variant='p' className='heading'>
                            Ronaldo
                        </Typography>
                        <Typography variant='p' className='paragrafo'>
                            "Participar do curso sobre reinados foi uma experiência enriquecedora. As lições são bem estruturadas, abordando desde os aspectos políticos até os detalhes culturais de cada época. "
                        </Typography>
                        <Typography variant='p' className='paragrafo'>
                            Reign
                        </Typography>

                    </Box>

                    <Box className='card'>
                        <Avatar src={Estudante} />
                        <Typography variant='p' className='heading'>
                            Marcela Kaká
                        </Typography>
                        <Typography variant='p' className='paragrafo'>
                            "O curso sobre reinados superou minhas expectativas! Aprofundei meu entendimento sobre os períodos históricos e seus líderes. "
                        </Typography>
                        <Typography variant='p' className='paragrafo'>
                            Reign
                        </Typography>

                    </Box>

                    <Box className='card'>
                        <Avatar src={Estudante} />
                        <Typography variant='p' className='heading'>
                            Fernanda
                        </Typography>
                        <Typography variant='p' className='paragrafo'>
                            "O curso sobre reinados foi um mergulho fascinante na história. A didática é excelente, tornando fácil assimilar informações detalhadas sobre diferentes monarcas e períodos."
                        </Typography>
                        <Typography variant='p' className='paragrafo'>
                            Reign
                        </Typography>

                    </Box>
                </Box>

            </Box>


        </StyledDepoimentos>


    )
}

export default Depoimentos;