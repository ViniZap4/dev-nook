import styled from "styled-components";
import { BoxContainer } from "../../../components/styled/BoxContainer";
import { color } from "../../../styles/colors";

interface ContainerProps{
  colors: color
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin: 2.4vh;

  h2{
    color:${({theme}) => theme.colors.text};
    margin-bottom: 1.2rem;
  }

  .ShortCuts{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
  }


`