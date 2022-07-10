import React from 'react';

const TestimonialCard = ({ userData }) => {
  return (
    <div className='flex flex-col rounded-lg w-96 h-fit shadow-lg'>
        <div className=' rounded-lg rounded-b-none flex items-center p-2'>
            <img src={userData.profile} alt="user profile" className='rounded-full w-10' />
            <h1 className='pl-4 text-2xl '>{ userData.name }</h1>
        </div>
        <div className='bg-c2/30 rounded-lg rounded-t-none px-10 py-4'>
            <p className='text-justify text-gray-700 italic'>
                "{ userData.review }"
            </p>
        </div>
    </div>
  );
};

export default TestimonialCard;
