import { useContext } from "react";
import styled from "styled-components";

import { color } from "../../styles/colors";

interface BackgroundConteinerProps{
  colors: color
}

export const Container = styled.div<BackgroundConteinerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
  top: 0px;
  left: 0px;

  background-color:transparent;
  background-image: linear-gradient(to bottom,  ${({theme}) => theme.colors.background} , #${props => props.colors[1]});
`