import React from 'react';
import { useState } from 'react';
import cross from '../images/cross.png';
import Button from './Button';

const AuthModal = ({ setShowModal }) => {
  const [, setEmail] = useState(null); // Add email, setEmail if required
  const [, setPassword] = useState(null); // Add password, setPassword if required
  const [, setConfirmPassword] = useState(null); // Add confirmPassword, setConfirmPassword if required
  const [error, ] = useState(null); // Add error, setError if required
  
  const handleClick = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className='flex flex-col justify-between absolute z-50 left-0 right-0 top-10 mx-auto bg-c1 text-white h-4/6 max-w-sm p-10 rounded'>
        <div className='flex justify-between items-baseline'>
            <h2 className='text-xl'>Create An Account</h2>
            <img src={cross} alt="cross" onClick={handleClick} className='w-3 h-3 cursor-pointer' />
        </div>

        <p className='text-justify'>
            By clicking Sign Up, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy.
        </p>


        <form onSubmit={handleSubmit} className='flex flex-col'>

            <input type='email' name='email' 
                id='email' placeholder='email' 
                required={true} 
                onChange={(e) => setEmail(e.target.value)} 
                className='p-2 m-2 text-lg text-c1 rounded focus:outline-none'
            />

            <input type='password' name='password' 
                id='password' placeholder='password' 
                required={true} 
                onChange={(e) => setPassword(e.target.value)} 
                className='p-2 m-2 text-lg text-c1 rounded focus:outline-none'
            />

            <input type='password' name='password-check' 
                id='password-check' placeholder='confirm password' 
                required={true} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                className='p-2 m-2 text-lg text-c1 rounded focus:outline-none'
            />
            
            <div className='m-2'>
                <Button value="Sign Up" link="/rooms" bgColor="white" />
            </div>
            <p>{error}</p>
            
        </form>

        <hr />
    </div>
  );
};


export default AuthModal;
