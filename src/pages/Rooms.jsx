import React from 'react';
import Nav from '../components/Nav';
import Disclosure from '../components/Rooms/Disclosure.Rooms';
import RoomCard from '../components/Rooms/RoomCard.Rooms';
import Footer from '../components/Footer';
import room from '../images/room.jpeg';

const Rooms = ({ showModal, setShowModal }) => {

  return (
    <div>
      <Nav minimal={false} showModal={showModal} setShowModal={setShowModal} />

      <div className='flex flex-col md:flex-row gap-10 px-10 md:px-20 py-16'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-2xl font-medium pb-7'>Filters</h1>
          <Disclosure title="Rooms" tags={["1BHK", "2BHK", "Others"]} />
          <Disclosure title="Beds" tags={["Double Bed", "Single Bed", "Others"]} />
          <Disclosure title="Price" tags={["> ₹10,000", "₹5,000 - ₹10,000", "< ₹5,000"]} />
          <Disclosure title="Distance from college" tags={["> 5 KM", "2 KM - 5 KM", "< 2 KM"]} />
        </div>

        <div className='flex flex-col gap-5 w-full'>
          <RoomCard 
            image={room} 
            distance="1" 
            college="LPU" 
            price="7000" 
            rooms="2" 
            name="Mera Apartment" 
            address="Law Gate, Block 1" 
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quaerat iure libero numquam hic autem consectetur ad. Mollitia odit dolores error, impedit cumque consequuntur quidem odio sequi ipsa laborum asperiores eaque id porro minus. Praesentium labore quibusdam eaque adipisci beatae error deserunt maiores. Deleniti aliquam pariatur odio iure rem dignissimos!"
          />
          
          <RoomCard 
            image={room} 
            distance="1" 
            college="LPU" 
            price="7000" 
            rooms="2" 
            name="Mera Apartment" 
            address="Law Gate, Block 1" 
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quaerat iure libero numquam hic autem consectetur ad. Mollitia odit dolores error, impedit cumque consequuntur quidem odio sequi ipsa laborum asperiores eaque id porro minus. Praesentium labore quibusdam eaque adipisci beatae error deserunt maiores. Deleniti aliquam pariatur odio iure rem dignissimos!"
          />

          <RoomCard 
            image={room} 
            distance="1" 
            college="LPU" 
            price="7000" 
            rooms="2" 
            name="Mera Apartment" 
            address="Law Gate, Block 1" 
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quaerat iure libero numquam hic autem consectetur ad. Mollitia odit dolores error, impedit cumque consequuntur quidem odio sequi ipsa laborum asperiores eaque id porro minus. Praesentium labore quibusdam eaque adipisci beatae error deserunt maiores. Deleniti aliquam pariatur odio iure rem dignissimos!"
          />

          <RoomCard 
            image={room} 
            distance="1" 
            college="LPU" 
            price="7000" 
            rooms="2" 
            name="Mera Apartment" 
            address="Law Gate, Block 1" 
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quaerat iure libero numquam hic autem consectetur ad. Mollitia odit dolores error, impedit cumque consequuntur quidem odio sequi ipsa laborum asperiores eaque id porro minus. Praesentium labore quibusdam eaque adipisci beatae error deserunt maiores. Deleniti aliquam pariatur odio iure rem dignissimos!"
          />

          <RoomCard 
            image={room} 
            distance="1" 
            college="LPU" 
            price="7000" 
            rooms="2" 
            name="Mera Apartment" 
            address="Law Gate, Block 1" 
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quaerat iure libero numquam hic autem consectetur ad. Mollitia odit dolores error, impedit cumque consequuntur quidem odio sequi ipsa laborum asperiores eaque id porro minus. Praesentium labore quibusdam eaque adipisci beatae error deserunt maiores. Deleniti aliquam pariatur odio iure rem dignissimos!"
          />
        </div>
      </div>

      <Footer bgColor="c1" />

    </div>
  );
};

export default Rooms;