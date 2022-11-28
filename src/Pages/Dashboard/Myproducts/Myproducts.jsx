import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Myproducts = () => {

    const { data: products = [] } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/addProducts')
            .then(res => res.json())
    })
    return (
        <div>
            {products.length}
        </div>
    );
};

export default Myproducts;