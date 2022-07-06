import React from 'react'
import Button from '../../components/Button';

const RoomCard = ({ name, image, rent, facilities }) => {
  return (
    <div className='rounded-xl shadow-2xl md:w-96 w-80 md:m-10 h-fit bg-white'>
        <img src={image} alt="room" className='rounded-xl md:w-full' />
        <div className='py-4 pl-2'>
            <h1 className='text-xl font-semibold'>{ name }</h1>
            <p className='text-lg'>₹{ rent }</p>
            
            <div className='flex flex-wrap'>
                {
                    facilities.map((facility) => (
                        <p className='py-2 px-2'>{facility}</p>
                    ))
                }
            </div>
        </div>

        <div className='flex justify-center p-2'>
            <Button value="Buy Now !!" link="/rooms" />
        </div>
    </div>
  );
};

export default RoomCard;