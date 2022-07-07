import React from 'react';

const Button = ({ value, link, bgColor }) => {
  return (
    <a href={link} className={`bg-${bgColor} text-white text-xl px-4 py-2 rounded-xl flex justify-center w-full`}>
      { value }
    </a>

  );
};

export default Button;
