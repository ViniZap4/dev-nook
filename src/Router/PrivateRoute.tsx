import { Navigate } from "react-router-dom"
import { PropsWithChildren, ReactNode, useContext } from "react"
import { UserContext } from "../contexts/userContext";


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


//Private Routes for Authenticated user 
export function AuthenticatedPrivate(props: PropsWithChildren){
  const {authenticated} =useContext(UserContext)

  return(
    <PrivateRoute condition={!authenticated} path="/">
      {props.children}
    </PrivateRoute>
  )
} 

//Private Routes for Authenticated user 
export function NoAuthenticatedPrivate(props: PropsWithChildren){
  const {authenticated} =useContext(UserContext)

  return(
    <PrivateRoute condition={authenticated} path="/">
      {props.children}
    </PrivateRoute>
  )
}