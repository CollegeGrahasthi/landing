import React from 'react'
import Button from './Button';

const Room = ({ name, image, rent, facilities }) => {
  return (
    <div className='rounded-xl shadow-2xl w-96 bg-white'>
        <img src={image} alt="room" className='rounded-xl w-full' />
        <div className='py-4 pl-2'>
            <h1 className='text-xl font-semibold'>{ name }</h1>
            <p className='text-lg'>₹{ rent }</p>
            
            <div className='flex flex-row gap-7'>
                {
                    facilities.map((facility) => (
                        <p className=' py-2'>{facility}</p>
                    ))
                }
            </div>
        </div>

        <div className='flex justify-center p-2'>
            <Button value="Buy Now !!" link="/" />
        </div>
    </div>
  );
};

export default Room;