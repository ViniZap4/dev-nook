import { AuthenticatedPrivate } from './PrivateRoute'

import Menu from '../components/Menu'
import WindowsAppContainer from '../components/WindowsApp/WindowsAppContainer'

interface NewRoute{
  content: JSX.Element,
  privateAuth?: boolean
}

export default function RouteElement({content, privateAuth = false}: NewRoute){
  return <>
    <Menu />
    <WindowsAppContainer />
    {privateAuth  ? <AuthenticatedPrivate > {content} </AuthenticatedPrivate> : content}
  </>
}