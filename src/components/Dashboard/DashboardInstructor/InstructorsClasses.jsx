import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useTitle from '../../../hooks/useTitle';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const InstructorsClasses = () => {
    useTitle('My Raised Fund')

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [instructorData, setInstructorData] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/classes-cart?email=${user.email}`)
            .then(res => setInstructorData(res.data))
    }, [])
    const enrolledStudents = instructorData.reduce((sum, item) => sum + (item.enrolled * item.price), 0)
    // console.log(instructorData);


    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth }}
        >
            <section className='min-h-screen mx-40 my-20'>
                <h2 className='text-3xl text-center mb-10 uppercase'>Total Fund Raised: {enrolledStudents}TK</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className='font-semibold text-center uppercase'>Event Name</th>
                                <th className='font-semibold text-center uppercase'>Total Paid</th>
                                {/* <th className='font-semibold text-center uppercase'>Price</th> */}
                                <th className='font-semibold text-center uppercase'>Total Fund Raised</th>
                                <th className='font-semibold text-center uppercase'>Status</th>
                                <th className='font-semibold text-center uppercase'>Feedback</th>
                                <th className='font-semibold text-center uppercase'>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                instructorData?.map((item, index) =>
                                    <tr key={item._id}>
                                        <th>{index + 1}</th>
                                        <td className='font-semibold text-center'>{item.name}</td>
                                        <td className='font-semibold text-center'>{item.enrolled}</td>
                                        {/* <td className='font-semibold text-center'>{item.price}</td> */}
                                        <td className='font-semibold text-center'>{item.price * item.enrolled}</td>
                                        <td className='font-semibold text-center'>{item.status}</td>
                                        <td className='font-semibold text-center'>{item.feedback}</td>
                                        <td className='font-semibold text-center'>
                                            <Link to="updatefund" className='btn text-white bg-green-500 hover:bg-green-600'>Update</Link>
                                            <Link to="withdraw" className='btn text-white bg-yellow-500 hover:bg-yellow-600'>Withdraw</Link>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </motion.div>
    );
};

export default InstructorsClasses;