import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Duvidas() {

    return (
        <Container sx={{ height: '80vh', padding: '5rem' }}>


            <Box sx={{ width: '80%', margin: '0 auto' }}>

                <Typography variant='h2' sx={{ marginBottom: '1rem' }}>
                   Alguma Pergunta?
                </Typography>
                <Accordion>
                    <AccordionSummary
                         expandIcon={<ExpandMoreIcon  sx={{color: 'white'}} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>01. Tem algum requisito para participar</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Apenas a vontade de estudar
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                          expandIcon={<ExpandMoreIcon  sx={{color: 'white'}} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>02. E se eu não gostar do programa?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Caso você não esteja satisfeito com o programa, você tem até 30 dias para solicitar o reembolso. Para solicitar o cancelamento e o reembolso, basta enviar um e-mail para exemplo@gmail.com. Não é necessário justificar sua decisão. Priorizamos sua satisfação.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                          expandIcon={<ExpandMoreIcon  sx={{color: 'white'}} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>03. Como posso contactar o suporte?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Caso você tenha alguma dúvida ou tenha qualquer problema com sua conta ou pagamento você pode enviar um email para a nossa equipe no endereço exemplo@gmail.com ou pelo WhatsApp clicando no botão com o ícone do WhatsApp no nosso site.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon  sx={{color: 'white'}} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                       
                    >
                        <Typography>04. Como e quando posso agendar uma call com um consultor?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Basta mandar uma mensagem pelo whatsapp e um de nossos consultores irá te atender, a conversa será marca no momento que for mais cômodo para você.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                         expandIcon={<ExpandMoreIcon  sx={{color: 'white'}} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>05. Como obter o certificado?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            O certificado é disponibilizado automaticamente após o término das aulas
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    )
}

export default Duvidas;