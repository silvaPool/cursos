import styled from "styled-components";
import { Box, Button } from "@mui/material";


const StyledButtonForm = styled(Button)`
 & {
   
    width: 85%;
  height: 40px;
  margin: 12px auto 5px;
  color: #fff;
  background: #573b8a;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: .2s ease-in;

  &:hover {
    background-color: #6d44b8;
  }
 }
 `

export default StyledButtonForm;