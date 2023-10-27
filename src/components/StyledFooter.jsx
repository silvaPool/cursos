import { Box } from "@mui/material";
import styled from "styled-components";

const StyledFooter = styled(Box)`
    & {
       
        height: 30vh;
        border-top: 0.5px solid black;
        padding: 2rem;
        display: flex;
        justify-content: space-between;
       
        
    }
`

export default StyledFooter;