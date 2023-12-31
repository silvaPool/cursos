import { Box, Button, Grid, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import StyledHeader from './StyledHero'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import styled from 'styled-components';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';
import StyledButtonHeader from './StyledButtonHeader';

const StyledBox = styled(Box)`
    & {
        height: 7vh;
        position: fixed;
        z-index: 1;
        width: 100%;
        display: flex;
        padding: 1rem;
        justify-content: space-between;
        align-items: center;
        background-color: #030328;

    }
`

function Header() {

    const [value, setValue] = useState(0);

    return (
        <StyledBox>


            <Typography variant='h2'>
                Reign
            </Typography>

            <Box sx={{height: '40px', width: '320px', display: 'flex', justifyContent: "space-between", alignItems: 'center'}}>
                <Button variant='text'>Entrar</Button>
                <StyledButtonHeader>Assinar</StyledButtonHeader>
            </Box>



        </StyledBox>
    )
}

export default Header;