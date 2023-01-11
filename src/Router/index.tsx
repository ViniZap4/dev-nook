import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'


import RouteElement from './RouteElement'

//components
import Background from '../components/Background'

//import pages
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import User from '../pages/User'

export default function AppRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path='/' element={<RouteElement content={<Home />} />}/>
        <Route path='/background' element={<Background />}/>


        <Route path='/dashboard' element={<RouteElement privateAuth content={<Dashboard />} />} />
        <Route path='/user' element={<RouteElement privateAuth content={<User />} />} />

      </Routes>
    </BrowserRouter>
  )
}