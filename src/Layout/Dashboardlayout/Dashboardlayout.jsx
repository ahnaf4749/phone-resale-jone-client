import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import Header from '../../Pages/Shared/Header/Header';

const Dashboardlayout = () => {

    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

    console.log(isSeller);
    console.log(isAdmin);

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard/myorder'>My Orders</Link> </li>
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/addproducts'>Add Products</Link> </li>
                                <li><Link to='/dashboard/myproducts'>My Products</Link> </li>
                            </>
                        }
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allsellars'>All Sellars</Link> </li>
                                <li><Link to='/dashboard/allusers'>All Buyer</Link> </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboardlayout; 