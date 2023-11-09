import { Box } from "@mui/material";
import styled from "styled-components";
import Rei from '../assets/images/reinovo.jpg';

const StyledHero = styled(Box)`
    & {
        background-image: url('${Rei}');
        background-repeat: no-repeat;
        background-position: left;
        background-size: contain;
        height: 200vh;
        color: white;
        height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: right;
        align-items: center;
    }
`

export default StyledHero;