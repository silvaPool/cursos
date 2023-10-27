import { Box, Typography } from '@mui/material';
import StyledFooter from './StyledFooter';

function Footer() {

    return (
        <StyledFooter>
            <Typography variant='h2'>
                Reign
            </Typography>

            <Box>
                <Typography>
                    Mais Informações
                </Typography>

                <Typography>
                    Rua Maneira, 240
                </Typography>
                <Typography>
                    Reign LTDA
                </Typography>
            </Box>
        </StyledFooter>
    )
}

export default Footer;