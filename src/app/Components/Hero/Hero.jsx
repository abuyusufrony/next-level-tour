import React from 'react';

const Hero = () => {
    const clcikme = () => {
        console.log('Buton are clicked');
    }


    return (
        <div>
            <button className='border-t-neutral-500'> click on me</button>
        </div>
    );
};

export default Hero;