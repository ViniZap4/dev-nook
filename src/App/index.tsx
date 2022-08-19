import React, { useContext } from 'react';

//import router
import AppRouter from '../Router';

//import styles
import GlobalStyles from '../Styles/GlobalStyles';
import Animations from '../Styles/animations';

//import themes
import {ThemeProvider } from 'styled-components';

//import utils
import usePersistedState from '../Util/usePersistedState';

//import contexts
import themeContext from '../Contexts/themeContext';

const App: React.FC = () => {
  const theme = useContext(themeContext)

  return (<>
    <ThemeProvider theme={theme}>
      <Animations />
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  </>);
}

export default App;