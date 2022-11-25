import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Cetagories from '../Cetagories/Cetagories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cetagories></Cetagories>
            <About></About>
        </div>
    );
};

export default Home;