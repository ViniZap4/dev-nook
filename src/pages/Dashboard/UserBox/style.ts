import styled from "styled-components";
import { BoxContainer } from "../../../components/styled/BoxContainer";
import { color } from "../../../styles/colors";

interface ContainerProps{
  colors: color
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2.4vh;
  flex-wrap: nowrap;
  

  .iconBox{
    display: flex;
    justify-content: center;
    align-content: center;
    height: 6rem;
    margin: 0.9vh 0.9vw;
    overflow: hidden;
    border-radius:5rem;
    border: 3px solid #${props => props.colors[0]};
    box-shadow: 0px 0px 9vh #${props => props.colors[0]};
    //box-shadow: 0px 0px 9vh #00000054;
    
    img{
      display: flex;
      height: 100%;
      border-radius:5rem;
    }
  }
  .userData{
    margin-right: 1.8vh;
    color: ${({theme})=> theme.colors.text};
  
  }
`