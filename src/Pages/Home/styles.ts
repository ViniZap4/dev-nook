import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
  background-size: cover;
  background-position: center;

  .welcome {
    display: flex;
    flex-direction: column;
  
    margin-left: 6vw;
    border-radius: 3vh;

    .description{
      color: ${props => props.theme.colors.secondary};
      font-size: var(--sub-title-size);
    }
    .login{
      display: flex;
      align-items: center;
      justify-content: center;
      width: max-content;
      margin-top:4.5vh;
      border: 0.3vh solid ${props => props.theme.colors.primary};
      border-radius: 0.7vh;
      background-color: ${props => props.theme.colors.background};
        
      .text{
        margin: 0.36vh 0.63vw;
        font-size: var(--text-size);
        color: ${props => props.theme.colors.primary};
      }
      
      &:hover{
        background-color: ${props => props.theme.colors.primary};
        transform: scale(1.15);

        .text{
          color: #fff;
        }
      }

    }
   
  }
`