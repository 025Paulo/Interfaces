import React, { useState } from 'react';
import { FaMale, FaFemale } from 'react-icons/fa';

function CreateCharacterScreen() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nationality, setNationality] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');

    const handleSubmit = () => {
        console.log({ firstName, lastName, nationality, gender, dob });
    };

    return (
        <div className="flex flex-col items-start p-6 space-y-4 bg-black bg-opacity-50 w-80 rounded-lg min-h-screen">
            <h1 className="text-white text-sm font-bold -mb-5 text-left">Criar</h1>
            <h2 className="text-blue-500 text-2xl font-bold mb-1 text-left">PERSONAGEM</h2>

            <label className="text-white text-sm" htmlFor="firstName">Primeiro Nome</label>
            <input
                type="text"
                placeholder="Jake"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2 bg-gray-800 text-white rounded-lg"
            />

            <label className="text-white text-sm" htmlFor="lastName">Sobrenome</label>
            <input
                type="text"
                placeholder="Viado"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2 bg-gray-800 text-white rounded-lg"
            />

            <label className="text-white text-sm" htmlFor="nationality">Nacionalidade</label>
            <input
                type="text"
                placeholder="Alemanha"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="w-full p-2 bg-gray-800 text-white rounded-lg"
            />

            <label className="text-white text-sm">Gênero</label>
            <div className="flex items-center space-x-4 mb-4">
                <button
                    onClick={() => setGender('Masculino')}
                    className={`flex items-center p-2 rounded-lg ${gender === 'Masculino' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white'}`}
                >
                    <FaMale className="mr-2" />
                    Masculino
                </button>
                <button
                    onClick={() => setGender('Feminino')}
                    className={`flex items-center p-2 rounded-lg ${gender === 'Feminino' ? 'bg-pink-500 text-white' : 'bg-gray-800 text-white'}`}
                >
                    <FaFemale className="mr-2" />
                    Feminino
                </button>
            </div>

            <label className="text-white text-sm" htmlFor="dob">Data de Nascimento</label>
            <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full p-2 bg-gray-800 text-white rounded-lg"
            />

            <button
                onClick={handleSubmit}
                className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
                Criar Personagem
            </button>
        </div>
    );
}

export default CreateCharacterScreen;
