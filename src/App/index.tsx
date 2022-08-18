import React, { useContext } from 'react';

//import router
import AppRouter from '../Router';

//import styles
import GlobalStyles from '../Styles/GlobalStyles';

//import themes
import { DefaultTheme, ThemeProvider } from 'styled-components';
import light from '../Styles/themes/light';

//import utils
import usePersistedState from '../Util/usePersistedState';
import themeContext from '../Contexts/themeContext';

const App: React.FC = () => {
  const theme = useContext(themeContext)

  return (<>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  </>);
}

export default App;