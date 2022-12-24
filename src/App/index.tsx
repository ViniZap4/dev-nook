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

function App() {
  const {theme} = useContext(ThemeContext)

  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Animations/>
          <AppRouter />
          <Background /> 
        </ThemeProvider>
      </ThemeContextProvider>
    </UserContextProvider>

  )
}

export default App