import styled from "styled-components";
import { Box } from "@mui/material";

const StyledBoxHero = styled(Box)`
 & {   
    overflow-wrap: break-word;
    width: 50%;
    height: 50%;
    margin-right: 10rem;
    margin-left: 5rem;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    position: relative;
    bottom: 100px;
 }
 `

export default StyledBoxHero;