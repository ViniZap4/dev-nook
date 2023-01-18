import styled from "styled-components";

import noise from "../../../../assets/texture/noise.svg"
import { color } from "../../../../styles/colors";
import { windowPageApp } from "../../../styled/windowAppPage";

interface ContainerProps{
  colors: color;
}

export const Container = styled(windowPageApp)<ContainerProps>`
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

     //backdrop-filter: blur(18vh);
      border: none;
      border-bottom: 2px solid #${props => props.colors[1]}81;
      //box-shadow: 0px 0px 0.9vh #00000026;
      //background-color: #${props => props.colors[1]}36;
      //border-radius: 0.63vh;
      margin-bottom: 0.3rem;
      ${({theme}) => theme.title === "dark" ?`
        filter: brightness(1);
      `:`
        filter: brightness(0.5);
      `}
      &:hover, &:focus{
        ${({theme}) => theme.title === "dark" ?`
          filter: brightness(2);
        `:`
          filter: brightness(1);
        `}
        //box-shadow: 0px 0px 1.2vh #00000026;
        //background-color: #${props => props.colors[1]}81;
      }
      &::placeholder {
        color: #${props => props.colors[1]}81;
        opacity: 1;
      }
    }

    label{
      margin-bottom: 0.45rem;
      margin-top:    0.45rem;
    }

    span, input, h3{
      color: ${({theme}) => theme.colors.text};
    }

    h3{
      align-self: center;
    }
    button{
      background-image: none;
      background-color: transparent;
      margin-top: 0.6rem;
     // background-image:  linear-gradient(360deg, ${({theme}) => theme.colors.background}99, ${({theme}) => theme.colors.background}72), url(${noise}) ;
    
     &:hover, &:focus {
        transform: scale(1);
      }
    }
  }

`