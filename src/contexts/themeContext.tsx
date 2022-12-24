import React, { createContext, useContext, useEffect, useState } from "react"

// types
import { DefaultTheme } from "styled-components"
import { bluePalette, cianoPalette, color, greenPalette, orangePalette, pinkPalette } from "../styles/colors"

import dark from "../styles/themes/dark"
import light from "../styles/themes/light"


type themeContextType = {
  theme: DefaultTheme , setTheme: (newState: DefaultTheme) => void,
  colors: color, setColors: (newState: color) => void
}

const InitialValues ={
  theme: dark, setTheme: () => {},
  colors: cianoPalette,  setColors: () => {}
}

export const ThemeContext = createContext<themeContextType>(InitialValues)

export default function ThemeContextProvider(props: React.PropsWithChildren){
  const [theme, setTheme] = useState<DefaultTheme>(InitialValues.theme)
  const [colors, setColors] = useState<color>(InitialValues.colors)



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