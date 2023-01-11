import styled from "styled-components";
import noise from  "../../../../../assets/texture/noise.svg"

export const Container = styled.div`
  display: flex; 
  flex-direction: column;
  background-image:  linear-gradient(360deg, ${({theme}) => theme.colors.background}99, ${({theme}) => theme.colors.background}72), url(${noise}) ;
  width: max-content;
  max-width: calc(100% - 4.1rem);
  //min-width: max-content;
  padding: 0.9rem;
  margin: 1.2rem;
  border-radius: 0.9rem;
  box-shadow: 0px 0px 4.7vh #00000078;

  .title{
    color: ${({theme}) => theme.colors.text};
  }

  .contents{
    margin-top: 1.2rem;
  }
  
`