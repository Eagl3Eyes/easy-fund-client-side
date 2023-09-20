import axios from 'axios';
import React from 'react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';
import { motion } from 'framer-motion';



const Verification = () => {
    useTitle('Verification')

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(false);

    const onSubmit = (data) => {
        // Logic for creating a class
        setDisabled(true);

        const { name, image, idCardNumber, phoneNumber, email } = data;

        const verificationData = {
            email,
            name,
            image,
            idCardNumber,
            phoneNumber,
            status: 'pending'
        };

        axios.post('https://crowd-funding-server.vercel.app/verification', verificationData)
            .then(res => {
                // console.log(res);
                if (res.data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successful',
                        footer: 'Wait until Admin Approve!!',
                        text: 'Verification Pending',
                    })
                    setDisabled(false);
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: err.message
                })
            })
    };


    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth }}
        >
            <section className='mx-72 min-h-screen my-20'>
                <h2 className='text-3xl text-center uppercase'>Want to be a fund raiser? Please fill this form!!</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-white rounded shadow-md">


                    <label className="mb-2 font-bold" htmlFor="name">Full Name</label>
                    <div className="mb-4 shadow-lg">
                        <input {...register('name', { required: true })} className="w-full px-4 py-2 border rounded" />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </div>

                    <label className="block mb-2 font-bold" htmlFor="image">Photo</label>
                    <div className="mb-4 shadow-lg">
                        <input {...register('image', { required: true })} className="w-full px-4 py-2 border rounded" />
                        {errors.image && <span className="text-red-500">This field is required</span>}
                    </div>

                    <label className="block mb-2 font-bold" htmlFor="instructor">Your Email</label>
                    <div className="mb-4 shadow-lg">
                        <input value={user?.email} {...register('email',)} className="w-full px-4 py-2 border rounded" />
                    </div>

                    <label className="block mb-2 font-bold" htmlFor="idCardNumber">National ID/ Passport Number</label>
                    <div className="mb-4 shadow-lg">
                        <input type="number" {...register('idCardNumber', { required: true })} className="w-full px-4 py-2 border rounded" />
                        {errors.idCardNumber && <span className="text-red-500">This field is required</span>}
                    </div>

                    <label className="block mb-2 font-bold" htmlFor="phoneNumber">Phone Number</label>
                    <div className="mb-4 shadow-lg">
                        <input type="number" step="0.01" {...register('phoneNumber', { required: true })} className="w-full px-4 py-2 border rounded" />
                        {errors.phoneNumber && <span className="text-red-500">This field is required</span>}
                    </div>

                    <button type="submit" disabled={disabled} className="btn text-white  bg-green-500 hover:bg-green-600">Submit</button>
                </form>
            </section>
        </motion.div>
    );
};

export default Verification;