import { ReactNode, useContext } from "react";
import { App } from "../../../../@types/app";
import { AppContext } from "../../../../contexts/appsContext";
import { Container } from "./style";

interface MenuItemProps{
  icon: string | ReactNode;
  label: string;
  app?: boolean
  action?: () => void;
  element?: number
}

export default function MenuItem({icon, label,app = false , action = () => {}, element = undefined}: MenuItemProps){
  const {apps, setApps} = useContext(AppContext)

  function handleAction(){
    if(app){
      
      const exist = apps.filter(obj => {
        return obj.title === label
      })
      
      if(exist.length === 0){
        setApps([ ...apps ,{
          title: label,
          icon: "icon",
          element: element,
          minimize: false
        }])
        return
      }
      
      const appIndex = apps.findIndex((obj => obj.title === label));
      apps[appIndex].minimize = !apps[appIndex].minimize
      setApps(apps)
   
    }else{
      action()
    }

  }


  return(
    <Container data-title={label} onClick={handleAction}>
      <div className="iconBox">
        {typeof icon === 'string' ? <img src={icon} alt="icon" /> : icon }
      </div>
      <span className="label"> {label} </span>
    </Container>
  )
}