import React from 'react';
import Button from '../Button'
import SecondaryButton from '../SecondaryButton';

const RoomInfo = ({ room, allImages, name, address, distance, college, description, price }) => {
    return (
        <div className='flex flex-col md:flex-row items-center md:items-start py-10 md:px-36 bg-c2/30'>
            <div className='bg-black border-4 md:border-8 border-black rounded-xl md:mr-10 w-full md:w-2/3'>
                <img src={room} alt="room" className='rounded-xl' />
                <div className='border-4 md:border-t-8 border-black rounded-xl flex flex-wrap lg:flex-row justify-between'>
                    {
                        allImages.map((image) => (
                            <img src={image} alt="room" className='rounded-xl w-28' />
                        ))
                    }
                </div>
            </div>

            <div className='flex flex-col items-center md:items-start pt-5 w-full md:w-1/3'>
                <h1 className='text-4xl font-semibold text-c1 pb-5'>{ name }</h1>
                <p className='text-sm'>{ address }</p>
                <p className='text-sm text-c2'>{ distance }Km from the { college }</p>
                <div className='flex flex-wrap py-2'>
                    <p className='bg-c1 text-white text-sm rounded-lg px-3 py-2 mr-2 my-2'>Air Conditioning</p>
                    <p className='bg-c1 text-white text-sm rounded-lg px-3 py-2 mr-2 my-2'>Bills included</p>
                    <p className='bg-c1 text-white text-sm rounded-lg px-3 py-2 mr-2 my-2'>Bills included</p>
                </div>
                <p className='w-96 text-justify py-5'>
                    { description }
                </p>
                <p className='text-xl font-semibold py-2'>At ₹{ price }</p>
                
                <div className='hidden md:flex gap-2 py-2'>
                    <SecondaryButton value="Enquire" link="tel:7091045216" bgColor={"c1"} />
                    <SecondaryButton value="Buy" link="tel:7091045216" bgColor={"c1"} />
                </div>

                <div className='flex md:hidden gap-2 p-2 w-full'>
                    <Button value="Enquire" link="tel:7091045216" bgColor={"c1"} />
                    <Button value="Buy" link="tel:7091045216" bgColor={"c1"} />
                </div>
            </div>
        </div>
    );
};

export default RoomInfo;
