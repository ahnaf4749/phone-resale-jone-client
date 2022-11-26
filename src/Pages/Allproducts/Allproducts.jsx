import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Bookingmodal from './Bookingmodal';
import Product from './Product';

const Allproducts = () => {

    const products = useLoaderData()
    const [booking, setBooking] = useState(null)

    return (
        <div>
            <h2 className='text-center text-4xl font-bold underline -mb-6'>All Phone</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-20'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        setBooking={setBooking}
                    ></Product>)
                }
            </div>
            <div>
                {
                    booking &&
                    <Bookingmodal
                        setBooking={setBooking}
                        booking={booking}
                    ></Bookingmodal>
                }
            </div>
        </div>
    );
};

export default Allproducts;