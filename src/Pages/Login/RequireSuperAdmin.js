import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useSuperAdmin from '../../hooks/useSuperAdmin';
import Loading from '../Shared/Loading/Loading';

const RequireSuperAdmin= ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [superAdmin,superAdminLoading]=useSuperAdmin(user)
    const location = useLocation()
    if(loading || superAdminLoading){
        return <Loading></Loading>
    }
    if(!user || !superAdmin){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireSuperAdmin;