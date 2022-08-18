import React, { createContext, useContext } from "react";

import { DefaultTheme } from "styled-components";
import dark from "../Styles/themes/dark";
import light from "../Styles/themes/light";

const themeContext = createContext<DefaultTheme>(dark);



export default themeContext;