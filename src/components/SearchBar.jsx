import React from 'react';
import search from '../images/search.svg';

const SearchBar = () => {
  return (
    <div className='flex bg-white text-black text-sm px-2 rounded-xl'>
        <input type="text" name="search" id="search" className='rounded-xl focus:outline-none px-1' />
        <img src={search} alt="search" className='w-4' />
    </div>
  );
};

export default SearchBar;