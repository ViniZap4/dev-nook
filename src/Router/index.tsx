import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import { AuthenticatedPrivate } from './PrivateRoute'

//import pages
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'

export default function AppRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<AuthenticatedPrivate><Dashboard /></AuthenticatedPrivate>} />

      </Routes>
    </BrowserRouter>
  )
}