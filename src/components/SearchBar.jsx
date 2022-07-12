import React from 'react';
import search from '../images/search.png';

const SearchBar = () => {
  return (
    <div className="flex justify-center align-center">

    <div className='flex justify-between w-[90%] md:w-full bg-white text-black text-sm px-2 rounded-xl'>
        <input type="text" name="search" id="search" placeholder='Search by University' className='rounded-xl focus:outline-none p-2 w-full' />
        <img src={search} alt="search" className='w-10 p-2 hover:cursor-pointer' />
    </div>
    </div>
  );
};

export default SearchBar;