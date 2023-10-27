import { Box } from "@mui/material";
import styled from "styled-components";


const StyledHeader = styled(Box)`
    & {
        /* background: #232526;  
        background: -webkit-linear-gradient(to right, #414345, #232526); 
        background: linear-gradient(to right, #414345, #232526);  */
        background: rgba(0, 0, 0, 0.9);
        color: white;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
    }
`

export default StyledHeader;