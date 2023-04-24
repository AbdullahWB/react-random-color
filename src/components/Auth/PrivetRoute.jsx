import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const user = null;
    if (!user) {
       // navigate
        <Navigate to="/login" />
    }
    return children
};

export default PrivetRoute;