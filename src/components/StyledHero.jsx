import { Box } from "@mui/material";
import styled from "styled-components";


const StyledHero = styled(Box)`
    & {
        color: white;
        height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        text-transform: capitalize;
    }
`

export default StyledHero;