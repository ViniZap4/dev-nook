import { createContext, ReactNode} from "react"


import { User } from "firebase/auth"// type used for user from Firebase
import usePersistedState from "../util/usePersistedState"
import { UserGitHubData } from "../@types/userGitHubData";

// settings types for user contexts
type UserContextType = {
  user: User; setUser: (newState: User) => void
  gitHubUid: string, setGitHubUid: (newState: string) => void,
  userGitHubData: UserGitHubData, setUserGitHubData: (newState: UserGitHubData) => void,
  
  authenticated: boolean
}

// settings initial Values for user contexts
const InitialValues ={
  user: {} as User, setUser: () => {},
  gitHubUid: "", setGitHubUid: () => {},
  userGitHubData: {} as UserGitHubData, setUserGitHubData: () => {},
  authenticated: false,
}

// Creating User Contexts
export const UserContext = createContext<UserContextType>(InitialValues)

export default function UserContextProvider(props: React.PropsWithChildren) {
  const [user, setUser] = usePersistedState("user", InitialValues.user)
  const [gitHubUid, setGitHubUid] = usePersistedState("gitHubUid", InitialValues.gitHubUid)
  const [userGitHubData, setUserGitHubData] = usePersistedState("userGitHubData",InitialValues.userGitHubData)


  return(
    <UserContext.Provider 
      value={{
        user, setUser,
        gitHubUid, setGitHubUid,
        userGitHubData, setUserGitHubData,
        authenticated: (user.uid !== undefined)
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}