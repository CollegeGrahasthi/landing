import React from 'react';

const SecondaryButton = ({ value, link, bgColor }) => {
    var text = "";

    if (bgColor === "bg-white") {
        text = "c1"
    } else {
        text = "white"
    }

    return (
        <a href={link} className={`${bgColor} text-${text} text-sm px-4 py-2 rounded-xl flex justify-center w-32`}>
            { value }
        </a>
    );
};

export default SecondaryButton;
