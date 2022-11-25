import React from 'react';
import { Link } from 'react-router-dom';

const Cetagorie = ({ cetagorie }) => {

    const { name, image } = cetagorie;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='' style={{ height: '250px', width: '400px' }} src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center font-bold text-2xl">{name}</h2>
                <Link to={`/allProducts/${name}`}>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See Phone</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Cetagorie;