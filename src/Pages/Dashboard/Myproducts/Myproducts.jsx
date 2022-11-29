import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Myproducts = () => {

    const { data: products = [] } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/addProducts')
            .then(res => res.json())
    })
    return (
        <div className="overflow-x-auto w-full my-5">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>avatar</th>
                        <th>Product Name</th>
                        <th>orginal price</th>
                        <th>Resale price</th>
                        <th>seller Name</th>
                        <th>advertised</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, i) =>
                            <tr>
                                <td>
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            <img src={product.image} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{product.name}</td>
                                <td>{product.original_price} Taka</td>
                                <td>{product.resale_price} Taka</td>
                                <td>{product.seller_name}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs btn-active">advertised</button>
                                </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Myproducts;