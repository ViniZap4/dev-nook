import styled from "styled-components";
import { color } from "../../styles/colors";

interface ButtonStyledProps{
  colors: color
}


export const ButtonText = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #${props => props.colors[1]}81;
  box-shadow: 0px 0px 0.9vh #00000026;
  background-color: #${props => props.colors[1]}36;
  border-radius: 0.63vh;

  span{
    margin: 0.9vh;
    color: ${({theme}) => theme.colors.text};
  }

  &:hover, &:focus{
    transform: scale(1.1);
    box-shadow: 0px 0px 1.2vh #00000026;
    background-color: #${props => props.colors[0]}81;
  }
`