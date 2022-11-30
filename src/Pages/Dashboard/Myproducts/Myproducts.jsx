import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { AuthContext } from '../../../Authprovider/Authprovider';
import Deletemodal from '../../Shared/Deletemodal/Deletemodal';

const Myproducts = () => {

    const [deleteModal, setDeleteModal] = useState(null)
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/allProductsMy?email=${user?.email}`;
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })

    const handleCancel = () => {
        setDeleteModal(null)
    }

    const handleDelete = product => {
        fetch(`http://localhost:5000/allProducts/${product._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    refetch()
                    toast.success('delete succesfully')
                }
            })
    }


    const handleAdmin = id => {
        // console.log(id);
        fetch(`http://localhost:5000/allProducts/advertised/${id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('wow! Your product added succesfully, plz cheak Home route')
                    refetch()
                    console.log(data);
                }
            })

    }

    return (
        <div>
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
                            <th>Action</th>
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
                                        {/* <td>{user?.role !== 'admin' && <button className="btn glass text-primary">Make Admin</button>}</td> */}
                                        {product?.advertised !== 'advertised' && <button onClick={() => handleAdmin(product._id)} className="btn btn-ghost btn-xs btn-active">advertised</button>}
                                    </th>
                                    <th>
                                        <label htmlFor="confarmetion-modal" onClick={() => setDeleteModal(product)} className="btn btn-ghost btn-xs btn-active">Delete</label>
                                    </th>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteModal &&
                <Deletemodal
                    title={'Are you sue you want to delete?'}
                    message={`if you delete ${deleteModal.name} it cannot be undone`}
                    handleCancel={handleCancel}
                    handleDelete={handleDelete}
                    deleteModal={deleteModal}
                ></Deletemodal>
            }
        </div>
    );
};

export default Myproducts;