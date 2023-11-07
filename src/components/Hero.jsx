import * as React from 'react';
import StyledHeader from './StyledHeader';
import { Box, Typography } from '@mui/material';
import styled from "styled-components";
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Modal } from '@mui/material';
import Login from '../pages/autenticacao/Login';
import { Outlet, useNavigate } from 'react-router-dom';
import Cadastro from '../pages/autenticacao/cadastro';
import StyledHero from './StyledHeader';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 500,
  bgcolor: 'Snow',
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
      <Typography variant='h1'>
        Reign
      </Typography>

      <Button onClick={handleSaibaMaisClick} variant='outlined'>Entrar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >

        <Box sx={style}>
          {isCadastroVisible ? <Cadastro /> : <Login />}
          {!isCadastroVisible && (
            <Button variant='outlined' sx={{ color: 'black' }} onClick={navigateCadastroPage}>Cadastrar</Button>
          )}
        </Box>
      </Modal>
    </StyledHero>


  );
} 