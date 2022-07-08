import React from 'react';
import Hero from '../components/Home/Hero.Home'
import Rooms from '../components/Home/Rooms.Home';
import Services from '../components/Home/Services.Home';
import Footer from '../components/Footer';

const Home = ({ showModal, setShowModal }) => {
  return (
    <div>
      <Hero showModal={showModal} setShowModal={setShowModal} />
      <Rooms />
      <Services />
      <Footer bgColor="black" />
    </div>
  );
};

export default Home;
