import { useContext, useEffect } from "react"
import { AppContext } from "../../../../contexts/appsContext"

export default function Settings(){
  const {mousePosition} = useContext(AppContext)
  
  //return(<h2>X: {mousePosition.x}, y: {mousePosition.y} </h2>)
  return(
    <div>
      <h1>
        Hello
      </h1>
      <span>
        Settings
      </span>
    </div>
  )
}