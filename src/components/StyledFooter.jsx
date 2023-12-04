import { Box } from "@mui/material";
import styled from "styled-components";

const StyledFooter = styled(Box)`
    & {
       
        height: 30vh;
        width: 1500px;
        margin: 0 auto;
       border: 1px solid black;
        padding: 2rem;
        display: flex;
        justify-content: space-between;
       
        
    }
`

export default StyledFooter;