import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


//importing pages
import Dashboard from '../Pages/Dashboard';
import Home from '../Pages/Home';
import Login from '../Pages/Login';

//import Router components
import { AuthenticatedPrivate, NoAuthenticatedPrivate } from './PrivateRoute';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<NoAuthenticatedPrivate><Home/></NoAuthenticatedPrivate>} />
        <Route path="/dashboard" element={<AuthenticatedPrivate><Dashboard/></AuthenticatedPrivate>} />
        <Route path="/login" element={<NoAuthenticatedPrivate><Login/></NoAuthenticatedPrivate>} />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRouter;