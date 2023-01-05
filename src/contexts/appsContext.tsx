import React, { createContext, useState } from "react"
import { App } from "../@types/app"

interface MousePosition{
  x: number; y: number;
}

type AppContextType = {
  apps: App[], setApps: (newState: App[]) => void
  mousePosition:MousePosition, setMousePosition: (newState: MousePosition) => void
}

const InitialValues ={
  apps: [{} as App], setApps: () => {},
  mousePosition: {} as MousePosition, setMousePosition: () => {}
}

export const AppContext = createContext<AppContextType>(InitialValues)

export default function AppContextProvider(props: React.PropsWithChildren){
  const [apps, setApps] = useState(InitialValues.apps)
  const [mousePosition, setMousePosition] = useState(InitialValues.mousePosition);


  return(
    <AppContext.Provider
      value={{
        apps, setApps,
        mousePosition, setMousePosition
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}