import { useContext, useState } from "react";
import { ShortCutProps } from "../../../../@types/shortcuts";
import PlusIcon from "../../../../assets/icons/plus";
import { AppContext } from "../../../../contexts/appsContext";
import { ThemeContext } from "../../../../contexts/themeContext";
import { Container, CreateNewShortcutBoxContainer } from "./styles";


export default function NewShortCut(){
  const {colors} = useContext(ThemeContext)
  const {apps, setApps} = useContext(AppContext)

  function hundleNewShortcut(){
    const exist = apps.filter(obj => {
      return obj.title === "Create Shortcut"
    })
    
    if(exist.length === 0){
      setApps([ ...apps ,{
        title: "Create Shortcut",
        element: 1,
        minimize: false
      }])
      return
    }
  }

  return(<>
    <Container onClick={hundleNewShortcut}>
      <div className="IconBox">
        <PlusIcon colors={colors} />
      </div>
      <span className="shortcutLabel">
        create new shortcut
      </span>
    </Container>
  </>)
}