import React, { createContext, useState } from "react"
import { ShortCutProps } from "../@types/shortcuts";
import usePersistedState from "../util/usePersistedState";


type shortcutsType = {
  shortcuts: ShortCutProps[], setShortcuts: (newState: ShortCutProps[]) => void
}

const InitialValues ={
  shortcuts: [
    {link:`https://www.awwwards.com/`, name:"awwwards"},
    {link:`https://www.deviceinfo.me/`, name:"deviceinfo"}
  ], setShortcuts: () => {}
}

export const shortcutsContext = createContext<shortcutsType>(InitialValues)

export default function ShortcutsContextProvider(props: React.PropsWithChildren){
  const [shortcuts, setShortcuts] = usePersistedState("shortcuts", InitialValues.shortcuts)

  return(
    <shortcutsContext.Provider
      value={{
        shortcuts, setShortcuts
      }}
    >
      {props.children}
    </shortcutsContext.Provider>
  )
}