import React from 'react';
import Button from '../components/Button';
import Nav from '../components/Nav';
import SearchBar from '../components/SearchBar';
// import Figures from '../components/Figures';
import checkMark from '../images/checked.png';
import student from '../images/student.png';

const Home = () => {
  return (
    <>
      <div className='bg-home-bg bg-cover'>
        <Nav />

        <div className='flex flex-col gap-6 items-center justify-center text-white py-20'>

          <div className='flex flex-col items-center justify-center gap-2'>
            <h1 className='text text-7xl'>College Grahasthi</h1>
            <p className='text-xl'>
              Book your student accommodation near top universities across the globe
            </p>
          </div>

          <div className='w-6/12'>
            <SearchBar />
          </div>

          <div className='flex items-center gap-6 bg-black/50 h-12 rounded-xl px-2'>

            <div className='flex items-center'>
              <img src={checkMark} alt="check mark" className='w-5' />
              <p className='text-sm pl-1'>Verified Listings</p>
            </div>

            <div className='flex items-center'>
              <img src={checkMark} alt="check mark" className='w-5' />
              <p className='text-sm pl-1'>Price-Match Guarantee</p>
            </div>

            <div className='flex items-center'>
              <img src={checkMark} alt="check mark" className='w-5' />
              <p className='text-sm pl-1'>24x7 Assistance</p>
            </div>

          </div>

        </div>
      </div>

      {/* <Figures />
      <hr /> */}

      <div className='bg-banner h-40 my-10 mx-6 rounded-xl flex justify-between items-center relative'>
        <div className='flex items-center w-10/12'>

          <p className='pl-10 text-5xl text-white'>
            Get Your Subscription Now
          </p>
            
          <div className='pl-44 w-4/12'>
            <Button value="Book Now !!" />
          </div>

        </div>
        <img src={student} alt="student" className='pr-10 absolute w-52 right-0 bottom-0' />
      </div>
    </>
  );
};

export default Home;
