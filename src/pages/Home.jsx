import React from 'react';
import Hero from '../components/HeroSection'
import Rooms from '../components/RoomsSection';
import Services from '../components/ServicesSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Rooms />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
