import React from 'react';

const Button = ({ value }) => {
  return (
    <button className='bg-red-600 text-white text-xl w-full px-4 py-2 rounded-xl flex justify-center'>
      { value }
    </button>

  );
};

export default Button;
