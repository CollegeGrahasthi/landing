import React, { useState } from 'react';
import downArrow from '../../images/down-arrow.png';
import upArrow from '../../images/up-arrow.png';

const Disclosure = ({ title, tags }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className='shadow rounded flex flex-col justify-center w-72'>
            <div className='flex items-center gap-4 p-4 text-lg' onClick={handleClick}>
                {
                    open ? 
                        <img src={upArrow} alt="down arrow" className='w-6' />
                        :
                        <img src={downArrow} alt="up arrow" className='w-6' />
                }
                <h1 className={open ? "text-c1" : "text-black" }>{ title }</h1>
            </div>

            {
                open &&
                <div className="flex items-center gap-3 flex-wrap p-4">
                {
                    { tags }.tags.map((tag) => (
                        <div className="border-2 border-gray-200 hover:border-c1 hover:text-c1 px-2 py-1 rounded">
                            <a href='/rooms'>{ tag }</a>
                        </div>
                    ))
                }
                </div>
            }
        </div>
    );
};

export default Disclosure;
