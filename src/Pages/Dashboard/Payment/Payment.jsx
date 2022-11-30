import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cheakoutform from './Cheakoutform';

const stripePromise = loadStripe(process.env.REACT_APP_payment_pk);
console.log(stripePromise);

const Payment = () => {

    const data = useLoaderData()
    // console.log(data);
    const { phoneName, resale_price, orginal_price, } = data;

    return (
        <div className='mt-5'>
            <h3 className='text-3xl font-bold'>Product name : {phoneName}</h3>
            <h3 className='text-2xl font-bold mt-4'>Market price : {orginal_price} Taka</h3>
            <h3 className='text-2xl font-semibold mt-4'>Cureant price : {resale_price} Taka</h3>
            <div className='my-12 w-96'>
                <Elements stripe={stripePromise}>
                    <Cheakoutform
                        data={data}
                    ></Cheakoutform>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;