import React from 'react';
import Nav from '../components/Nav';
import RoomInfo from '../components/Room/RoomInfo.Room';
import Footer from '../components/Footer';

const Room = () => {
  return (
    <div>
      <Nav minimal={false} />
      
      <div className='flex flex-col'>
        <RoomInfo />
      </div>

      <Footer bgColor="c1" />
    </div>
  );
};

export default Room;
