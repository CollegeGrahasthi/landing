import React from 'react';

const Image = ({ image, name, link }) => {
  return (
    <div className='rounded-xl bg-c2 w-96 h-72 relative '>
      <div className='flex justify-center align-middle'>

        <img src={ image } alt="services" className='md:w-full md:h-full w-[90%] h-[90%] rounded-xl absolute z-0' />
      </div>
        <a href={link} className='text-6xl text-white font-bold'>
            <div className='bg-c2 rounded-xl absolute z-10 w-full h-full md:opacity-0 md:hover:opacity-100 hover:bg-opacity-50 flex justify-center items-center'>
                { name }
            </div>
        </a>

    </div>
  );
};

export default Image;
