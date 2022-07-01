// Import required libraries
import React from 'react';
// Import required components
import Login from './Login';
import SearchBar from './SearchBar';
// Import required images
import logo from '../images/CGLogo.png';
import cart from '../images/cart.svg'

const Nav = () => {
  return (
    <div className='flex justify-between items-center text-c2 text-xl px-24'>
        <a href="/">
            <img src={logo} alt="logo" className='w-24' />
        </a>
        <Login />
    </div>
  );
};

export default Nav;
