// Import required libraries
import React from 'react';
// Import required components
import Login from './Login';
// Import required images
import logo from '../images/CGLogoWhite.png';

const Nav = () => {
  return (
    <div className='flex justify-between items-center px-24 text-xl'>
      <a href="/">
        <img src={logo} alt="logo" className='w-32' />
      </a>
      <Login />
    </div>
  );
};

export default Nav;
