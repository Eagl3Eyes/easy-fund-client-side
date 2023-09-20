import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);
    // console.log(user);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                Swal.fire(
                    error.message,
                    'error'
                )
            })
    }


    const navItems = <>
        <li className='hover:text-info uppercase font-semibold'><Link>Home</Link></li>
        <li className='hover:text-info uppercase font-semibold'><Link to='/donatenow'>Donate Now</Link></li>
        <li className='hover:text-info uppercase font-semibold'><Link to='/contactus'>Contact Us</Link></li>


        {
            user &&
            <>
                <li className='hover:text-info uppercase font-semibold'><Link to='/dashboard'>Dashboard</Link></li>

                <div className="avatar">
                    <div className="w-8 mr-2 ml-2 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </div>
            </>
        }
        {
            user ?
                <li className='hover:text-info uppercase font-semibold'><button className='uppercase' onClick={handleLogOut}>Log Out</button></li> :
                <li className='hover:text-info uppercase font-semibold'><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <nav className="navbar items-center sm:px-0 md:px-0 lg:px-0 xl:px-16">
            <div className="navbar-start">
                <div className="dropdown flex items-center justify-center">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-md dropdown-content ml-24 mt-48 p-2 shadow bg-[#FDBE33] rounded-box w-52 z-50">
                        {navItems}
                    </ul>
                    {/* <a className="normal-case text-xl">
                        <img src="https://i.ibb.co/ynwZBxh/logo.png"
                            className="w-10 inline" />
                    </a> */}
                    <p className='text-xl md:ml-2 uppercase font-semibold'>
                        <span className='text-[#FDBE33]'>E</span>
                        <span className='text-slate-600'>asy</span>
                        <span className='text-[#ffc446]'> F</span>
                        <span className='text-slate-600'>und</span>
                    </p>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex items-center">
                <ul className="menu menu-horizontal items-center">
                    {navItems}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;