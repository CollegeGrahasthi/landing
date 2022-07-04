import React from 'react';
import Nav from '../components/Nav';
import Disclosure from '../components/Rooms/Disclosure.Rooms';

const Rooms = () => {
  return (
    <div>
      <Nav minimal={false} />
      <div className='flex gap-10 px-20 py-16'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-2xl font-medium pb-7'>Filters</h1>
          <Disclosure title="Rooms" tags={["1BHK", "2BHK", "Others"]} />
          <Disclosure title="Beds" tags={["Double Bed", "Single Bed", "Others"]} />
          <Disclosure title="Price" tags={["> ₹10,000", "₹5,000 - ₹10,000", "< ₹5,000"]} />
          <Disclosure title="Distance from college" tags={["> 5 KM", "2 KM - 5 KM", "< 2 KM"]} />
        </div>

        <div>

        </div>
      </div>
    </div>
  );
};

export default Rooms;