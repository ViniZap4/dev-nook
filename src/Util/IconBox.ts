import styled from "styled-components";


interface Props{
  index: number;
}

export const IconBox = styled.div<Props>`
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #121212;
      height: 4.5vh;
      width: 4.5vh;
      border-radius: 0.3vw;
      overflow: hidden;
      
      animation: scale-in-center 0.45s ${props => (props.index)/12}s linear;

      .icon{
        height: 80%;
      }
`