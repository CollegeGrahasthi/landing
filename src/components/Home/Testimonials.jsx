import React from 'react';
import TestimonialCard from './TestimonialCard.Home';
import profile from '../../images/user.jpeg';

const Testimonials = () => {
  const userData = {
    profile: profile,
    name: "Shishir Shekhar",
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate in modi recusandae animi sit veritatis vitae aut incidunt, omnis, minus eligendi illum labore dolorum, deserunt reprehenderit veniam eos officiis soluta quod adipisci provident doloremque quasi! Dolores doloribus nulla unde neque"
  };
  return (
    <div className='md:h-fit h-[60%] pb-10'>
      <h1 className='text-4xl p-10 pb-0'>Testimonial</h1>
      <div className='bg-black w-20 h-1 ml-10'></div>
        <div className='flex flex-wrap justify-center items-center pt-10'>
          <TestimonialCard userData={ userData } />
          <TestimonialCard userData={ userData } />
          <TestimonialCard userData={ userData } />
        </div>
    </div>
  );
};

export default Testimonials;
