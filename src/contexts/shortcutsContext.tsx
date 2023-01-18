import React, { createContext, useState } from "react"
import { ShortCutProps } from "../@types/shortcuts";
import usePersistedState from "../util/usePersistedState";


type shortcutsType = {
  shortcuts: ShortCutProps[], setShortcuts: (newState: ShortCutProps[]) => void
  editShortcutInfo: ShortCutProps, setEditShortcutInfo:  (newState: ShortCutProps) => void,
  ShortcutMenuContextActive: boolean, setShortcutMenuContextActive: (newState: boolean) => void,
  contentMenuContext: JSX.Element, setContentMenuContext: (newState: JSX.Element) => void
}

const InitialValues ={
  shortcuts: [
    {link:`https://www.awwwards.com/`, name:"awwwards"},
    {link:`https://www.deviceinfo.me/`, name:"deviceinfo"}
  ], setShortcuts: () => {},
  editShortcutInfo: {link:"", name: ""}, setEditShortcutInfo: () => {},
  ShortcutMenuContextActive: false, setShortcutMenuContextActive: () => {},
  contentMenuContext: <></>, setContentMenuContext: () => {}
}

export const shortcutsContext = createContext<shortcutsType>(InitialValues)

export default function ShortcutsContextProvider(props: React.PropsWithChildren){
  const [shortcuts, setShortcuts] = usePersistedState("shortcuts", InitialValues.shortcuts)
  const [editShortcutInfo, setEditShortcutInfo] = useState(InitialValues.editShortcutInfo)
  const [ShortcutMenuContextActive, setShortcutMenuContextActive] = useState(InitialValues.ShortcutMenuContextActive)
  const [contentMenuContext,setContentMenuContext] = useState(InitialValues.contentMenuContext)
  return(
    <shortcutsContext.Provider
      value={{
        shortcuts, setShortcuts,
        editShortcutInfo, setEditShortcutInfo,
        ShortcutMenuContextActive, setShortcutMenuContextActive,
        contentMenuContext, setContentMenuContext
      }}
    >
      {props.children}
    </shortcutsContext.Provider>
  )
}