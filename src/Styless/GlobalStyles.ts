import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 
  :Root{
    --title-size:3rem;
    --sub-title-size: 2.7rem;
    --text-size: 1.2rem;
  }
  *{
    padding: 0%;
    margin: 0%;

    border: border-box;
    transition: 0.45s;
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
  
  h1{
    font-size: var(--title-size);
  }
  h2{
    font-size: var(--sub-title-size);
  }
  p, span {
    font-size: var(--text-size);
  }
  
  a{
    text-decoration: none;
  }
  
  button{
    cursor: pointer;
    border: none;
  }

`