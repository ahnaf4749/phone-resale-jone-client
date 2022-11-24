import React from 'react';
import './About.css'
import AboutAcco from './AboutAcco';

const About = () => {
    return (
        <div className='sumu'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2'>
                        <img src='https://i.ibb.co/qB3qYTp/bg-1.webp' alt="" className="w-4/5 h-full" />
                    </div>
                    <div className='w-1/2'>
                        <AboutAcco></AboutAcco>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;