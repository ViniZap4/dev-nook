import { useContext, useEffect, useState } from "react"
import AppRouter from "../Router"

import Background from "../components/Background"

//styles
import Animations from "../styles/animations"
import GlobalStyles from "../styles/GlobalStyles"
import { ThemeProvider } from "styled-components"

//contexts
import ThemeContextProvider, { ThemeContext } from "../contexts/themeContext"
import UserContextProvider from "../contexts/userContext"
import AppContextProvider from "../contexts/appsContext"
import ShortcutsContextProvider from "../contexts/shortcutsContext"

function App() {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <ShortcutsContextProvider>
          <AppContextProvider>
            <Content />
          </AppContextProvider>
        </ShortcutsContextProvider>
      </ThemeContextProvider>
    </UserContextProvider>
  )
}

export  function Content(){
  const {theme} = useContext(ThemeContext)


  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Animations/>
      <AppRouter />
      <Background />
    </ThemeProvider>
  )
}

export default App
//            
