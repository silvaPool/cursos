import * as React from 'react';
import StyledHeader from './StyledHeader';
import { Box, Typography } from '@mui/material';
import styled from "styled-components";
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Modal } from '@mui/material';
import Login from '../pages/Login';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid blue',
  color: 'black',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



export default function Reis() {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    
  };

  const handleSaibaMaisClick = () => {
    handleOpen();
    navigate("/login");
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledHeader sx={{ flexGrow: 1 }}>
      <Typography variant='h1'>
        Reign: Pai para Filho
      </Typography>

      <Button onClick={handleSaibaMaisClick} variant='outlined'>Entrar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Login />
        </Box>
      </Modal>
    </StyledHeader>


  );
} 