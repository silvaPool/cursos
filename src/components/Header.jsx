import { Button, Grid, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import StyledHeader from './StyledHeader'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Header() {

    return (
        <StyledHeader>

          <Typography variant='h1' sx={{color: 'white', border: '1px solid red'}}>
              Matheeus
            </Typography>
         
           
        </StyledHeader>
    )
}

export default Header;