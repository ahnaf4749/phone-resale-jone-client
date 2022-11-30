import React from 'react';
import About from '../About/About';
import Adviesment from '../Adviesment/Adviesment';
import Banner from '../Banner/Banner';
import Cetagories from '../Cetagories/Cetagories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-4xl font-bold underline text-center mt-8'>All cetagories</h2>
            <Cetagories></Cetagories>
            <Adviesment></Adviesment>
            <About></About>

        </div>
    );
};

export default Home;