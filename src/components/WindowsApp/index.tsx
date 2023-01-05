import { useContext, useEffect, useRef, useState } from "react";
import { App } from "../../@types/app";

//icons
import CloseIcon from "../../assets/icons/actionButtons/closeIcon";
import MaxScreenIcon from "../../assets/icons/actionButtons/MaxScreenIcon";
import MinimizeIcon from "../../assets/icons/actionButtons/MinimizeIcon";

//context
import { AppContext } from "../../contexts/appsContext";
import usePersistedState from "../../util/usePersistedState";
//components
import ActionButton from "./ActionButton";
//style
import { Container } from "./styles";

export default function WindowsApp({title, element, icon, minimize}: App){
  const {mousePosition, apps, setApps,appFocus, setAppFocus} = useContext(AppContext)

  const [focus, setFocus] = useState(true)

  const refWindow = useRef<HTMLDivElement>(null)
  const [isMinimized, setIsMinimized] = useState(minimize)

  const [position, setPosition] = usePersistedState(`${title}_position`,{x: 100, y: 100})
  const [distance, setDistance] = useState({x: 10, y: 10})
  const [draggable, setDraggable] = useState(false)

  const [size, setSize] = useState({x: 300, y: 300})
  const [windowSize, setWindowSize] = usePersistedState(`${title}_size` ,{x: 300, y: 300})
  const [isResizing, setIsResizing] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [allDistance, setAllDistance] = useState({ x: (position.x + size.x), y: (position.y + size.y)}) 

  const resizableInitialValue ={
    top: false, bottom: false, left: false,  right: false
  }
  const [resizable,setResizable] = useState(resizableInitialValue)

  function handleAtribute(){
    if (refWindow !== null){
      setSize({ x: windowSize.x, y: windowSize.y})
    }
    setAppFocus(title)
  }

  useEffect(() => {
    handleAtribute()

    document.addEventListener("mouseup",() => hundleMouseUp());
    return(
      document.removeEventListener("mouseup",() => hundleMouseUp())
    )
  },[])

  useEffect(() => {
    setFocus(appFocus === title)
  },[appFocus])

  function hundleMouseUp(){
    setDraggable(false)
    setResizable(resizableInitialValue)
    if(isResizing) setIsResizing(false)
  }
 
  // drag
  function grab(){
    if(!draggable)  return

    var newPosition = { x: mousePosition.x-distance.x , y: mousePosition.y-distance.y }
    
    if(newPosition.x <= 0) newPosition.x = 0
    if(newPosition.y <= 0) newPosition.y = 0
    if(newPosition.x + size.x>= window.innerWidth) newPosition.x =  window.innerWidth-size.x
    if(newPosition.y + size.y >= window.innerHeight) newPosition.y = window.innerHeight-size.y
    
    if(newPosition.x <= 0 || newPosition.y <= 0 || mousePosition.x >= window.innerWidth || mousePosition.y >= window.innerHeight){
      setDraggable(false)
    }
    setPosition(newPosition)
  }

  function isDraggable(){
    setDistance({ x: mousePosition.x-position.x, y:mousePosition.y -position.y })
    setDraggable(true)
  }
  
  function removeApp(){
    const appRemoved = apps.filter(obj => {
      return obj.title !== title
    })
    setApps(appRemoved)
  }

  //minimize
  useEffect(() => {
    setIsMinimized(minimize)
  },[minimize])

  useEffect(()=>{
    const appIndex = apps.findIndex((obj => obj.title === title));
    if(apps[appIndex].minimize !== isMinimized){
      apps[appIndex].minimize = isMinimized
      setApps(apps)
    }
  },[isMinimized])

  //fullScreen
  useEffect(() => {
    if(!isFullScreen){
      setWindowSize(size)
    }
  },[size])
  
  function handleFullSize(){
    if(isFullScreen){
      setSize(windowSize)
    }else{
      setSize({x: window.innerWidth, y: window.innerHeight})
    }
    setIsFullScreen(!isFullScreen)
  }

  function rezise(){
    if(!isResizing) return
 
    if(resizable.right){
      if(resizable.top){
        if(resizeTop() < 300) return
        setSize({x:resizeRight(), y: resizeTop()})
        setPosition({...position, y: mousePosition.y})
        return
      }
      if(resizable.bottom){
        setSize({x: resizeRight(), y: resizeBottom()})
        return
      }
      setSize({...size, x: resizeRight()})
    }
    
    if(resizable.left){
      if(resizeLeft() < 300) return

      if(resizable.top){
        if(resizeTop() < 300) return
        setSize({ x: resizeLeft(), y:resizeTop()})
        setPosition({y: mousePosition.y, x: mousePosition.x})
        return
      }
      if(resizable.bottom){
        setSize({x: resizeLeft(), y: resizeBottom()})
        setPosition({...position, x: mousePosition.x})
        return
      }
      setSize({...size, x: resizeLeft()})
      setPosition({...position, x:  mousePosition.x})
    }
    
    if(resizable.top){
      if(resizeTop() < 300) return
      setSize({...size, y: resizeTop()})
      setPosition({...position, y: mousePosition.y})
      return
    }

    if(resizable.bottom){
      setSize({...size, y: resizeBottom()})
      return
    }
  }
  
  function resizeRight(){ return mousePosition.x - position.x }
  function resizeLeft(){ return allDistance.x - mousePosition.x }
  function resizeTop(){ return allDistance.y - mousePosition.y }
  function resizeBottom(){ return mousePosition.y - position.y }
  
  function hundleResize(obj: typeof resizableInitialValue ){
    setIsResizing(true)
    setResizable(obj)
    setAllDistance({ x: (position.x + size.x), y: (position.y + size.y)})
  }

  useEffect(() => {
    grab()
    rezise()
  },[mousePosition])

  return(
    <Container 
      ref={refWindow} focus={focus} isDraggable={draggable} isMinimized={isMinimized} isFullScreen={isFullScreen} isResizing={isResizing} onMouseDown={()=>setAppFocus(title)}
      style={{
        top: isFullScreen? "0px" : position.y , left: isFullScreen? "0px" : position.x,
        width: `${size.x}px` , height: `${size.y}px`
      }}
    >
      <div className="header" onMouseDown={isDraggable} >
        <div className="ActionButtons">
          <ActionButton focus={focus} color="#f00" action={removeApp} icon={<CloseIcon color={focus?"#000": "#ccc"} />}/>
          <ActionButton focus={focus} color="#ff0" action={()=>setIsMinimized(true)} icon={<MinimizeIcon color={focus?"#000": "#ccc"} />}/>
          <ActionButton focus={focus} color="#0f0" action={handleFullSize} icon={<MaxScreenIcon color={focus?"#000": "#ccc"} />}/>
        </div>
        <span>{title}</span>
        {typeof icon === 'string' ? <img src={icon} className="iconHeader" alt="icon" /> : icon }
      </div>
      {element}
  
      <div className="leftGrab"   onMouseDown={() => hundleResize({...resizable, left: true})}   ></div>
      <div className="rightGrab"  onMouseDown={() => hundleResize({...resizable, right: true})}  ></div>
      <div className="topGrab"    onMouseDown={() => hundleResize({...resizable, top: true})}    ></div>
      <div className="bottomGrab" onMouseDown={() => hundleResize({...resizable, bottom: true})} ></div>

      <div className="topLeftGrab"     onMouseDown={() => hundleResize({...resizable, left:  true, top: true})}   ></div>
      <div className="topRightGrab"    onMouseDown={() => hundleResize({...resizable, right: true, top: true})}   ></div>
      <div className="bottomLeftGrab"  onMouseDown={() => hundleResize({...resizable, left:  true, bottom: true})}></div>
      <div className="bottomRightGrab" onMouseDown={() => hundleResize({...resizable, right: true, bottom: true})}></div>

    </Container>
  )
}

/*
      isResizing: {isResizing.toString()} <br />
      MousePosition X: {mousePosition.x}, Y: {mousePosition.y} <br />
      Position X: {position.x}, Y: {position.y} <br />
      Size X: {size.x}, y: {size.y}  <br />
      WindowSize  X: {windowSize.x}, y: {windowSize.y} <br />
      resizable: Top: {resizable.top.toString()},
                 left: {resizable.left.toString()},
                 Right: {resizable.right.toString()},
                 Bottom: {resizable.bottom.toString()}, 
 */