import * as React from 'react';
import StyledHeader from './StyledHero';
import { Box, Typography } from '@mui/material';
import styled from "styled-components";
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Modal } from '@mui/material';
import Login from '../pages/autenticacao/Login';
import { Outlet, useNavigate } from 'react-router-dom';
import Cadastro from '../pages/autenticacao/Cadastro';
import StyledHero from './StyledHero';
import Rei from "../assets/images/reibrabo.png";
import StyledBoxHero from './StyledBoxHero';
import StyledButtonHero from './StyledButtonHero';
import StyledBoxForm from './StyledBoxForm';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 600,
  bgcolor: 'black',
  borderRadius: '1rem',
  color: 'black',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



export default function Reis() {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [isCadastroVisible, setIsCadastroVisible] = useState(false);

  const handleOpenCadastro = () => {
    setIsCadastroVisible(true);
  }

  const handleCloseCadastro = () => {
    setIsCadastroVisible(false);
  }

  const handleOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
    setIsCadastroVisible(false);
  };

  const handleSaibaMaisClick = () => {
    handleOpen();
    navigate("/auth/login");
  }

  const navigateCadastroPage = () => {
    setIsCadastroVisible(true);
    navigate("/auth/cadastro");
  }



  return (
    <StyledHero sx={{ flexGrow: 1 }}>


      <StyledBoxHero>

        <Typography variant='h1'>
          Reign
        </Typography>
        <Typography sx={{ fontSize: '1.3rem' }}>
          Descubra o passado, domine o futuro: seu destino real começa aqui
        </Typography>
        <Typography sx={{ fontSize: '2rem' }}>
          Explore a riqueza cultural dos reinados em nossos cursos educativos e inspiradores.
        </Typography>

        <Box sx={{ height: '100px', padding: '10px' }}>
          <Button variant='text' sx={{ marginRight: '25px' }}>Entrar</Button>
          <StyledButtonHero onClick={handleSaibaMaisClick}>Assinar</StyledButtonHero>
        </Box>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >

          <StyledBoxForm>
            {isCadastroVisible ? <Cadastro /> : <Login />}
            {!isCadastroVisible && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', justifyContent: 'center', alignItems: 'center'}}>
                <Button variant='outlined' sx={{ color: 'white'}} onClick={navigateCadastroPage}>Cadastrar</Button>
                <Button variant='outlined' sx={{ color: 'white' }} onClick={navigateCadastroPage}>Cadastrar com reconhecimento facial</Button>
              </Box>
            )}
          </StyledBoxForm>
        </Modal>

      </StyledBoxHero>

      <Box>
        <div className='i-frame'>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/svVykTznk9Q?si=FKlhQ4PYT-CwsMTA"
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
          <div class="stand-1"></div>
          <div class="stand-2"></div>

        </div>

      </Box>



    </StyledHero>


  );
} 