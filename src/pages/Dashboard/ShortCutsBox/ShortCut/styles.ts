import styled from "styled-components";
import { color } from "../../../../styles/colors";

interface ContainerProps {
  colors: color
}

export const Container = styled.a<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0.6rem;
  min-width: 3rem;

  .IconBox{
    display: flex;
    align-items: center;
    justify-content: center;
    //background-color: ${({theme}) => theme.colors.background}27;
    background-color:#fffb;
    width: 2.1rem;
    height: 2.1rem;
    border-radius: 0.54rem;

    padding: 0.36rem;
    
    .textIcon{
      font-size: 0.81rem;
      font-weight: bold;
      color: #${props => props.colors[0]}
    }
  }
  .shortcutLabel{
    position: absolute;
    border-radius: 0.54rem;
    font-size: 0rem;
    color: #000;
    //color: ${({theme}) => theme.colors.text};
    bottom: -1.7rem;
    padding: 0.36rem;
  }

  &:hover{
    transform: scale(1.2) translateY(-0.54rem);
    .IconBox{
      background-color:#fffd;
      box-shadow: 0px 0px 3.9vh #0000002b;

    }
    
    .shortcutLabel{
      font-size: 0.72rem;
      background-color:#fffd;
      box-shadow: 0px 0px 3.9vh #0000002b;
    }
  }

`