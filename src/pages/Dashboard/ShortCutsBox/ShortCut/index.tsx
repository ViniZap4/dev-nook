import { ShortCutProps } from "../../../../@types/shortcuts";

import { Container } from "./styles";
import PictureIcon from "../../../../assets/icons/picture";


import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../../../contexts/themeContext";
import EditShortcutMenuContext from "../EditShortcutMenuContext";
import { shortcutsContext } from "../../../../contexts/shortcutsContext";


export default function ShortCut({name, link}:ShortCutProps){
  const url = (new URL(link))
  const urlIcon = `https://${url.hostname}/favicon.ico`
  const {colors} = useContext(ThemeContext)
  const shortcutRef = useRef<HTMLObjectElement>(null)
  const {setContentMenuContext} = useContext(shortcutsContext)
  //const [contentMenuContext,setContentMenuContext] = useState(<></>)



  useEffect(() => {
    if (shortcutRef.current?.parentElement !== null){
      shortcutRef.current?.parentElement.addEventListener('contextmenu', (e:any) => {
        e.preventDefault();
        setContentMenuContext(<EditShortcutMenuContext x={e.x} y={e.y} name={name} link={link} />)
      })
    }
  },[])

  return(
    <Container colors={colors}>
    <a className="shortcut" href={url.href} target="_blank" >
      <object ref={shortcutRef} className="IconBox" data={urlIcon}type="image/png">
        <span className="textIcon" >{name[0].toUpperCase()+name.slice(1, 3)+"..."}</span>
      </object>
      <span className="shortcutLabel">
        {name}
      </span>
    </a>
    </Container>
  )
}