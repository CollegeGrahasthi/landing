import React from 'react';
import user from '../images/user.jpeg';

const Onboarding = () => {
  return (
    <div className='flex flex-col p-10 h-screen'>
        <h1 className='text-2xl font-semibold text-c1'>Add Your Information</h1>
        <div className='flex flex-col md:flex-row pt-10'>
          <div className='flex justify-center items-center w-full'>
            <img src={user} alt="user portfolio" className='rounded w-96' />
          </div>

          <form className='flex flex-col w-full'>
            
            <div className='flex items-center'>
              <label htmlFor="firstName" className='mt-4 text-lg text-c1 font-medium'>First Name: </label>
              <input type="text" name="first_name" id="firstName" className='rounded focus:outline-none p-2 text-c1 shadow shadow-c1' />
            </div>
            
            <label htmlFor="lastName" className='mt-4 text text-c1 font-medium'>Last Name: </label>
            <input type="text" name="last_name" id="lastName" className='rounded focus:outline-none p-2 text-c1 shadow shadow-c1' />


          </form>
        </div>
    </div>
  );
};

export default Onboarding;
