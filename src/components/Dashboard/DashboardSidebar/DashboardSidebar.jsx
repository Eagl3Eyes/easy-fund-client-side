import React from "react";
import { NavLink } from 'react-router-dom';
import { MdArrowBack, MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart, FiCreditCard, FiCalendar, FiUserCheck } from "react-icons/fi";
import useStudent from "../../../hooks/useStudent";
import useInstructor from "../../../hooks/useInstructor";
import useAdmin from "../../../hooks/useAdmin";
import { Outlet } from "react-router-dom";




const DashboardSidebar = () => {
    const [isStudent] = useStudent();
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();


    const navItems = <>
        <NavLink to='/' className='btn hover:text-info font-semibold uppercase'><MdArrowBack></MdArrowBack>Go Back to Home</NavLink>
        <NavLink to='/dashboard' className='btn hover:text-info font-semibold uppercase'><MdOutlineDashboard></MdOutlineDashboard>Dashboard</NavLink>

        {
            isStudent &&
            <>
                {/* <NavLink to='/dashboard/selecteddonation' className='btn hover:text-info font-semibold uppercase'><FiShoppingCart></FiShoppingCart>Selected Donation</NavLink> */}

                <NavLink to='/dashboard/verification' className='btn hover:text-info font-semibold uppercase'><FiUserCheck></FiUserCheck>Be a Fund Raiser</NavLink>

                <NavLink to='/dashboard/donated' className='btn hover:text-info font-semibold uppercase'><FiUserCheck></FiUserCheck>Donation History</NavLink>

                <NavLink to='/dashboard/paymenthistory' className='btn hover:text-info font-semibold uppercase'><FiCreditCard></FiCreditCard>Payment History</NavLink>
            </>
        }
        {
            isInstructor?.role === 'verified' &&
            <>
                <NavLink to='/dashboard/requestfund' className='btn hover:text-info font-semibold uppercase'><FiMessageSquare></FiMessageSquare>Request for Fund</NavLink>

                <NavLink to='/dashboard/raisedfund' className='btn hover:text-info font-semibold uppercase'><FiCalendar></FiCalendar>My Raised Fund</NavLink>
            </>
        }
        {
            isAdmin?.role === 'admin' &&
            <>
                <NavLink to='/dashboard/admin/manageUsers' className='btn hover:text-info font-semibold uppercase'><AiOutlineUser></AiOutlineUser>Manage Users</NavLink>

                <NavLink to='/dashboard/admin/manageverification' className='btn hover:text-info font-semibold uppercase'><AiOutlineUser></AiOutlineUser>Manage Verification</NavLink>

                <NavLink to='/dashboard/admin/managerequestedfund' className='btn hover:text-info font-semibold uppercase'><FiFolder></FiFolder>Manage Fund Request</NavLink>

            </>
        }
    </>

    return (
        <section className="flex gap-6">
            <div className="bg-slate-700 min-h-screen w-80 text-gray-100 px-4">
                <div className="flex gap-x-4 justify-center items-center mt-20">
                    {/* <a className=" normal-case text-xl">
                        <img src="https://i.ibb.co/ynwZBxh/logo.png"
                            className="w-10 inline" />
                    </a> */}
                    <p className='md:text-2xl ml-2 uppercase font-semibold'>
                        <span className='text-[#FDBE33]'>E</span>
                        <span className='text-white'>asy</span>
                        <span className='text-[#ffc446]'> F</span>
                        <span className='text-white'>und</span>
                    </p>
                </div>

                <div className="mt-10 flex flex-col gap-4 relative">
                    {navItems}
                </div>
            </div>
            <div className="w-full">
                <Outlet></Outlet>
            </div>

        </section>
    );
};

export default DashboardSidebar;