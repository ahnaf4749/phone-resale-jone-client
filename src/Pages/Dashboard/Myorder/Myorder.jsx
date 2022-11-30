/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Authprovider/Authprovider';


const Myorder = () => {


    const { user } = useContext(AuthContext)

    const url = `https://resale-jone-servar.vercel.app/bookings?email=${user?.email}`

    if (!user?.email) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings'],
        queryFn: () => fetch(url)
            .then(res => res.json())
    })

    if (isLoading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }

    return (
        <div className="overflow-x-auto w-full mt-4">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Phone name</th>
                        <th>Cureant price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, i) =>
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={booking.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{booking.phoneName}</td>
                                <td>{booking.resale_price} Taka</td>
                                <th>
                                    {
                                        booking.resale_price && !booking.paid &&
                                        <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button className="btn btn-active btn-ghost btn-xs">Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.resale_price && booking.paid && <span>Paid</span>
                                    }
                                </th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Myorder;