import React, { createContext, useState } from "react"
import { App } from "../@types/app"
import usePersistedState from "../util/usePersistedState";

interface MousePosition{
  x: number; y: number;
}

type AppContextType = {
  apps: App[], setApps: (newState: App[]) => void
  mousePosition:MousePosition, setMousePosition: (newState: MousePosition) => void,
  appFocus: string, setAppFocus: (newState: string) => void,
}

const InitialValues ={
  apps: [{} as App], setApps: () => {},
  mousePosition: {} as MousePosition, setMousePosition: () => {},
  appFocus: "", setAppFocus: () => {},
}

export const AppContext = createContext<AppContextType>(InitialValues)

export default function AppContextProvider(props: React.PropsWithChildren){
  const [apps, setApps] = usePersistedState("Apps" ,InitialValues.apps)
  const [mousePosition, setMousePosition] = useState(InitialValues.mousePosition);
  const [appFocus, setAppFocus] = usePersistedState("AppFocus",InitialValues.appFocus)

  return(
    <AppContext.Provider
      value={{
        apps, setApps,
        mousePosition, setMousePosition,
        appFocus, setAppFocus
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}