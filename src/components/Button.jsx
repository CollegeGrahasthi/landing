import React from 'react';

const Button = ({ value, link }) => {
  return (
    <a href={link} className='bg-red-600 text-white text-xl px-4 py-2 rounded-xl flex justify-center w-full'>
      { value }
    </a>

  );
};

export default Button;
