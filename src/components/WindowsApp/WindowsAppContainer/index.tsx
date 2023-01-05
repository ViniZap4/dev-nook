import { Container } from "./styles";
import WindowsApp from "..";

//context
import { useContext, useEffect } from "react";
import { AppContext } from "../../../contexts/appsContext";

export default function WindowsAppContainer(){
  const {apps, mousePosition, setMousePosition} = useContext(AppContext)

  
  useEffect(() => {
    function handleMouseMove(event: any){
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseMove);
    };
  }, []);

 

  return(
    <>
      {apps?.map((app, index) => {
        if(app.title !== undefined){
          return <WindowsApp key={index} title={app.title} element={app.element} icon={app.icon} minimize={app.minimize} />
        }
      })}
    </>
  )
}