import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import useTitle from '../../../hooks/useTitle';
import { motion } from 'framer-motion';

const DashboardHome = () => {
    useTitle('Dashboard Home')

    const { user } = useContext(AuthContext);
    // console.log(user);

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth }}
        >
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div>
                        <div className="avatar">
                            <div className="w-20 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <div>
                            <h3 className='text-3xl mt-4 mb-10'>{user?.displayName}</h3>
                            <h3 className='text-3xl mt-4 mb-10'>{user?.email}</h3>
                        </div>
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Dashboard</h1>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default DashboardHome;