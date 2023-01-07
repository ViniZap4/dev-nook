import styled from "styled-components";
import noise from  "../../../../../assets/texture/noise.svg"

export const Container = styled.div`
  display: flex; 
  flex-direction: column;
  background-image:  linear-gradient(360deg, ${({theme}) => theme.colors.background}99, ${({theme}) => theme.colors.background}72), url(${noise}) ;
  width: max-content;
  padding: 0.9rem;
  margin: 1.2rem;
  border-radius: 0.9rem;
  box-shadow: 0px 0px 2.7vh #0000002b;

  .title{
    color: ${({theme}) => theme.colors.text};
  }

  .contents{
    margin-top: 1.2rem;
  }
  
`