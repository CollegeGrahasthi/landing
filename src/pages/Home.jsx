import React from 'react';
import Hero from '../components/Home/Hero.Home'
import Rooms from '../components/Home/Rooms.Home';
import Services from '../components/Home/Services.Home';
import Footer from '../components/Footer';
import Testimonials from '../components/Home/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Rooms />
      <Services />
      <Testimonials />
      <Footer bgColor="black" />
    </div>
  );
};

export default Home;
