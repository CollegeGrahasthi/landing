import React from 'react';

const ReviewCard = ({ userData }) => {
  return (
    <div className='bg-c2/50 rounded my-2 p-2 w-full'>
        <div className='flex items-start px-7 pt-2'>
            <img src={ userData.profile } alt="user profile" className='rounded-full w-14' />
            <div className='px-2'>
                <h1>{ userData.name }</h1>
                <div className='flex'>
                    {
                        userData.stars.map((star) => (
                            <img src={star} alt="star" className='w-4 mr-1' />
                        ))
                    }
                    <p className='text-sm px-10 text-gray-800'>{ userData.time }</p>
                </div>

            </div>
        </div>
        <div className='px-7 py-4'>
            <p className='text-justify text-gray-700'>
                { userData.review }
            </p>
        </div>
    </div>
  );
};

export default ReviewCard;
