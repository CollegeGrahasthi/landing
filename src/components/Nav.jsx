// Import required libraries
import React from 'react';
// Import required components
import Login from './Login';
// Import required images
import logo from '../images/CGLogoWhite.png';
import SearchBar from './SearchBar';

const Nav = ({ minimal }) => {
  return (
    <>
    {
      minimal && 
      <div className='flex flex-col md:flex-row justify-between items-center px-24 text-xl'>
        <a href="/">
          <img src={logo} alt="logo" className='w-20 md:w-32' />
        </a>
        <Login />
      </div>
    }
    {
      !minimal && 
      <div className='flex justify-between items-center px-24 text-xl bg-c1'>
        <a href="/">
          <img src={logo} alt="logo" className='w-20' />
        </a>
        <div className='w-2/3'>
          <SearchBar />
        </div>
        <Login />
      </div>
    }
    </>
  );
};

export default Nav;
