import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import axios from 'axios';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';
import { motion } from 'framer-motion';

const ManageVerification = () => {
    useTitle('Manage Verification')

    const [allVerification, setAllVerification] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [status, setStatus] = useState(null);
    const [axiosSecure] = useAxiosSecure();

    
    useEffect(() => {
        axiosSecure.get('/all-verification-data')
            .then(res => setAllVerification(res.data))
    }, [])

    const openModal = (item, status) => {
        setSelectedItem(item); // Set the selected item when the modal is opened
        // console.log(status);
        setStatus(status);
        window.my_modal_1.showModal(); // Show the modal
    };

    const handleStatusChange = (e) => {
        e.preventDefault();
        const feedback = e.target.feedback.value;

        axios.patch(`https://crowd-funding-server.vercel.app/all-verification-data?id=${selectedItem._id}&feedback=${feedback}&status=${status}`)
            .then(res => {
                // console.log(res.data);
                if (res.data.acknowledged) {
                    axiosSecure.get('/all-verification-data')
                        .then(res => setAllVerification(res.data))
                    Swal.fire('Verification Updated Successfully')
                }
            })

    }


    return (
        <motion.section
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth }}
        >
            <h3 className="text-2xl font-bold mb-5 text-center uppercase mt-20">Manage Verification</h3>
            <div className='flex flex-wrap gap-10 mx-40 my-20'>
                {
                    allVerification?.map(item => <div key={item._id} className="flex bg-base-100 shadow-2xl w-full rounded-lg">
                        <figure><img src={item.image} className="w-64 h-64 rounded-s-lg object-fill" /></figure>
                        <div className="ms-10 flex-grow my-auto p-y-2">
                            <h2 className="text-2xl font-bold">{item.name}</h2>
                            <p className='font-bold'>Email: {item?.email}</p>
                            <p className='font-bold'>National ID/ Passport Number: {item.idCardNumber}</p>
                            <p className='font-bold'>Phone Number: {item.phoneNumber}</p>
                            <p className='font-bold'>Status: {item.status}</p>
                        </div>

                        <button disabled={item.status === 'approved' || item.status === 'deny'} className="btn my-auto text-white bg-green-500 hover:bg-green-600" onClick={() => openModal(item, 'approved')}>Approved</button>

                        <button disabled={item.status === 'approved' || item.status === 'deny'} className="btn text-white bg-red-500 hover:bg-red-600 mx-3 my-auto" onClick={() => openModal(item, 'deny')}>Deny</button>
                    </div>)
                }
            </div>


            <dialog id="my_modal_1" className="modal">
                <form onSubmit={handleStatusChange} method="dialog" className="modal-box w-11/12 max-w-5xl">
                    {/* ...your existing JSX code */}
                    {selectedItem && (
                        <div className='h-auto'>
                            <p className='text-center text-2xl mb-5 font-semibold'>Give Your Feedback</p>
                            <textarea name="feedback" id="" className='w-11/12 mx-auto block p-4' cols="50" rows="10"></textarea>
                            <button className='btn block ms-auto mt-5 text-white bg-green-500 hover:bg-green-600'>Submit</button>
                        </div>
                    )}
                    {/* ...your existing JSX code */}
                </form>
            </dialog>
        </motion.section>
    );
};

export default ManageVerification;