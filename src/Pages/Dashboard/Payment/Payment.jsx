import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {

    const data = useLoaderData()
    console.log(data);
    const { phoneName, resale_price, orginal_price, } = data;

    return (
        <div className='mt-5'>
            <h3 className='text-3xl font-bold'>Product name : {phoneName}</h3>
            <h3 className='text-2xl font-bold mt-4'>Market price : {orginal_price} Taka</h3>
            <h3 className='text-2xl font-semibold mt-4'>Cureant price : {resale_price} Taka</h3>
        </div>
    );
};

export default Payment;