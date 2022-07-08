import React from 'react';
import SearchBar from './SearchBar';
import logo from '../images/CGLogoWhite.png';
import user from '../images/user.jpeg';

const Nav = ({ minimal, showModal, setShowModal }) => {
  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
    {
      minimal && 
      <div className='flex flex-col md:flex-row justify-between items-center px-24 text-xl'>
        <a href="/">
          <img src={logo} alt="logo" className='w-20 md:w-32' />
        </a>

        <div className='bg-black/25 rounded p-2'>
          <p className='px-2 text-gray-300 hover:text-white hover:cursor-pointer' onClick={handleClick}>LogIn/SignUp</p>
        </div>
      </div>
    }
    {
      !minimal && 
      <div className='flex justify-between items-center md:px-24 text-xl bg-c1'>
        <a href="/">
          <img src={logo} alt="logo" className='w-20' />
        </a>

        <div className='w-2/3'>
          <SearchBar />
        </div>

        <div className='w-12 hover:cursor-pointer'>
          <img src={user} alt="user" className='rounded-full' />
        </div>
      </div>
    }
    </>
  );
};

export default Nav;
