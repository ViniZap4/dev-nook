import styled from "styled-components";
import { BoxContainer } from "../../../../components/styled/BoxContainer";

export const Container = styled.button`
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
    background-color:#fffb;
    width: 3rem;
    height: 3rem;
    border-radius: 2rem;

    svg{
      width: 62%;
      height: 62%;
    }
  }
  .shortcutLabel{
    position: absolute;
    border-radius: 0.54rem;
    font-size: 0rem;
    white-space: nowrap;
    //color: ${({theme}) => theme.colors.text};
    color: #000;
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
export const CreateNewShortcutBoxContainer = styled(BoxContainer)`
  position: fixed;
  width: 30vw;
  height: 40vh;

`