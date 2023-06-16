import React from "react";
import { NavLink } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart, FiCreditCard, FiCalendar } from "react-icons/fi";
import useStudent from "../../../hooks/useStudent";
import useInstructor from "../../../hooks/useInstructor";
import useAdmin from "../../../hooks/useAdmin";
import { Outlet } from "react-router-dom";




const DashboardSidebar = () => {
    const [isStudent] = useStudent();
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();


    const navItems = <>
        <NavLink to='/' className='btn hover:text-info font-semibold uppercase'><MdOutlineDashboard></MdOutlineDashboard>Home</NavLink>
        <NavLink to='/dashboard' className='btn hover:text-info font-semibold uppercase'><TbReportAnalytics></TbReportAnalytics>Dashboard Home</NavLink>

        {
            isStudent &&
            <>
                <NavLink to='/dashboard/studentClasses' className='btn hover:text-info font-semibold uppercase'><FiShoppingCart></FiShoppingCart>My Selected Class</NavLink>

                <NavLink to='/dashboard/studentEnrolledClasses' className='btn hover:text-info font-semibold uppercase'><FiFolder></FiFolder>My Enrolled Classes</NavLink>

                <NavLink to='/dashboard/studentPaymentHistory' className='btn hover:text-info font-semibold uppercase'><FiCreditCard></FiCreditCard>Payment History</NavLink>
            </>
        }
        {
            isInstructor?.role === 'instructor' &&
            <>
                <NavLink to='/dashboard/instructorAddNewClass' className='btn hover:text-info font-semibold uppercase'><FiMessageSquare></FiMessageSquare>Add a Class</NavLink>

                <NavLink to='/dashboard/instructorsClasses' className='btn hover:text-info font-semibold uppercase'><FiCalendar></FiCalendar>My Classes</NavLink>
            </>
        }
        {
            isAdmin?.role === 'admin' &&
            <>
                <NavLink to='/dashboard/admin/manageUsers' className='btn hover:text-info font-semibold uppercase'><AiOutlineUser></AiOutlineUser>Manage Users</NavLink>

                <NavLink to='/dashboard/admin/manageClasses' className='btn hover:text-info font-semibold uppercase'><FiFolder></FiFolder>Manage Classes</NavLink>
            </>
        }
    </>

    return (
        <section className="flex gap-6">
            <div className="bg-[#081A51] min-h-screen w-72 text-gray-100 px-4">
                <div className="flex gap-x-4 items-center mt-20">
                    <a className=" normal-case text-xl">
                        <img src="https://i.ibb.co/ynwZBxh/logo.png"
                            className="w-10 inline" />
                    </a>
                    <h1 className="text-white text-xl">
                        Art & Craft School
                    </h1>
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