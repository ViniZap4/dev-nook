import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
    
  .PageItem{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.6vh 0.9vh;
    

    .title{
      padding: 0vh;
      background: ${props => props.theme.colors.backgroundLight};
      color: ${props => props.theme.colors.text};
      position: absolute;
      font-size: 0vh;
      bottom: -3.6vh;
      border-radius: 0.27vw;
      box-shadow: 0 0 0.9vh #000000c4;
    }

    &:hover{
      .iconBox{
        transform: translateY(0.6vh) scale(1.2);
        box-shadow: 0 0 3vh #000000c4;
      }
    
      .title{
        bottom: -4.5vh;
        padding: 0.45vh;
        font-size: 1.8vh;
        z-index: 5;
      }
    }
  }
`

