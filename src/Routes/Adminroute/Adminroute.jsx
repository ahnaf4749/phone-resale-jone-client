import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isLoading] = useAdmin(user?.email)
    const location = useLocation()

    if (loading && isLoading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;