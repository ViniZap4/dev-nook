import styled from "styled-components";

interface ActionButtonContainerProps {
  color: string,

}

export const ActionButtonContainer = styled.button<ActionButtonContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 0.81rem;
  width:  0.81rem;
  margin: 0.2rem;
  background-color: #ccc;
  border-radius: 1rem;
  

  background-color: ${props => props.color};

  .ActionButton{
    margin: 0px !important;
    width: 63%  !important; 
    height: 63% !important;
  }
`