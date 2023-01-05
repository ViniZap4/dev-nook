import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'


import RouteElement from './RouteElement'

//import pages
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'

export default function AppRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path='/' element={<RouteElement content={<Home />} />}/>
        <Route path='/dashboard' element={<RouteElement privateAuth content={<Dashboard />} />} />
      </Routes>
    </BrowserRouter>
  )
}