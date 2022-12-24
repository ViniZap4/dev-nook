import styled from 'styled-components'
import { PageContainer } from '../../components/styled/Page'

import noise from '../../assets/texture/noise.svg'
import fractalNoise from '../../assets/texture/fractal-noise.svg'
import grainyNoise from '../../assets/texture/grainy-svg.svg'

export const HomeContainer = styled(PageContainer)`
  display: flex;
  align-items:  center;
  justify-content: center;

  
  .contentConatiner{
    display: flex;
    align-items:  center;
    justify-content: center;

    border-radius: 0.9vh;
    box-shadow: 0px 0px 3.9vh #0000002b;

    padding: 2.1vh 3vw;

    background-image:  linear-gradient(360deg, ${({theme}) => theme.colors.background}45, #ffffff00), url(${noise}) ;
    backdrop-filter: blur(18vh);
  }
`
