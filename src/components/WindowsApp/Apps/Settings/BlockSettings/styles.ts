import styled from "styled-components";
import noise from  "../../../../../assets/texture/noise.svg"

interface ContainerProps{
  direction:  string;
  alignItems: string;
  justifyContent: string;
  subtitle: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex; 
  flex-direction: ${props => props.direction};
  
  max-width: calc(100% - 4.1rem);
  
  padding: 0.9rem;


  background-image:  linear-gradient(360deg, ${({theme}) => theme.colors.background}99, ${({theme}) => theme.colors.background}72), url(${noise}) ;
  
  ${props => props.subtitle? `
    margin: 0.9rem;
    border-radius: 0.6rem;

    &:hover{
      box-shadow: 0px 0px 2.7vh #00000028;
      transform: scale(1.05);
    }

  ` : `
    margin: 1.2rem;
    box-shadow: 0px 0px 4.7vh #00000078;
    border-radius: 0.9rem;
  `}

  flex-grow: 1;
  min-height: max-content;

  .title, .subtitle {
    align-self: flex-start;
    color: ${({theme}) => theme.colors.text};
  }

  .contents{
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: ${props => props.alignItems};
    justify-content:${props => props.justifyContent};
    flex-wrap: wrap;
    margin-top: 1.2rem;
  }
  
`