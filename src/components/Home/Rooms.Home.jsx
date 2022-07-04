import React from 'react';
import Room from './RoomCard.Home';

const Rooms = () => {
  return (
    <div className='h-screen'>
        <h1 className='text-4xl p-10 pb-0'>Rooms</h1>
        <div className='bg-black w-16 h-1 ml-10'></div>
        <div className='flex justify-center gap-10 pt-20'>
            <Room 
              name="Mera Apartment" 
              image="https://5.imimg.com/data5/AI/WE/GLADMIN-5593585/pg-rooms-500x500.jpg" 
              rent="5000" facilities={["2 Bed", "2 AC", "1 Fridge", "2 Study Table"]} />
            <Room 
              name="Mera Apartment" 
              image="https://5.imimg.com/data5/AI/WE/GLADMIN-5593585/pg-rooms-500x500.jpg" 
              rent="5000" facilities={["2 Bed", "2 AC", "1 Fridge", "2 Study Table"]} />
            <Room 
              name="Mera Apartment" 
              image="https://5.imimg.com/data5/AI/WE/GLADMIN-5593585/pg-rooms-500x500.jpg" 
              rent="5000" facilities={["2 Bed", "2 AC", "1 Fridge", "2 Study Table"]} />
        </div>
    </div>
  );
};

export default Rooms;