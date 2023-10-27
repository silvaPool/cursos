import Box from '@mui/material/Box';
import StyledCursos from './StyledCursos';
import { Modal, Typography } from '@mui/material';
import Estudante from '../assets/images/estudante.jpg';
import StyledBoxImg from './StyledBoxImg';
import Button from '@mui/material/Button';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};




function Cursos() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Box>
            <StyledCursos>
                <Typography variant='h2' >
                    Como você vai aprender com a Reign
                </Typography>
                <Typography variant='h3' >
                    Aceleração baseada na metodologia do Project-Based Learning
                </Typography>

            <Box sx={{position: 'relative', display: 'flex', flexDirection: 'column'}}>
                

                <Typography sx={{ width: '45%',  marginBottom: '1rem', marginTop: '1rem', margin: '0 auto', textAlign: 'left'}}>
                    O PBL não é apenas um método, é uma imersão. Trata-se de aprender programação web através da execução de projetos concretos, sempre com um olhar voltado para as demandas atuais do mercado de trabalho.

                    Nosso compromisso é prepará-lo para entregar exatamente o que o mercado busca: valor tangível para o cliente final.

                    Com a Firstday, não só você desenvolverá um portfólio recheado de projetos significativos, como também assimilará conceitos teóricos de maneira aplicada. O resultado? Superar aquela estagnação e ascender em sua jornada como desenvolvedor web.


                </Typography>

                <Button onClick={handleOpen} variant='outlined' sx={{width: '10rem', position: 'relative', left: '27.5%', top: '10%'}}>Saiba mais</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Informação importante
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Estes cursos não tem certificados!
                        </Typography>
                    </Box>
                </Modal>

                </Box>
            </StyledCursos>

          
        </Box>
    )
}

export default Cursos;