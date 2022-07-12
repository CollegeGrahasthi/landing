import React from 'react';
import ReviewCard from './ReviewCard.Room';

const Reviews = () => {
  return (
    <div className='flex flex-col items-center md:items-start py-10 md:px-36'>
        <h1 className='text-2xl font-semibold'>Reviews</h1>
        <div className='flex flex-col pt-10 w-full'>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
        </div>
    </div>
  );
};

export default Reviews;
