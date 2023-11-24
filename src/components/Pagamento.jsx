import { Box, Button, Typography } from "@mui/material";
import Davi from '../assets/images/kingzinho.jpg';


function Pagamento() {
    return (
        <>
        <Box sx={{ borderRadius: '2rem', height: '80vh', maxWidth: '1500px', margin: '0 auto', display: 'flex', flexDirection: 'row', padding: '10px', justifyContent: 'center', alignItems: 'center', background: `linear-gradient(rgba(7, 24, 46, 0.5), rgba(7, 24, 46, 0.5)), url(${Davi})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
         
            <Box className='card-pagamento'>
                <Typography sx={{ fontSize: '2rem' }} className='h2-pagamentos'>
                    3 Meses
                </Typography>
                <Typography sx={{ fontSize: '3rem' }} className='p-line'>
                    R$ 74,90
                </Typography>
                <Typography sx={{ fontSize: '1rem' }} className='p-line'>
                    Igual a R$ 24,97 por mês
                </Typography>
                <Button variant="contained" sx={{ marginTop: '10px' }}>Escolha o plano trimestral</Button>
            </Box>
            <Box className='card-pagamento card-meio'>
                <Typography sx={{ fontSize: '2rem' }} className='h2-pagamentos'>
                    12 Meses
                </Typography>
                <Typography sx={{ fontSize: '3rem' }} className='p-line'>
                    R$ 239,90
                </Typography>
                <Typography sx={{ fontSize: '1rem' }} className='p-line'>
                    Igual a R$ 19,99 por mês
                </Typography>
                <Button variant="contained" sx={{ marginTop: '10px' }}>Escolha o plano anual</Button>
            </Box>
            <Box className='card-pagamento'>
                <Typography sx={{ fontSize: '2rem' }} className='h2-pagamentos'>
                    1 Mês
                </Typography>
                <Typography sx={{ fontSize: '3rem' }} className='p-line'>
                    R$ 34,90
                </Typography>
                <Button variant="contained" sx={{ marginTop: '10px' }}>Escolha o plano mensal</Button>
            </Box>
        </Box>

        </>
    )
}

export default Pagamento;