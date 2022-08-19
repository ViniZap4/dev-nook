import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};

  .loginBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90%;

    .message{
      font-size: var(--text-size);
      color: ${props => props.theme.colors.text};
      margin: 3vh 0vw;
    }
    .buttonLogin{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      border: 0.3vh solid ${props => props.theme.colors.primary};
      border-radius: 0.7vh;
      background-color: ${props => props.theme.colors.background};
        
      .text{
        width:90%;
        font-size: var(--text-size);
        margin: 0.63vh;
        font-size: var(--text-size);
        color: ${props => props.theme.colors.primary};
      }

      &:hover{
        background-color: ${props => props.theme.colors.primary};

        .text{
          color: #fff;
        }
      }
    }
  
  }


`