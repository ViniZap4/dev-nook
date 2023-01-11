import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../contexts/appsContext";

import{ ThemeContext } from "../../contexts/themeContext";
import MenuContents from "./MenuContents";
import { Container } from "./style";



export default function Menu(){
  const refMenu = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number>(0)
  const {colors} = useContext(ThemeContext)
  const {apps} = useContext(AppContext)

  function handleResize(time: number){
    if (refMenu !== null){
      setTimeout(() => {
        const widthElement = refMenu.current?.offsetWidth
        setWidth(Number(widthElement))
      }, time)
    }
  }

  useEffect(() => {
    handleResize(0)
    window.addEventListener("resize", () => handleResize(350))
  },[MenuContents, apps])

  return(
    <Container ref={refMenu} width={width} colors={colors}>
      <MenuContents />
    </Container>
  )
}