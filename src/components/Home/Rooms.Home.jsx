import React from 'react';
import Room from './RoomCard.Home';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
const Rooms = () => {
  return (
    <div className='md:h-fit h-[80%]'>
      <h1 className='text-4xl p-10 pb-0'>Rooms</h1>
      <div className='bg-black w-16 h-1 ml-10'></div>

      <div className='lg:flex flex-wrap hidden justify-center lg:py-24'>
      
        <Room 
          name="Mera Apartment" 
          image="https://5.imimg.com/data5/AI/WE/GLADMIN-5593585/pg-rooms-500x500.jpg" 
          rent="5000" facilities={["2 Bed", "2 AC", "1 Fridge", "2 Study Table"]} 
        />
        <Room 
          name="Mera Apartment" 
          image="https://5.imimg.com/data5/AI/WE/GLADMIN-5593585/pg-rooms-500x500.jpg" 
          rent="5000" facilities={["2 Bed", "2 AC", "1 Fridge", "2 Study Table"]} 
        />
        <Room 
          name="Mera Apartment" 
          image="https://5.imimg.com/data5/AI/WE/GLADMIN-5593585/pg-rooms-500x500.jpg" 
          rent="5000" facilities={["2 Bed", "2 AC", "1 Fridge", "2 Study Table"]}
        />
      </div>

      <div className='lg:hidden'>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={120}
          totalSlides={3}
          isPlaying={true}
          className='bg-white'
        >
          <Slider>
            <Slide index={0} innerClassName='flex justify-center mt-4'>
              <Room 
                name="Mera Apartment" 
                image="https://5.imimg.com/data5/AI/WE/GLADMIN-5593585/pg-rooms-500x500.jpg" 
                rent="5000" facilities={["2 Bed", "2 AC", "1 Fridge", "2 Study Table"]}
              />
            </Slide>

          <Slide index={1} innerClassName='flex justify-center mt-4'>
            <Room 
              name="Mera Apartment" 
              image="https://5.imimg.com/data5/AI/WE/GLADMIN-5593585/pg-rooms-500x500.jpg" 
              rent="5000" facilities={["2 Bed", "2 AC", "1 Fridge", "2 Study Table"]}
            />
          </Slide>
          
          <Slide index={2} innerClassName='flex justify-center mt-4'>
            <Room 
              name="Mera Apartment" 
              image="https://5.imimg.com/data5/AI/WE/GLADMIN-5593585/pg-rooms-500x500.jpg" 
              rent="5000" facilities={["2 Bed", "2 AC", "1 Fridge", "2 Study Table"]}
            />
          </Slide>

          </Slider>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default Rooms;