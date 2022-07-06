import React from 'react';

const Image = ({ image, name, link }) => {
  return (
    <div className='rounded-xl w-96 h-72 md:mx-10 md:my-5 relative'>
      <div className='flex justify-center align-middle'>
        <img src={ image } alt="services" className='md:w-full md:h-full w-[90%] h-[90%] rounded-xl absolute z-0' />
      </div>

      <a href={link} className='lg:text-6xl text-4xl text-white font-bold flex justify-center align-middle'>
        <div className='md:w-full md:h-full w-[90%] h-[90%] bg-c1 rounded-xl absolute z-10 md:opacity-0 md:hover:opacity-100 bg-opacity-50 md:bg-opacity-0 md:hover:bg-opacity-50 flex justify-center items-center'>
          { name }
        </div>
      </a>

    </div>
  );
};

export default Image;
