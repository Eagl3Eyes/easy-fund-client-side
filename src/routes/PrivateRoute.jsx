import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const locations = useLocation();

    // console.log(locations);
    if (loading) {
        return <progress className="progress progress-info w-full"></progress>
    }

    if (!loading && !user) {
        return <Navigate state={{ from: locations }} to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;