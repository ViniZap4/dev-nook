import styled from "styled-components";

import { PageContainer } from "../../components/styled/Page";
import { BoxContainer } from "../../components/styled/BoxContainer";

import noise from '../../assets/texture/noise.svg'

export const DashBoardContainer = styled(PageContainer)`
  align-items: center;
  justify-content: center;

`

export const DashBoardContentContainer = styled(BoxContainer)`
    margin: 3vh 3vw;
    //background-image:  linear-gradient(360deg, ${({theme}) => theme.colors.background}09, #ffffff00), url(${noise});
    box-shadow: none;
    background-image: none;
    backdrop-filter: blur(0vh);
`