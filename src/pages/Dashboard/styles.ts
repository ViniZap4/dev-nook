import styled from "styled-components";

import { PageContainer } from "../../components/styled/Page";
import { BoxContainer } from "../../components/styled/BoxContainer";

import noise from '../../assets/texture/noise.svg'

export const DashBoardContainer = styled(PageContainer)`
  align-items: center;
  justify-content: center;
`

export const DashBoardContentContainer = styled(BoxContainer)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-image: linear-gradient(360deg, ${({theme}) => theme.colors.background}45, ${({theme}) => theme.colors.background}27), url(${noise});
  width: 95vw;
  height: 90vh;
`