import styled from "styled-components"

export const TitleTextColor = styled.h1`
  font-size: var(--title-size);
  color: ${props => props.theme.colors.primary};
  background-image: ${props => props.theme.colors.primaryBackground};
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`