import React from 'react';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <div className='bg-home-bg bg-cover'>
      <Nav />
      <div className='flex h-full items-center justify-center'>
        <h1 className='text-9xl text-white'>College Grahasthi</h1>
      </div>
    </div>
  );
};

export default Home;
