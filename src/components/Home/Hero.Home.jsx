import React from 'react';
import Button from '../../components/Button';
import Nav from '../../components/Nav';
import SearchBar from '../../components/SearchBar';
// import Figures from './Figures.Home';
import banner from '../../images/home-bg.png'
import banner1 from '../../images/banner-img.jpeg'
import checkMark from '../../images/checked.png';
import student from '../../images/student.png';

const Hero = () => {
  return (
    <>
      <div className='bg-home-bg bg-cover' style={{backgroundImage:`url(${banner})`}}>
        <Nav minimal={true} />

        <div className='flex flex-col gap-6 items-center justify-center text-white py-20'>

          <div className='flex flex-col items-center justify-center gap-2'>
            <h1 className='text text-7xl text-center md:text-left'>College Grahasthi</h1>
            <p className='text-xl text-center md:text-left'>
              Book your student accommodation near top universities across the globe
            </p>
          </div>

          <div className='w-[100%] md:w-6/12'>
            <SearchBar />
          </div>

          <div className='flex w-[90%] md:w-4/12  items-center gap-6 bg-black/50 h-12 rounded-xl px-2'>

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

      <div className='bg-banner md:flex hidden h-40 my-10 mx-6 rounded-xl justify-between items-center relative' style={{backgroundImage:`url(${banner1})`}}>
        <div className='flex items-center w-10/12'>

          <p className='pl-10 text-5xl text-white'>
            Get Your Subscription Now
          </p>
            
          <div className='pl-44 w-4/12'>
            <Button value="Book Now !!" link="/" bgColor="red-600" />
          </div>

        </div>
        <img src={student} alt="student" className='pr-10 absolute w-52 right-0 bottom-0' />
      </div>
      <div className='bg-banner md:hidden flex mt-6 mx-2 flex-col  rounded-xl justify-between items-center relative' style={{backgroundImage:`url(${banner1})`}}>
        <div className='flex flex-col items-center '>

          <p className=' text-3xl my-2 mx-2 text-white text-center'>
            Get Your Subscription Now
          </p>
            
          <div className=' w-[60%] flex mb-3'>
            <Button value="Book Now !!" link="/" bgColor="red-600" />
          </div>

        </div>
        
      </div>
    </>
  );
};

export default Hero;
