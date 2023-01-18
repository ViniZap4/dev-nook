import { ReactNode, useContext, useEffect, useState } from "react";
import { App } from "../../../../@types/app";
import { AppContext } from "../../../../contexts/appsContext";
import { Container } from "./style";

interface MenuItemProps{
  icon: string | ReactNode;
  label: string;
  app?: boolean
  action?: () => void;
  element?: number,
  menu?: boolean
}

export default function MenuItem({icon, label,app = false , action = () => {}, element = undefined, menu = false}: MenuItemProps){
  const {apps, setApps, appFocus, setAppFocus} = useContext(AppContext)
  const [exist, setExist] = useState(apps.findIndex((app => app.element === element)))

  useEffect(()=>{
    if(app){
      setExist(apps.findIndex((app => app.element === element)))
    }
  },[apps])

  function handleAction(){
    if(app){

      if(exist === -1 && menu){
        setApps([ ...apps ,{
          title: label,
          element: element,
          minimize: false
        }])
        return
      }

      const appIndex = apps.findIndex((obj => obj.title === label));

      setAppFocus(label)

      if(appFocus === label || apps[appIndex].minimize){
        apps[appIndex].minimize = !apps[appIndex].minimize
        setApps(apps)
      }

    }else{
      action()
    }
  }

  if(app && exist !== -1 && menu === false || !app || app && menu === true) return(
    <Container data-title={label} onClick={handleAction}>
      <div className="iconBox">
        {typeof icon === 'string' ? <img src={icon} alt="icon" /> : icon }
      </div>
      <span className="label"> {label} </span>
    </Container>
  )

  return(<></>)
}