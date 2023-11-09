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

const StyledBox = styled(Box)`
    & {
        height: 5vh;
        position: fixed;
        z-index: 1;
        width: 100%;
        /* display: flex;
        justify-content: space-between; */

    }
`
//sx={{border: '1px solid green', height: '6vh', position: 'fixed', zIndex: '1', width: '100%', backgroundColor: 'black'}}
function Header() {

    const [value, setValue] = useState(0);

    return (
        <StyledBox>

           
            <Typography sx={{ color: 'white', border: '1px solid red', height: '100%' }}>
                Reign
            </Typography>

           
               
        


        </StyledBox>
    )
}

export default Header;