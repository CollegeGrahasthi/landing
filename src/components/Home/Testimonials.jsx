import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import TestimonialCard from './TestimonialCard.Home';
import profile from '../../images/user.jpeg';

const Testimonials = () => {
  const userData = {
    profile: profile,
    name: "Shishir Shekhar",
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate in modi recusandae animi sit veritatis vitae aut incidunt, omnis, minus eligendi illum labore dolorum, deserunt reprehenderit veniam eos officiis soluta quod adipisci provident doloremque quasi! Dolores doloribus nulla unde neque"
  };
  return (
    <div className='h-[60%] md:h-screen pb-10'>
      <h1 className='text-4xl p-10 pb-0'>Testimonial</h1>
      <div className='bg-black w-20 h-1 ml-10'></div>

      <div className='hidden md:flex flex-row gap-10 justify-center items-center pt-10 px-20 w-full h-[90%]'>
        <TestimonialCard userData={ userData } />
        <TestimonialCard userData={ userData } />
        <TestimonialCard userData={ userData } />
      </div>

      <div className='md:hidden'>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={6}
          isPlaying={true}
          className='bg-white pt-10'
        >
          <Slider>
            <Slide index={0} innerClassName='flex justify-center mt-4'>
              <TestimonialCard userData={ userData } />
            </Slide>
            <Slide index={1} innerClassName='flex justify-center mt-4'>
              <TestimonialCard userData={ userData } />
            </Slide>
            <Slide index={2} innerClassName='flex justify-center mt-4'>
              <TestimonialCard userData={ userData } />
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default Testimonials;
