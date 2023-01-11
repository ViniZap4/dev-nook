import styled from "styled-components";
import { color } from "../../styles/colors";
import { BoxContainer } from "../styled/BoxContainer";

interface MenuProps{
  width: number;
  colors: color;
}


export const Container= styled(BoxContainer)<MenuProps>`
  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;

  top: 1.8vh;
  right: calc(50vw - (${props => `${props.width}px` || '30vw'} / 2) );
  background-color: #${props => props.colors[1]}45;

  //min-width: 30vw;
  max-width: 90vw;

  margin: 0px;
  padding: 0.3rem;

  border: 1px solid #${props => props.colors[0]}45;
  
  color: #fff;

  z-index:1;
`