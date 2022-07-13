import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import SearchBar from './SearchBar';
import logo from '../images/CGLogoWhite.png';
import user from '../images/user.jpeg';
import call from '../images/call.png';
import mail from '../images/mail.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';

const Nav = ({ minimal, showModal, setShowModal }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
    {
      minimal && 
        <div>
          <div className='md:flex hidden flex-row justify-between items-center px-24 text-xl'>
            <a href="/">
              <img src={logo} alt="logo" className='w-20 md:w-32' />
            </a>

            <div className='bg-black/25 rounded p-2'>
              <p className='px-2 text-gray-300 hover:text-white hover:cursor-pointer' onClick={handleClick}>
                LogIn/SignUp
              </p>
            </div>
          </div>

          <div className='md:hidden flex justify-between items-center mx-[2rem]'>
            <div className='flex flex-col justify-between items-center text-xl'>
              <a href="/">
                <img src={logo} alt="logo" className='w-20 md:w-32' />
              </a>
            </div>

            <div className='text-white text-[24px]'>
              <GiHamburgerMenu onClick={()=>setOpen(!open)}/>
            </div>
          </div>

          <div className={`${open?'fixed':'hidden'} flex md:hidden justify-center w-[100%] z-50`}>
            <div className=' w-[95%] rounded-md bg-white'>
              <div className='flex justify-center flex-col items-center py-[1rem]'>
                <div className='bg-black/25 w-[10rem] rounded p-2 text-center'>
                  <p className='px-2 hover:cursor-pointer' text-center onClick={handleClick}>LogIn/SignUp</p>
                </div>
                
                <div className='flex  flex-col md:w-[40%] w-[90%]  gap-1 md:text-left text-center'>
                  <h1 className='text-xl font-bold md:text-left text-left mt-[10px]'>
                    Contact Us
                  </h1>

                  <div className='flex flex-col gap-2 justify-center'>
                    <div className='flex justify-center mt-[0.5rem]'>
                      <a href="/" target="_blank" rel="noopener noreferrer" className={`p-1 flex items-center`}>
                        <img src={facebook} alt="mail" className='w-6 pr-2' />
                      </a>

                      <a href="/" target="_blank" rel="noopener noreferrer" className={`p-1 flex items-center`}>
                        <img src={instagram} alt="mail" className='w-6 pr-2' />
                      </a>

                      <a href="/" target="_blank" rel="noopener noreferrer" className={`p-1 flex items-center `}>
                        <img src={twitter} alt="mail" className='w-6 pr-2' />
                      </a>

                      <a href="/" target="_blank" rel="noopener noreferrer" className={`p-1 flex items-center `}>
                        <img src={linkedin} alt="mail" className='w-6 pr-2' />
                      </a>
                    </div>

                    <a href="tel:7850037958" className='bg-white text-black rounded-lg p-1 flex items-center '>
                      <img src={call} alt="call" className='w-6 pr-2' />
                      <p className='text-sm'>+91 7850037958</p>
                    </a>

                    <a href="tel:7091045216" className='bg-white text-black rounded-lg p-1 flex items-center '>
                      <img src={call} alt="call" className='w-6 pr-2' />
                      <p className='text-sm'>+91 7091045216</p>
                    </a>

                    <a href="mailto:collegegrahasthi@gmail.com" target="_blank" rel="noopener noreferrer" className='bg-white text-black rounded-lg p-1 flex items-center '>
                      <img src={mail} alt="mail" className='w-6 pr-2' />
                      <p className='text-sm'>collegegrahasthi@gmail.com</p>
                    </a>
                  </div>          
                </div>
              </div>
            </div>
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
