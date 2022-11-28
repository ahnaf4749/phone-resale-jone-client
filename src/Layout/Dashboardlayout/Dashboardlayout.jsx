import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../Pages/Shared/Header/Header';

const Dashboardlayout = () => {
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
                        <li><Link to=''>Add Products</Link> </li>
                        <li><Link to=''>My Products</Link> </li>
                        <li><Link to=''>All Buyer</Link> </li>
                        <li><Link to='/dashboard/allusers'>All Sellars</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboardlayout; 