
import React, { useEffect, useState } from 'react';
import Cetagorie from '../Cetagorie/Cetagorie';

const Cetagories = () => {
    const [cetagories, setCetagories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allCetagories')
            .then(res => res.json())
            .then(data => setCetagories(data))
    }, [])

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-20 gap-6'>
            {cetagories.map(cetagorie => <Cetagorie
                key={cetagorie._id}
                cetagorie={cetagorie}
            ></Cetagorie>)
            }
        </div >
    );
};

export default Cetagories;