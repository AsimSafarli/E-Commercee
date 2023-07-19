import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Home from '../Page/Home/Home';
import Footer from '../Components/Layout/Footer/Footer';
import Navbar from '../Components/Layout/Navbar/Navbar';
import Header from '../Components/Home/Header/Header';

function Layout() {
  const location = useLocation();

  return (
    <div className='flex flex-col '>
    {location.pathname === '/' && <Header />}
    <div className='flex flex-col gap-y-10'>
    <Navbar />
      {location.pathname === '/' && <Home />}
      <Outlet />
      <Footer />
    </div>
      
    </div>
  );
}

export default Layout;
