import styled from 'styled-components'

import noise from '../../assets/texture/noise.svg'
import fractalNoise from '../../assets/texture/fractal-noise.svg'
import grainyNoise from '../../assets/texture/grainy-svg.svg'


export const BoxContainer = styled.div`
  display: flex;
  align-items:  center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2vh 2vw;

  border-radius: 0.54rem;
  box-shadow: 0px 0px 3.9vh #0000002b;

  background-image:  linear-gradient(360deg, ${({theme}) => theme.colors.background}45, #ffffff00), url(${noise}) ;
  backdrop-filter: blur(18vh);
`