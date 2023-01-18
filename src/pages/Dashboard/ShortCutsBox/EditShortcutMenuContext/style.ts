import styled from "styled-components";
import { BoxContainer } from "../../../../components/styled/BoxContainer";
import { color } from "../../../../styles/colors";

interface ContainerProps{
  colors: color
  positionX: number;
  positionY: number;
}

export const Container = styled(BoxContainer)<ContainerProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;


  top: calc(${props => props.positionY}px - 0.6rem -  3.6vh );
  left: calc(${props => props.positionX}px - 0.3rem - 3.6vw );

  //background-color: #${props=> props.colors[0]}D1;
  background-color: ${({theme}) => theme.colors.background}f0;
  border: 1px solid #${props=> props.colors[0]}54;

  z-index: 6;
  padding: 0.6rem 0.3rem;

  button,a {
    margin: 0.2rem 0.9rem ;
    color: ${({theme})=> theme.colors.text}
  }

`

interface ConfirmBoxProps{
  colors: color
}


export const ConfirmBox = styled(BoxContainer)<ConfirmBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  min-width: 12rem;
  height: 5rem;
  
  position: fixed;
  top:  calc(50vh - 12.6rem);
  left: calc(50vw - 5.15rem);

  //background-color: #${props=> props.colors[0]}D1;
  background-color: ${({theme}) => theme.colors.background}f0;
  border: 1px solid #${props=> props.colors[0]}54;

  z-index: 6;
  padding: 0.6rem 0.3rem;

  .ButtonBox{
    display: flex;
    flex-direction: row;
    margin-top: 0.6rem;
  }
`