import { Box } from "@mui/material";
import styled from "styled-components";
import Grid from '@mui/material/Grid';

const StyledGrid = styled(Grid)`
     & {
       position: relative;
      
       background: linear-gradient(80deg, #0077cc 0%, #003366 100%);


  
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
      
        background: #8E2DE2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
        color: white;
       }

       &:hover::after {
        content: "REI DAVI";
       }
    }
`

export default StyledGrid;