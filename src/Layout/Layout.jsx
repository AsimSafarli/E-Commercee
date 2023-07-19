import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Home from '../Page/Home/Home';
import Footer from '../Components/Layout/Footer/Footer';
import Navbar from '../Components/Layout/Navbar/Navbar';

function Layout() {
  const location = useLocation();

  return (
    <div className='flex flex-col'>
      <Navbar />
      {location.pathname === '/' && <Home />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
