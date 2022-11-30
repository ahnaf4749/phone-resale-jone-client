import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';
import useSeller from '../../hooks/useSeller';

const Sellarroute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const [isSeller, isLoading] = useSeller(user?.email)
    const location = useLocation()

    if (loading || isLoading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }

    if (user && isSeller) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default Sellarroute;