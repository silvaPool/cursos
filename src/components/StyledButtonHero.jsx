import styled from "styled-components";
import { Box, Button } from "@mui/material";


const StyledButtonHero = styled(Button)`
 & {
    padding: 1em 2em;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: white;
  transition: all 1000ms;
  font-size: 15px;
  position: relative;
  overflow: hidden;
  outline: 2px solid #2c9caf;

  &:hover {
    color: #ffffff;
  transform: scale(1.1);
  outline: 2px solid #70bdca;
  box-shadow: 4px 5px 17px -4px #268391;
  }

  &::before {
    content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #2c9caf;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1000ms;
  }

  &:hover::before {
    width: 250%;
  }
   
   
 }
 `

export default StyledButtonHero;