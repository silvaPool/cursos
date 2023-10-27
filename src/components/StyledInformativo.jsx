import { Box } from "@mui/material";
import styled from "styled-components";
import Kingss from '../assets/images/king3.jpg';
import Castelo from '../assets/images/castelo.jpg';

const StyledInformativo = styled(Box)`
    & {
        height: 80vh;
        background-image: url('${Castelo}');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;        
        
    }
`

export default StyledInformativo;