import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Authprovider/Authprovider';

const Myorders = () => {


    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings'],
        queryFn: () => fetch(url)
            .then(res => res.json())
    })

    if (isLoading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, i) =>
                            <tr>
                                <th>{i + 1}</th>
                                <td>{booking.phoneName}</td>
                                <td>Quality Control Specialist</td>
                                <td>pay</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Myorders;