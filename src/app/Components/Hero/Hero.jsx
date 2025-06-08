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
                </div>
            </div>
        </div>
    );
};

export default Hero;