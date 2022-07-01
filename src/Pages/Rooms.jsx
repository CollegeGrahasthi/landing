import React from 'react';
import Room from '../components/Room';

const Rooms = () => {
  return (
    <div className='h-screen'>
        <h1 className='text-4xl p-10 pb-0'>Rooms</h1>
        <div className='bg-black w-16 h-1 ml-10'></div>
        <div className='flex justify-center gap-10 pt-20'>
            <Room name="Mera Apartment" rent="5000" facilities={["AC", "Fridge", "Study Table", "Ladki/ladka"]} />
            <Room name="Mera Apartment" rent="5000" facilities={["AC", "Fridge", "Study Table", "Ladki/ladka"]} />
            <Room name="Mera Apartment" rent="5000" facilities={["AC", "Fridge", "Study Table", "Ladki/ladka"]} />
        </div>
    </div>
  );
};

export default Rooms;