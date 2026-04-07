import React from 'react';
import Navbar from './component/Navbar';
import { Outlet } from 'react-router';
import Footer from './component/Footer';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default App;