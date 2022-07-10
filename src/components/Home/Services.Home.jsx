import React from 'react';
import Image from './Image';
import room from '../../images/room.jpeg';
import food from '../../images/food.jpeg';
import laundry from '../../images/laundry.jpeg'
import roommates from '../../images/roommates.jpeg';
import gym from '../../images/gym.jpeg';
import maid from '../../images/maid.jpeg';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

const ServicesSection = () => {
  return (
    <div className='md:h-fit h-[60%]'>
      <h1 className='text-4xl p-10 pb-0'>Services</h1>
      <div className='bg-black w-20 h-1 ml-10'></div>

      <div className='lg:flex hidden justify-center items-center lg:py-10 flex-wrap'>
        <Image image={room} name="ROOMS" link="/" />
        <Image image={food} name="FOOD" link="/" />
        <Image image={laundry} name="Laundry" link="/" />
        <Image image={roommates} name="ROOMMATES" link="/" />
        <Image image={gym} name="GYM" link="/" />
        <Image image={maid} name="MAID" link="/" />
      </div>
      
      <div className='lg:hidden'>
      <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={6}
      isPlaying={true}
      className='bg-white'
    >
      <Slider>

          <Slide index={0} innerClassName='flex justify-center mt-4'><Image image={room} name="ROOMS" link="/" /></Slide>
          <Slide index={1} innerClassName='flex justify-center mt-4'><Image image={food} name="FOOD" link="/" /></Slide>
          <Slide index={2} innerClassName='flex justify-center mt-4'><Image image={laundry} name="Laundry" link="/" /></Slide>
    
          <Slide index={3} innerClassName='flex justify-center mt-4'><Image image={roommates} name="ROOMMATES" link="/" /></Slide>
          <Slide index={4} innerClassName='flex justify-center mt-4'><Image image={gym} name="GYM" link="/" /></Slide>
          <Slide index={5} innerClassName='flex justify-center mt-4'><Image image={maid} name="MAID" link="/" /></Slide>
      </Slider>
          </CarouselProvider>
      </div>

    </div>
  );
};

export default ServicesSection;
