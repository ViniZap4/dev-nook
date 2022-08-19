import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};

  h1{
    color: #fff;
    font-size: var(--sub-title-size);
  }
`