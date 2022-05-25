import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Menubar.css'
import logo from '../../Images/logo.png'
const Menubar = ({ children }) => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    };
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar shadow-md">
                    <div className="flex-1 px-2"><img src={logo} alt="" /></div>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            <li><NavLink className='rounded p-4 m-2 h-10 font-bold' to='/'>Home</NavLink></li>
                            <li><NavLink className='rounded p-4 m-2 h-10 font-bold' to='/portfolio'>Portfolio</NavLink></li>
                            <li><NavLink className='rounded p-4 m-2 h-10 font-bold' to='/blogs'>Blogs</NavLink></li>
                            <li>{user && <NavLink className='rounded p-4 m-2 h-10 font-bold' to='/dashboard'>Dashboard</NavLink>}</li>
                            <li className='font-bold text-green-500'>
                                {user && <h2>{user.displayName}</h2>}</li>
                            <li>{user ?
                                <button className="rounded font-bold h-10 m-2 border btn-outline btn-primary" onClick={logOut} >Sign Out</button>
                                :
                                <Link className="rounded font-bold h-10 m-2 btn-outline btn-primary border" to="/login">Login</Link>}
                            </li>
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <li><NavLink className='rounded p-4 m-2 h-10 font-bold' to='/'>Home</NavLink></li>
                    <li><NavLink className='rounded p-4 m-2 h-10 font-bold' to='/portfolio'>Portfolio</NavLink></li>
                    <li><NavLink className='rounded p-4 m-2 h-10 font-bold' to='/blogs'>Blogs</NavLink></li>
                    <li>{user && <NavLink className='rounded p-4 m-2 h-10 font-bold' to='/dashboard'>Dashboard</NavLink>}</li>
                    <li className='font-bold text-green-500'>
                        {user && <h2>{user.displayName}</h2>}</li>
                    <li>{user ?
                        <button className="rounded font-bold h-10 m-2 border btn-outline btn-primary" onClick={logOut} >Sign Out</button>
                        :
                        <Link className="rounded font-bold h-10 m-2 btn-outline btn-primary border" to="/login">Login</Link>}
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Menubar;