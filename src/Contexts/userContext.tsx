import { createContext, ReactNode, useEffect} from "react";

import usePersistedState from "../Util/usePersistedState";

import { User } from "firebase/auth"; // type used for user from Firebase

// settings types for user contexts
type UserContextType = {
  user: User; setUser: (newState: User) => void;
  authenticated: boolean;
}

// settings initial Values for user contexts
const InitialValues ={
  user: {} as User, setUser: () => {},
  authenticated: false,
}

// Creating User Contexts
export const UserContext = createContext<UserContextType>(InitialValues)


// Setting UserProviderContext types
type userProviderProps = {
  children: ReactNode
}

const UserContextProvider = ({children}: userProviderProps) => {
  const  [ user, setUser] = usePersistedState("user", InitialValues.user);


  return(
    <UserContext.Provider 
      value={{
        user, setUser,
        authenticated: (user.uid !== undefined)
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;