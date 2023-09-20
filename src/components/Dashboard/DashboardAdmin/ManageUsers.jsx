import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import axios from 'axios';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';
import { motion } from 'framer-motion';

const ManageUsers = () => {
    useTitle('Manage Users')

    const [allUsers, setAllUsers] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        const x = axiosSecure.get(`https://crowd-funding-server.vercel.app/all-users-data`)
            .then(res => setAllUsers(res.data))
    }, [])

    const handleRoleUpdate = (role, email) => {
        // console.log(role, email);
        axios.patch(`https://crowd-funding-server.vercel.app/all-users-data/?email=${email}&role=${role}`)
            .then(res => {
                if (res.data.acknowledged) {
                    const x = axiosSecure.get(`https://crowd-funding-server.vercel.app/all-users-data`)
                        .then(res => setAllUsers(res.data))
                    Swal.fire('Role updated')
                }
            })
    }


    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth }}
        >
            <section className='mx-20 min-h-screen'>
                <h2 className='text-3xl text-center font-extrabold mb-10 uppercase mt-20'>Manage Users</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='font-semibold uppercase'>Name</th>
                                <th className='font-semibold uppercase'>Email</th>
                                <th className='font-semibold text-center uppercase'>Role</th>
                                <th className='font-semibold text-center uppercase'>Action</th>
                                <th className='font-semibold text-center uppercase'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers?.map(item =>
                                    <tr>
                                        <th>{item.name}</th>
                                        <td>{item.email}</td>
                                        <td className='text-center'>{item.role}</td>
                                        <td className='text-center'><button className='btn text-white bg-[#081A51] hover:bg-blue-900' disabled={item.role === 'admin'} onClick={() => handleRoleUpdate('admin', item.email)}>Make Admin</button></td>
                                        
                                        <td className='text-center'><button onClick={() => handleRoleUpdate('verified', item.email)} className='btn text-white bg-violet-600 hover:bg-violet-800' disabled={item.role === 'verified' || item.role === 'admin'}>Make Verified</button></td>
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

export default ManageUsers;