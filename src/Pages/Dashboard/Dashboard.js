import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useSuperAdmin from '../../hooks/useSuperAdmin';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [superAdmin,setSuperAdmin]=useSuperAdmin(user)
    return (
        <div class="drawer drawer-mobile" style={{ "backgroundColor": "#2A8C82" }}>
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-3xl font-extrabold text-center mb-5'>WECOME TO DASHBOARD</h2>
                <Outlet></Outlet>
                {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80  text-base-content font-bold">
                    {/* <!-- Sidebar content here --> */}
                    <li> <Link to='/dashboard'>My Profile</Link> </li>
                    <li><Link to ='/dashboard/adminResponsibilities'>Admins Responsibilities</Link></li>
                    <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                    {superAdmin && <li><Link to='/dashboard/users'>All Users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;