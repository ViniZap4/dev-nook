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
    
    .iconBox{
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #121212;
      height: 4.5vh;
      width: 4.5vh;
      border-radius: 0.3vw;
      overflow: hidden;
      .icon{
        height: 80%;
      }
    }

    .title{
      padding: 0vh;
      background-color: ${props => props.theme.colors.text};
      color: ${props => props.theme.colors.background};
      position: absolute;
      font-size: 0vh;
      bottom: -3.6vh;
      border-radius: 0.3vw;
    }

    &:hover{
      .iconBox{
        transform: scale(1.2) translateY(0.6vh);
      }
    
      .title{
        bottom: -4.5vh;
        padding: 0.45vh;
        font-size: 1.8vh;
      }
    }
  }
`