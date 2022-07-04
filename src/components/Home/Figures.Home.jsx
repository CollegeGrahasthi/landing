import React from 'react';
import bed from '../../images/bed.png';
import pg from '../../images/pg.png';
import cities from '../../images/cities.png';
import university from '../../images/university.png';

const Figures = () => {
  return (
    <div className='flex items-center justify-evenly py-10'>
    
        <div className='flex items-center'>
            <img src={bed} alt="bed" className='w-10' />
            <p className='pl-4 text-xl font-semibold text-c1'>1M+ Beds</p>
        </div>

        <div className='flex items-center'>
            <img src={pg} alt="pg" className='w-10' />
            <p className='pl-4 text-xl font-semibold text-c1'>100K+ PGs</p>
        </div>

        <div className='flex items-center'>
            <img src={university} alt="university" className='w-10' />
            <p className='pl-4 text-xl font-semibold text-c1'>200+ Universities</p>
        </div>

        <div className='flex items-center'>
            <img src={cities} alt="cities" className='w-10' />
            <p className='pl-4 text-xl font-semibold text-c1'>100+ Cities</p>
        </div>
    </div>
  );
};

export default Figures;
