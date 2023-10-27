import Box from '@mui/material/Box';
import StyledInformativo from './StyledInformativo';
import { Button, Typography } from '@mui/material';

function Informativo() {
    
    return (
        <StyledInformativo>
           <Typography variant='h2' sx={{color: 'white'}}>
                Aprenda e aprimore seu conhecimento em reinados
           </Typography>

           <Button variant='contained'>
               Explore agora
            </Button>

        </StyledInformativo>
    )
}

export default Informativo;