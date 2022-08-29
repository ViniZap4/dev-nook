import React, { useContext } from 'react';

//import router
import AppRouter from '../Router';

//import styles
import GlobalStyles from '../Styles/GlobalStyles';
import Animations from '../Styles/animations';

//import themes
import {ThemeProvider } from 'styled-components';

//import contexts
import themeContext from '../Contexts/themeContext';
import UserContextProvider from '../Contexts/userContext';

const App: React.FC = () => {
  const {theme} = useContext(themeContext)

  return (<>
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <Animations />
        <GlobalStyles />
        <AppRouter />
      </UserContextProvider>
    </ThemeProvider>
  </>);
}

export default App;