import styled from "styled-components";
import { BoxContainer } from "../styled/BoxContainer";
import noise from  "../../assets/texture/noise.svg"
import { color } from "../../styles/colors";

interface ContainerProps {
  colors: color,
  position:{ x: number, y: number},
  isDraggable: boolean,
  isMinimized: boolean,
  isFullScreen:boolean,
  size: { x: number, y: number},
  isResizing: boolean,
}

export const Container = styled(BoxContainer)<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  position: fixed;
  margin: 0%;
  
  transition: transform 0.6s, width 0.6s, height 0.6s;

  overflow: hidden;

  z-index: 2;
  ${props => {
    if(props.isResizing) return(`
      transition: transform 0.6s, width 0s, height 0s;
      z-index: 5;
    `) 
  }}

  width: ${props => props.size.x}px;
  height: ${props => props.size.y}px;
  min-width: 300px;
  min-height: 300px;

  ${props => props.isFullScreen ? (`
      transition: top 0.6s, left 0.6s, ;
      top: 0px;
      left: 0px;
      z-index: 5;
    `) : (`
      top:  ${props.position.y}px;
      left: ${props.position.x}px;
    `)
  }
  ${props => {
    if(props.isMinimized) return(`
      transform: scale(0);
    `)
  }}

  ${props => {
    if(props.isDraggable) return(`
      user-select:none;
      cursor: grab;
      z-index: 5;
    `) 
  }}
  
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-image:  linear-gradient(360deg, ${({theme}) => theme.colors.background}99, ${({theme}) => theme.colors.background}72), url(${noise}) ;

    .ActionButtons{
      display: flex;
      
      margin-left: 0.3rem;
    }

    span{
      margin: 0.6rem;
      //color: #${props => props.colors[0]};
      color: ${({theme}) => theme.colors.text}
    }

    .iconHeader, svg{
      margin: 0.6rem;
      height: 1.2rem;
      width:  1.2rem;
    }
  }
  
  .leftGrab,.rightGrab,.topGrab, .bottomGrab, .topLeftGrab, .topRightGrab, .bottomLeftGrab, .bottomRightGrab{
    position: absolute;
  }

  .leftGrab, .rightGrab{
    height: 100%;
    width: 6px;
    cursor:col-resize;
  }

  .topGrab, .bottomGrab{
    height: 6px;
    width: 100%;
    cursor:row-resize;
  }

  .leftGrab{
    left: 0px;
  }
  .rightGrab{
    right: 0px;
  }
  .topGrab{
    top: 0px;
  }
  .bottomGrab{
    bottom: 0px;
  }
 
  .topLeftGrab, .topRightGrab, .bottomLeftGrab, .bottomRightGrab{
    width: 6px;
    height: 6px;
  }

  .topLeftGrab{
    left: 0px;
    top: 0px;
    cursor:nw-resize;
  }
  .topRightGrab{
    right: 0px;
    top: 0px;
    cursor:ne-resize;
  }
  .bottomLeftGrab{
    left: 0px;
    bottom: 0px;
    cursor:sw-resize;
  }
  .bottomRightGrab{
    right: 0px;
    bottom: 0px;
    cursor:se-resize;
  }
`

