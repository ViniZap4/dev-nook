import { createContext } from "react";

type appContextType = {
  AppsOpened: number[],
}

const InitialValues = {
  AppsOpened: [],
}

const AppContext = createContext<appContextType>(InitialValues);

export default AppContext;