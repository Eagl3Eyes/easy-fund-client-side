import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useTitle from '../../../hooks/useTitle';
import { motion } from 'framer-motion';

const PaidClasses = () => {
    useTitle('Donated')


    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        axiosSecure(`/payment-details/${user.email}`)
            .then(res => setData(res.data));
    }, []);
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth }}
        >
            <section className='gap-10 mx-40 my-20'>
                <h3 className='text-3xl font-semibold text-center uppercase mb-10'>My Donation History</h3>
                {
                    data?.map(item =>
                        <div key={item._id} className="flex bg-base-100 shadow-2xl w-full h-[200px] rounded-lg">

                            <figure>
                                <img src={item?.lecture?.image} className="w-64 h-full rounded-s-lg" />
                            </figure>

                            <div className="ms-10 flex-grow my-auto">
                                <h2 className="text-2xl font-bold">{item?.lecture?.name}</h2>
                                <p className='font-bold'>Raised By: {item?.lecture?.instructor}</p>
                                <p className='font-bold'>Donated: {item?.lecture?.price} Tk</p>
                            </div>

                            <div className='flex items-center mr-4'>
                                <button className='btn bg-slate-300'>View Details</button>
                            </div>
                        </div>

                    )
                }
            </section>
        </motion.div>
    );
};

export default PaidClasses;