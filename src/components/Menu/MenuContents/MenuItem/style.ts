import styled from "styled-components";

import noise from '../../../../assets/texture/noise.svg'



export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.3rem;


  .iconBox{
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 0.6vh;
    background-image:  linear-gradient(360deg, ${({theme}) => theme.colors.background}d9, ${({theme}) => theme.colors.background}99), url(${noise}) ;
    backdrop-filter: blur(18vh);
    box-shadow: 0px 0px 0.9vh #00000026;

    img{
      height: 2.5rem;
      width: 2.5rem;
    }
    svg{
      margin: 0.3rem;
      height: 2rem;
      width: 2rem;
    }
  }

  .label{
    display: block;
    position: absolute;
    top: 4.5rem;
    padding: 0vh;
    color: #fff;
    font-size: 0vh;
    //color: ${({theme})=> theme.title=== "light"? "#000" : "#fff"};
    color: ${({theme})=> theme.colors.text};
    border-radius: 0.6vh;
    background-image:  linear-gradient(360deg, ${({theme}) => theme.colors.background}99, ${({theme}) => theme.colors.background}72), url(${noise}) ;
    backdrop-filter: blur(18vh);
    white-space: nowrap;
  }

  &:hover{ 
    .iconBox{
      transform: scale(1.2) translateY(0.63rem);
      box-shadow: 0px 0px 1.2vh #00000026;
    }
    .label{
      padding: 0.36rem;
      font-size: 0.9rem;
    }
  }

`