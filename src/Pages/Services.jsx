import React from 'react';
import Image from '../components/Image';
import room from '../images/room.jpeg';
import food from '../images/food.jpeg';
import laundry from '../images/laundry.jpeg'
import roommates from '../images/roommates.jpeg';
import gym from '../images/gym.jpeg';
import maid from '../images/maid.jpeg';

const Services = () => {
  return (
    <div className='h-screen'>
        <h1 className='text-4xl p-10 pb-0'>Services</h1>
        <div className='bg-black w-20 h-1 ml-10'></div>
        <div className='flex justify-center gap-10 pt-20'>
            <Image image={room} name="ROOMS" link="/" />
            <Image image={food} name="FOOD" link="/" />
            <Image image={laundry} name="Laundry" link="/" />
        </div>
        <div className='flex justify-center gap-10 pt-5'>
            <Image image={roommates} name="ROOMMATES" link="/" />
            <Image image={gym} name="GYM" link="/" />
            <Image image={maid} name="MAID" link="/" />
        </div>

    </div>
  );
};

export default Services;
