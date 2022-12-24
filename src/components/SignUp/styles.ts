import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  margin: 9vh 6.3vw;
  
  .MessageContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${({theme})=> theme.colors.text};

    .Title, .Text{
      margin-bottom: 3vh;
    }
  }
`