import React from 'react'
import Button from './Button';

const Room = ({ name, rent, facilities }) => {
  return (
    <div className='rounded-xl bg-blue-200 w-96'>
        <img src="https://5.imimg.com/data5/AI/WE/GLADMIN-5593585/pg-rooms-500x500.jpg" alt="room" className='rounded-xl w-full' />
        <div className='py-4 pl-2'>
            <h1 className='text-xl font-semibold'>{ name }</h1>
            <p className='text-lg font-semibold'>
                Rent: <span className='font-normal'>₹{ rent }</span>
            </p>
            
            <p className='text-lg font-semibold'>Facilities:</p>
            <div className='grid grid-rows-2 grid-flow-col pl-4'>
                {
                    facilities.map((facility) => (
                        <p className=' py-2'>{facility}</p>
                    ))
                }
            </div>
            <div className='flex justify-center pt-4'>
                <Button value="Buy Now !!"/>
            </div>
        </div>
    </div>
  );
};

export default Room;