import React from 'react';
import LocationButton from './LocationButton';

const locations = [
    'Última Localização',
    'Paleto Bay',
    'Motels',
    'Police Department',
    'Legion Square',
    'Integrity Way 1'
];

function SpawnScreen() {
    return (
        <div className="flex flex-col items-start p-6 space-y-1 bg-black bg-opacity-50 w-80 rounded-lg min-h-screen">
            <h1 className="text-white text-sm font-bold -mb-2 text-left">LOCAIS DE</h1>
            <h2 className="text-blue-500 text-2xl font-bold mb-0 text-left">SPAWN</h2> 
            <div className="space-y-4 w-full">
                {locations.map((location, index) => (
                    <LocationButton key={index} location={location} />
                ))}
            </div>
        </div>
    );
}

export default SpawnScreen;
