import styled from "styled-components";
import { Box } from "@mui/material";

const StyledBoxForm = styled(Box)`
 & {   
    /* background-color: #240046; */
    background: linear-gradient(#240046, #240046) padding-box,
              linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
    
    position: relative;
    top: 50%;
    left: 50%;
    border: 2px solid transparent;
    transform: translate(-50%, -50%);
    animation: gradient 5s ease infinite;
    height: 550px;
    max-width: 420px;
    border-radius: 16px;

    @keyframes gradient {
        0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
        
    }
 }
 `

export default StyledBoxForm;