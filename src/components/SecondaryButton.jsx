import React from 'react';

const SecondaryButton = ({ value, link, bgColor }) => {
    var text = "";

    if (bgColor === "white") {
        text = "c1"
    } else {
        text = "white"
    }

    console.log(`bg-${bgColor}`);

    return (
        <a href={link} className={`bg-${bgColor} text-${text} text-sm px-4 py-2 rounded-xl flex justify-center w-32`}>
            { value }
        </a>
    );
};

export default SecondaryButton;
