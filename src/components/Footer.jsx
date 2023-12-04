import { Box, Chip, Divider, Grid, Typography } from '@mui/material';
import StyledFooter from './StyledFooter';
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
    
    return (
       
        <Box sx={{ backgroundColor: '#030328', height: '150px'}}>
            <Grid container sx={{padding: '10px'}}>
                <Grid item xs sx={{textAlign: 'center', fontSize: '20px'}}>
                    A maior comunidade de reinos do país
                </Grid>
                <Divider orientation="vertical" flexItem>
                   REIGN
                </Divider>
                <Grid item xs sx={{textAlign: 'center'}}>
                   <InstagramIcon /> <TwitterIcon /> <WhatsAppIcon />
                </Grid>
            </Grid>
        </Box>
    )

}



export default Footer;