import styled from "styled-components";
import noise from  "../../../../../../assets/texture/noise.svg"
import { color } from "../../../../../../styles/colors";

interface FormStylesProps{

}

export const FormStyles = styled.form<FormStylesProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  

  .division{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.3rem 1.6rem;
    flex-grow: 1;
    background-image:  linear-gradient(360deg, ${({theme}) => theme.colors.background}a0, ${({theme}) => theme.colors.background}45), url(${noise}) ;
    padding: 0.6rem;
    border-radius: 0.6rem;
    box-shadow: 0px 0px 1.9vh #00000047;

    .titleStyleSettings{
      align-self: flex-start;
      color: ${({theme}) => theme.colors.text};
      margin-bottom: 0.6rem;
    }

    .colorsContainer{
      display: flex;
      flex-direction: row;
    }
  }


`

interface ColorOptionContainerProps{
 colors: color;
}

export const ColorOptionContainer = styled.div<ColorOptionContainerProps>`
  display: flex;
  margin-bottom: 0.6rem;

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
      background-image: none;
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
    //border: 1px solid #${props => props.colors[0]}60;
    border-radius: 2.5rem;
    //overflow: hidden;
    background-image:  linear-gradient(360deg, ${({theme}) => theme.colors.background}d9, ${({theme}) => theme.colors.background}b0), url(${noise}) ;

    svg{
      height: 81%; 
      width: 81%;
    }

  }

`