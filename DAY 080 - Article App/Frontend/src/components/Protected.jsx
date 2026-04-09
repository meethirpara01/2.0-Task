import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {

    const { user, loading } = useAuth();

    console.log(user);
    console.log("Loading: ", loading);

    if (loading) return <p>Loading...</p>;

    if (!user) {
        console.log("User not authorized");
        return <Navigate to="/signin" />
    }

    return <Outlet />
}

export default Protected