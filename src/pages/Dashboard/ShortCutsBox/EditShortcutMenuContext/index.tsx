import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../../../contexts/appsContext";
import { shortcutsContext } from "../../../../contexts/shortcutsContext";
import { ThemeContext } from "../../../../contexts/themeContext";
import { copyTextToClipboard } from "../../../../util/copyTextToClipboard";
import { ConfirmBox, Container } from "./style";

interface EditShortcutMenuContextProps{
  x: number; y: number;
  name:string;
  link:string;
}

export default function EditShortcutMenuContext({
  x,y,link, name, 
}:EditShortcutMenuContextProps){
  const {colors} = useContext(ThemeContext)
  const {shortcuts, setShortcuts, setEditShortcutInfo, setContentMenuContext} = useContext(shortcutsContext)
  const {apps, setApps} = useContext(AppContext)
  const DivRef = useRef<HTMLDivElement>(null)

  function hundleCopyAdress(){
    copyTextToClipboard(link)
    setContentMenuContext(<></>)
  }
  function handleClickOutside(event:any) {
    if (DivRef.current && !DivRef.current.contains(event.target)) {
      setContentMenuContext(<></>)
    }
  }
  
  useEffect(()=>{
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[])

  function hundleOpenInWindow(){
    window.open(link, '_black', 'location=yes, height=570,width=520, scrollbars=yes, status=yes')
    setContentMenuContext(<></>)
  }

  function hundleDeletShortcut(){
    setEditShortcutInfo({name: name, link: link})
    
    if(confirm(`Do you want to delete ${name} shortcut`)){
      const appRemoved = shortcuts.filter(obj => {
        return obj.name !== name && obj.link !== link
      })
      setShortcuts(appRemoved)
      setContentMenuContext(<></>)
    }
    
  }

  function OpenEditShortcutApp(){
    setEditShortcutInfo({name: name, link: link})

    const exist = apps.filter(obj => {
      return obj.element === 2
    })
    
    if(exist.length === 0){
      setApps([ ...apps ,{
        title: "Edit Shortcut",
        element: 2,
        minimize: false
      }])
    }

    setContentMenuContext(<></>)
  }

  return(
    <Container ref={DivRef} colors={colors} positionX={x} positionY={y}>
      <button onClick={OpenEditShortcutApp}>
        <span> 
          Edit {name}
        </span>
      </button>
      
      <button onClick={hundleDeletShortcut}>
        <span> 
          Delete {name}
        </span>
      </button>
      
      <a href={link} target="_blank" onClick={()=>setContentMenuContext(<></>)}>
        <span>
          Open in new Tab 
        </span>
      </a>

      <button onClick={hundleOpenInWindow}>
        <span> 
          Open in window 
        </span>
      </button>
      
      <button onClick={hundleCopyAdress}>
        <span> 
          Copy link adress 
        </span>
      </button>
    </Container>
  )
}

