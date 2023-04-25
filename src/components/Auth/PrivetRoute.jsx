import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivetRoute = ({ children }) => {
    const {user} = useContext(AuthContext)
    // const user = null;
    if (!user) {
       // navigate
        <Navigate to="/login" />
    }
    return children
};

export default PrivetRoute;