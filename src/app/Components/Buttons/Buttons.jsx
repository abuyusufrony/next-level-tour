import React from 'react';

const Buttons = () => {
    return (
        <div className="p-6 space-x-4">
            <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
                Primary
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                Secondary
            </button>
            <button className="border border-indigo-500 text-indigo-500 px-4 py-2 rounded hover:bg-indigo-50">
                Outline
            </button>
        </div>
    );
};

export default Buttons;