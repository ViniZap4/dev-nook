import React, { createContext} from "react"

// types
import { DefaultTheme } from "styled-components"
import { bluePalette, color } from "../styles/colors"

import dark from "../styles/themes/dark"
import light from "../styles/themes/light"
import usePersistedState from "../util/usePersistedState"


type themeContextType = {
  theme: DefaultTheme , setTheme: (newState: DefaultTheme) => void,
  colors: color, setColors: (newState: color) => void
}

const InitialValues ={
  theme: dark, setTheme: () => {},
  colors: bluePalette,  setColors: () => {}
}
export const ThemeContext = createContext<themeContextType>(InitialValues)

export default function ThemeContextProvider(props: React.PropsWithChildren){
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme" , InitialValues.theme)
  const [colors, setColors] = usePersistedState<color>("palette" ,InitialValues.colors)

  return(
    <ThemeContext.Provider
      value={{
        theme,  setTheme,
        colors, setColors
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}