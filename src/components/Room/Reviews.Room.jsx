import React from 'react';
import ReviewCard from './ReviewCard.Room';
import profile from '../../images/user.jpeg';
import star from '../../images/star.png';

const Reviews = () => {
    const userData = {
        profile: profile,
        name: "Shishir Shekhar",
        stars: [star, star, star, star, star],
        time: "1 month ago",
        review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate in modi recusandae animi sit veritatis vitae aut incidunt, omnis, minus eligendi illum labore dolorum, deserunt reprehenderit veniam eos officiis soluta quod adipisci provident doloremque quasi! Dolores doloribus nulla unde neque"
    };

    return (
        <div className='flex flex-col items-center md:items-start py-10 md:px-36'>
            <h1 className='text-2xl font-semibold'>Reviews</h1>
            <div className='flex flex-col pt-10 w-full'>
                <ReviewCard userData={ userData } />
                <ReviewCard userData={ userData } />
                <ReviewCard userData={ userData } />
            </div>
        </div>
    );
};

export default Reviews;
