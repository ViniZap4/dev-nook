import { FormEvent, useContext, useEffect } from "react";
import { shortcutsContext } from "../../../../contexts/shortcutsContext";
import { ThemeContext } from "../../../../contexts/themeContext";
import { ButtonText } from "../../../styled/button";
import { Container } from "../CreateShortcut/styles";


export default function EditShortcutApp(){
  const {colors} = useContext(ThemeContext)
  const {editShortcutInfo, setEditShortcutInfo,shortcuts, setShortcuts} = useContext(shortcutsContext)
  
  useEffect(()=>{

  },[editShortcutInfo]) 
  
  function HundleEditShortcut(event : FormEvent){
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    const shortcutIndex = shortcuts.findIndex((shortcut => shortcut.name === editShortcutInfo.name))

    shortcuts[shortcutIndex].name = data.name.toString()
    shortcuts[shortcutIndex].link = data.url.toString()

    setEditShortcutInfo(shortcuts[shortcutIndex])
    setShortcuts(shortcuts)
  }

  return(
    <Container colors={colors}>
      <form onSubmit={HundleEditShortcut}>
        <h3> Edit {editShortcutInfo.name} Shortcut </h3>

        <label htmlFor="name">
          <span> Name:</span>
        </label>
        <input type="text" placeholder={editShortcutInfo.name} defaultValue={editShortcutInfo.name} name="name" required/>
        
        <label htmlFor="url">
          <span>Url:</span>
        </label>
        <input type="url" name="url" placeholder={editShortcutInfo.link} defaultValue={editShortcutInfo.link} pattern="https://.*" required />
        
        <ButtonText type="submit" colors={colors}>
          <span> Update </span>
        </ButtonText>

      </form>
    </Container>
  )
}