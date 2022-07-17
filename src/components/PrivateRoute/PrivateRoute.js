import React from 'react';
import {CircularProgress} from '@mui/material'
import { Navigate, useLocation } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useUserContext();
    let location = useLocation();
    if (isLoading) { return <CircularProgress/> }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;