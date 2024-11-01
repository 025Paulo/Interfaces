import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

function LocationButton({ location }) {
    const handleClick = () => {
        console.log(`clicouuu: ${location}`);
    };

    return (
        <button className="flex items-center p-2 bg-gray-800 hover:bg-gray-700 bg-opacity-50 rounded-lg w-full"
            onClick={handleClick} >
            <div className="flex items-center justify-center w-10 h-9 p-4 bg-blue-500 hexagon rotate-90">
                <div className="p- transform rotate-[-90deg]">
                    <FaLocationDot className="text-white text-xl" />
                </div>
            </div>
            <span className="ml-4 text-white">{location}</span>
        </button>
    );
}

export default LocationButton;

