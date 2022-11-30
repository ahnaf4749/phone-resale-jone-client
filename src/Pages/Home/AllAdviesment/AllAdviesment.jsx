import React from 'react';
import { Link } from 'react-router-dom';

const AllAdviesment = ({ advertised }) => {
    const { image, name } = advertised;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='' style={{ height: '250px', width: '400px' }} src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default AllAdviesment;