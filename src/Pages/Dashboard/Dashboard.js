import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-6 mx-8">
                    <h2 className='text-4xl text-center text-purple-500 font-bold mb-6'>Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {!admin && <><li><Link to="/dashboard/myOrder">My Orders</Link></li>
                            <li><Link to="/dashboard/addReviews">Add a Reviews</Link></li></>}
                        <li><Link to="/dashboard/profile">My Profile</Link></li>
                        {admin && <>
                            <li><Link to="/dashboard/allOrder">Manage all order</Link></li>
                            <li><Link to="/dashboard/addParts">Add a CarParts</Link></li>
                            <li><Link to="/dashboard/manageParts">Manage CarParts</Link></li>
                            <li><Link to="/dashboard/allUser">Make Admin</Link></li>
                        </>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;