import styled from "styled-components";
import noise from  "../../../../../../assets/texture/noise.svg"
import { color } from "../../../../../../styles/colors";

interface FormStylesProps{

}

export const FormStyles = styled.form<FormStylesProps>`
  display: flex;
  flex-direction: column;

  .titleStyleSettings{
    color: ${({theme}) => theme.colors.text};
    margin-bottom: 0.6rem;
  }

  .colorsContainer{
    display: flex;
    flex-direction: row;
  }
`

interface ColorOptionContainerProps{
 colors: color;
}

export const ColorOptionContainer = styled.div<ColorOptionContainerProps>`
  display: flex;
  

  .colorOption{
    display: flex;
    appearance: none;


    &:hover + .colorOptionLabel{
      transform: scale(1.1);
      background-color: #${props => props.colors[3]}30;
      box-shadow: 0px 0px 1.2vh #0000001b;
    }
    &:checked + .colorOptionLabel{
      transform: scale(1.2);
      background-color: #${props => props.colors[3]}60;
      box-shadow: 0px 0px 2.1vh #0000001b;
    }
  }

  .colorOptionLabel{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.3rem;
    height: 2.5rem; 
    width: 2.5rem;
    border: 1px solid #${props => props.colors[0]}60;
    border-radius: 2.5rem;
    overflow: hidden;

    svg{
      height: 90%; 
      width: 90%;
    }
  }

`