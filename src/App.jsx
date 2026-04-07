import React from 'react';
import Navbar from './component/Navbar';
import { Outlet } from 'react-router';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;