import styled from "styled-components";
import { Box } from "@mui/material";

const StyledBoxConteudo = styled(Box)`
 & {
   border: 1px solid black;
   width: 30vw;
   height: 20vh;
   
   background-color: brown;
   /* border-top-right-radius: 40%;
  border-bottom-right-radius: 40%; */
  
   
 }
 `

export default StyledBoxConteudo;