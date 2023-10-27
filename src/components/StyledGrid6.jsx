import { Box } from "@mui/material";
import styled from "styled-components";
import Grid from '@mui/material/Grid';

const StyledGrid6 = styled(Grid)`
     & {
       position: relative;
       background: #3C3B3F;  
       background: -webkit-linear-gradient(to right, #605C3C, #3C3B3F);  
       background: linear-gradient(to right, #605C3C, #3C3B3F); 
       display: flex;
       align-items: center;
       justify-content: center;
       font-weight: bold;
       border-radius: 15px;
       cursor: pointer;
       color: white;
       font-size: 1.5rem;

       &::before,
       &::after {
        position: absolute;
        content: "";
        width: 20%;
        height: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        font-weight: bold;
        background-color: white;
        transition: all 0.5s;
       }

       &::before {
        top: 0;
        right: 0;
        border-radius: 0 15px 0 100%;
       }

       &::after {
        bottom: 0;
        left: 0;
        border-radius: 0 100%  0 15px;
       }

       &:hover::before,
       &:hover::after {
        border-radius: 15px;
        width: 100%;
        height: 100%;
        transition: all 0.5s;
        color: black;
       }

       &:hover::after {
        content: "REI ROBOÃO";
       }
    }
`

export default StyledGrid6;