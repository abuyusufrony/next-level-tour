import React from 'react';

const Hero = () => {
    const clcikme = () => {
        console.log('Buton are clicked');
    }


    return (
        <div>
            <button className='border-t-neutral-500 '> click on me</button>

            <div>
                <div className="box-shadow">
                    <h1 className="text-4xl font-bold text-center mb-4">Welcome to Our Nature Site</h1>
                    <p className="text-lg text-center mb-6">Explore the beauty of nature with us.</p>
                    <div className="flex justify-center">
                        <button
                            onClick={clcikme}
                            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300"
                        >
                            Click Me
                        </button>
                    </div>
                    <div>
                        <h2>Don't   Forget that promise your self</h2>
                        <h2>Better days are comming </h2>
                    </div>
                </div>
            </div>

            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-sm">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
                        <div className="flex items-center justify-center">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="Profile"
                                className="w-24 h-24 rounded-full border-4 border-white"
                            />
                        </div>
                        <div className="text-center mt-4">
                            <h2 className="text-white text-xl font-semibold">Jane Doe</h2>
                            <p className="text-indigo-100 text-sm">Frontend Developer</p>
                        </div>
                    </div>
                    <div className="p-6">
                        <p className="text-gray-700 text-sm mb-4">
                            Passionate about creating user-friendly web applications. Skilled in
                            React, Tailwind CSS, and JavaScript.
                        </p>
                        <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition duration-300">
                            Follow
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;