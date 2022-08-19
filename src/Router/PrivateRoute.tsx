import { Navigate } from "react-router-dom"
import { ReactNode, useContext } from "react"
import { UserContext } from "../Contexts/userContext";


interface PrivateRouteProps {
  children: ReactNode | any;
  condition: boolean;
  path: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ 
  children , condition, path 
}) => {
  if(condition){
    return <Navigate to={path} />
  }
  return children;
}




interface AuthenticattionPrivateProps  {
  children: ReactNode;
}

//Private Routes for Authenticated user 
export const  AuthenticatedPrivate: React.FC<AuthenticattionPrivateProps> = ({
  children
}) => {
  const {authenticated} =useContext(UserContext)

  return(
    <PrivateRoute condition={!authenticated} path="/login">
      {children}
    </PrivateRoute>
  )
  
}

//Private Routes for no Authenticated user 
export const  NoAuthenticatedPrivate: React.FC<AuthenticattionPrivateProps> = ({
  children
}) => {
  const {authenticated} =useContext(UserContext)

  return(
    <PrivateRoute condition={authenticated} path="/dashboard">
      {children}
    </PrivateRoute>
  )
  
}
