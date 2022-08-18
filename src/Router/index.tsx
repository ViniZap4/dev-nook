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

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRouter;