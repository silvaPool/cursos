import * as React from 'react';
import StyledConteudo from "./StyledConteudo";
import King from '../assets/images/king.jpg';
import King2 from '../assets/images/king2.jpg';
import King3 from '../assets/images/king3.jpg';
import { Box } from "@mui/material";
import StyledBanner from "./StyledBanner";
import StyledBoxConteudo from "./StyledBoxConteudo";
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import StyledGrid1 from "./StyledGrid1";
import StyledGrid2 from './StyledGrid2';
import StyledGrid3 from './StyledGrid3';
import StyledGrid4 from './StyledGrid4';
import StyledGrid5 from './StyledGrid5';
import StyledGrid6 from './StyledGrid6';

const StyledGrid = styled(Grid) `
    & {
        background-image: url(${King});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

    }
`

const StyledGrids = styled(Grid) `
    & {
        background-image: url(${King2});
        background-position: center;
        background-size: cover;

    }
`

const StyledGridKing = styled(Grid) `
    & {
        background-image: url(${King3});
        background-position: bottom;
        background-size: cover;

    }
`



function Conteudo() {

    return (
        <Grid container spacing={0} sx={{ height: '145vh' }}>
            {/* Primeira linha */}
            <Grid item xs={3} padding={'0.5rem'} sx={{  color: 'black' , backgroundColor: '#F8F8FF'}}>
                <Typography variant="h2" sx={{ position: 'relative', left: '4%', top: '2%' }}>
                    FAVORITES
                </Typography>
            </Grid>
            <StyledGrid1 item xs={3} >
                CURSO 01
            </StyledGrid1>
            <StyledGrid2 item xs={3} >
                CURSO 02
            </StyledGrid2>
            <StyledGrid3 item xs={3}>
                CURSO 03
            </StyledGrid3>

            {/* Segunda linha */}
            <StyledGrid item xs={4} >
               
            </StyledGrid>
            <StyledGrids item xs={4}>
              
            </StyledGrids>
            <StyledGridKing item xs={4}>
                
            </StyledGridKing>


            {/* Terceira linha */}
            <Grid item xs={3} padding={'0.5rem'} sx={{ color: 'black' , backgroundColor: '#F8F8FF'}}>
            <Typography variant="h2" sx={{ position: 'relative', left: '4%', top: '2%' }}>
                   MAIS CONTEÚDOS
                </Typography>
            </Grid>
            <StyledGrid4 item xs={3} >
                CURSO 04
            </StyledGrid4>
            <StyledGrid5 item xs={3} >
            CURSO 05
            </StyledGrid5>
            <StyledGrid6 item xs={3} >
            CURSO 06
            </StyledGrid6>
        </Grid>
    )
}

export default Conteudo;