import React from 'react';
import Button from '../Button';

const RoomCard = ({ image, distance, college, price, rooms, name, address, description }) => {
    return (
        <div className='flex flex-col lg:flex-row shadow-lg rounded p-2 w-full h-fit'>
            <div className='flex flex-col justify-between w-full gap-1 lg:gap-0 lg:w-5/12'>
                <img src={image} alt="room" className='rounded' />
                <p className='bg-c2 rounded px-2 text-sm text-white'>{distance}KM from {college}</p>
            </div>

            <div className='flex flex-col justify-between px-5 w-full'>
                <div className='flex flex-col lg:flex-row lg:items-baseline pb-2'>
                    <h1 className='text-xl text-c1'>₹{price}</h1>
                    <p className='text-sm text-c2 lg:px-2'>{rooms}BHK</p>
                </div>

                <hr />

                <div className='flex flex-col lg:flex-row lg:items-baseline text-gray-500 pt-5 pb-2'>
                    <h1 className='text-gray-700'>{name}</h1>
                    <p className='text-sm lg:pl-1'>in {address}</p>
                </div>

                <hr />
                
                <div className='py-5'>
                    <p>
                        {
                            description.substring(0, 150) + " "
                        }
                        <p className='inline-block text-c1 underline cursor-pointer'>Read More</p>
                    </p>
                </div>

                <div className='flex justify-between'>
                    <Button value="Book Now" link="tel:7091045216" bgColor="bg-c1" />
                </div>
            </div>
        </div>
    )
};

export default RoomCard;
