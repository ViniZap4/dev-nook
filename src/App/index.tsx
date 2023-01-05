import { useContext, useEffect } from "react"
import AppRouter from "../Router"

import Background from "../components/Background"

//styles
import Animations from "../styles/animations"
import GlobalStyles from "../styles/GlobalStyles"
import { ThemeProvider } from "styled-components"

//contexts
import ThemeContextProvider, { ThemeContext } from "../contexts/themeContext"
import UserContextProvider from "../contexts/userContext"
import Menu from "../components/Menu"
import AppContextProvider from "../contexts/appsContext"

function App() {
  const {theme} = useContext(ThemeContext)

  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <AppContextProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Animations/>
            <AppRouter />
            <Background /> 
          </ThemeProvider>
        </AppContextProvider>
      </ThemeContextProvider>
    </UserContextProvider>

  )
}

export default App