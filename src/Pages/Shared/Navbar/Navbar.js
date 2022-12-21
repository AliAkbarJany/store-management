import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    // console.log(user)
    const logout = () => {
        signOut(auth);
    };

    const menuItems = <>
        <li> <Link to='/home'>HOME</Link> </li>
        <li> <a href='/#sunGlasses'>SUN-GLASSES</a> </li>
        <li> <a href='/#bags'>BAGS</a> </li>
        <li> <a href='/#shoes'>SHOES</a> </li>

        <li><Link to='/dashboard'>DASHBOARD</Link></li>
        <li>{user ?
            <button onClick={logout} className='btn btn-warning'>SignOut</button> :
            <Link to='/login'>Login</Link>}
        </li>
    </>
    return (
        <div>
            <div style={{ "backgroundColor": "#2A8C82" }} class="navbar justify-around font-bold">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}

                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-2xl font-bold">STORE MANAGEMENT</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>

                <div className="navbar-end">
                    <label tabindex="1" for="dashboard-sidebar" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;