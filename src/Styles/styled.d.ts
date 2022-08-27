import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors:{
      primary: string;
      primaryBackground:string;
      secondary: string;
  
      background: string;
      backgroundLight: string,
      text:string;
    },
  }

}