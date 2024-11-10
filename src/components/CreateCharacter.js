import React, { useState } from 'react';
import { FaMale, FaFemale } from 'react-icons/fa';

function CreateCharacterScreen() {
    const [PrimerioNome, setPrimeiroNome] = useState('');
    const [Sobrenome, setSobrenome] = useState('');
    const [Nacionalidade, setNacionalidade] = useState('');
    const [Genero, setGenero] = useState('');
    const [DataNascimento, setDataNascimento] = useState('');

    const handleSubmit = () => {
        console.log({ PrimerioNome, Sobrenome, Nacionalidade, Genero, DataNascimento });
    };

    return (
        <div className="flex flex-col items-start p-6 space-y-4 bg-black bg-opacity-50 w-80 rounded-lg min-h-screen">
            <h1 className="text-white text-sm font-bold -mb-5 text-left">Criar</h1>
            <h2 className="text-blue-600 text-2xl font-bold mb-1 text-left">PERSONAGEM</h2>

            <label className="text-white text-sm" htmlFor="PrimeiroNome">Primeiro Nome</label>
            <input
                type="text"
                placeholder="Jake"
                value={PrimerioNome}
                onChange={(e) => setPrimeiroNome(e.target.value)}
                className="w-full p-2 bg-gray-800 text-white rounded-lg"
            />

            <label className="text-white text-sm" htmlFor="Sobrenome">Sobrenome</label>
            <input
                type="text"
                placeholder="Viado"
                value={Sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
                className="w-full p-2 bg-gray-800 text-white rounded-lg"
            />

            <label className="text-white text-sm" htmlFor="Nacionalidade">Nacionalidade</label>
            <input
                type="text"
                placeholder="Alemanha"
                value={Nacionalidade}
                onChange={(e) => setNacionalidade(e.target.value)}
                className="w-full p-2 bg-gray-800 text-white rounded-lg"
            />

            <label className="text-white text-sm">Gênero</label>
            <div className="flex items-center space-x-4 mb-4">
                <button
                    onClick={() => setGenero('Masculino')}
                    className={`flex items-center p-2 px-4 rounded-lg ${Genero === 'Masculino' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white'}`}
                >
                    <FaMale className="mr-2" />
                    Masculino
                </button>
                <button
                    onClick={() => setGenero('Feminino')}
                    className={`flex items-center p-2 px-5 rounded-lg ${Genero === 'Feminino' ? 'bg-pink-500 text-white' : 'bg-gray-800 text-white'}`}
                >
                    <FaFemale className="mr-2" />
                    Feminino
                </button>
            </div>

            <label className="text-white text-sm" htmlFor="DataNascimento">Data de Nascimento</label>
            <input
                type="date"
                value={DataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
                className="w-full p-2 bg-gray-800 text-white rounded-lg"
            />

            <button
                onClick={handleSubmit}
                className="w-full p-2 bg-blue-600 hover:bg-blue-600 text-white rounded-lg"
            >
                Criar Personagem
            </button>
        </div>
    );
}

export default CreateCharacterScreen;
