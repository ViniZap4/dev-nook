import { ShortCutProps } from "../../../../@types/shortcuts";

import { Container } from "./styles";
import PictureIcon from "../../../../assets/icons/picture";


import { useContext } from "react";
import { ThemeContext } from "../../../../contexts/themeContext";


export default function ShortCut({name, link}:ShortCutProps){
  const url = (new URL(link))
  const urlIcon = `https://${url.hostname}/favicon.ico`
  const {colors} = useContext(ThemeContext)



  return(
    <Container href={url.href} target="_blank" colors={colors}>
     
      <object className="IconBox" data={urlIcon}type="image/png">
        <span className="textIcon" >{name[0].toUpperCase()+name.slice(1, 3)+"..."}</span>
      </object>
     
      <span className="shortcutLabel">
        {name}
      </span>
    </Container>
  )
}
//<PictureIcon colors={colors} text={name[0].toUpperCase()+name.slice(1, 3)+"..."} />