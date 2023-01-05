import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .TitleContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${({theme}) => theme.colors.text};
    text-align: center;
    margin: 1.8vh 2.7vw;
  }
  h1{
    margin-bottom: 2.7vh;
  }
`