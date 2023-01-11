import styled from "styled-components";

import noise from "../../../../assets/texture/noise.svg"
import { color } from "../../../../styles/colors";

interface ContainerProps{
  colors: color;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  
  
  width: 100%;
  height: 100%;

  overflow-x: hidden;
  overflow-y: auto;

  form{
    display: flex; 
    flex-direction: column;
    background-image:  linear-gradient(360deg, ${({theme}) => theme.colors.background}99, ${({theme}) => theme.colors.background}72), url(${noise}) ;
    max-width: max-content;
    max-width: calc(100% - 4.1rem);
    padding: 0.9rem;
    margin: 1.2rem;
    border-radius: 0.6rem;
   // box-shadow: 0px 0px 4.7vh #00000078;
    
    input{
      padding: 0.3rem;
      background-color: transparent;
      border-radius: 0.3rem;

      backdrop-filter: blur(18vh);
      border: 2px solid #${props => props.colors[1]}81;
      box-shadow: 0px 0px 0.9vh #00000026;
      background-color: #${props => props.colors[1]}36;
      border-radius: 0.63vh;

      &:hover, &:focus{
        box-shadow: 0px 0px 1.2vh #00000026;
        background-color: #${props => props.colors[0]}81;
      }
      &::placeholder {
        color: #${props => props.colors[0]}81;
        opacity: 1;
      }
    }

    label{
      margin-bottom: 0.45rem;
      margin-top:    0.45rem;
    }

    span, input{
      color: ${({theme}) => theme.colors.text};
    }
    button{
      margin-top: 0.6rem;
      background-image:  linear-gradient(360deg, ${({theme}) => theme.colors.background}99, ${({theme}) => theme.colors.background}72), url(${noise}) ;
      
      &:hover, &:focus {
        transform: scale(1);
      }
    }
  }

`