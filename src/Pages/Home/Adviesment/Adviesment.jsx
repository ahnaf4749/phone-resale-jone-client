import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllAdviesment from '../AllAdviesment/AllAdviesment';

const Adviesment = () => {

    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`http://localhost:5000/allProducts?advertised=advertised`)
            .then(res => res.json())
    })

    return (
        <div>
            <h2 className='text-4xl font-bold underline text-center mt-8'>Advertised</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-14 gap-6'>
                {allUsers.map(advertised => <AllAdviesment
                    key={advertised._id}
                    advertised={advertised}
                ></AllAdviesment>)
                }
            </div >
        </div>
    );
};

export default Adviesment;