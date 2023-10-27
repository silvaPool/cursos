import { Box } from "@mui/material";
import styled from "styled-components";

const StyledCursos = styled(Box) `
    & {
        
        height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        color: white;
        gap: 4rem;
        
    }
`

export default StyledCursos;