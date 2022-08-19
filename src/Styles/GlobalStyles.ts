import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :Root{
    --title-size:6vh;
    --sub-title-size: 3.6vh;
    --text-size: 2.7vh;

  }
  
  *{
    padding: 0%;
    margin: 0%;

    border: border-box;
    transition: 0.6s;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  button{
    cursor: pointer;
    border: none;
  }

`