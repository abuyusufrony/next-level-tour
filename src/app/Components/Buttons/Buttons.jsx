import React from 'react';

const Buttons = () => {
    return (
        <div className="p-6 space-x-4 space-y-4 flex flex-wrap">
            {/* Existing Buttons */}
            <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
                Primary
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                Secondary
            </button>
            <button className="border border-indigo-500 text-indigo-500 px-4 py-2 rounded hover:bg-indigo-50">
                Outline
            </button>

            {/* Success Button */}
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Success
            </button>

            {/* Danger Button */}
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Danger
            </button>

            {/* Warning Button */}
            <button className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500">
                Warning
            </button>

            {/* Disabled Button */}
            <button className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed opacity-60" disabled>
                Disabled
            </button>

            {/* Icon Only Button */}
            <button className="bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </button>

            {/* Ghost Button */}
            <button className="bg-transparent text-indigo-500 px-4 py-2 rounded hover:bg-indigo-100">
                Ghost
            </button>

            {/* Link Button */}
            <button className="text-indigo-600 hover:underline">
                Link
            </button>

            {/* Loading Button (simulated) */}
            <button className="bg-indigo-500 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-indigo-600">
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                <span>Loading...</span>
            </button>

            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded hover:opacity-90">
                ColurFull
            </button>
            <button className="bg-black text-green-400 px-4 py-2 rounded-lg border border-green-400 shadow-[0_0_10px_rgba(34,197,94,0.8)] hover:shadow-[0_0_20px_rgba(34,197,94,1)]">
                Neon
            </button>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%] hover:bg-right text-white px-4 py-2 rounded transition-all duration-500">
                Magic
            </button>
            {/* Glassmorphism Button */}
            <button className="backdrop-blur-sm bg-white/30 text-white px-4 py-2 rounded-lg border border-white/20 hover:bg-white/40">
                Glass
            </button>
            {/* Pulse Button */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full animate-pulse hover:animate-none">
                Pulse
            </button>
        </div>
    );
};

export default Buttons;