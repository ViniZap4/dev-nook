import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: max-content;
  background: ${props => props.theme.colors.backgroundLight};
  margin-top: 1.8vh;
  border-radius: 0.6vh;
  box-shadow: 0 0 3vh #000000c4;
`