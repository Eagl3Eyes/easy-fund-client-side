import axios from 'axios';
import React from 'react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';
import { motion } from 'framer-motion';



const AddNewClass = () => {
    useTitle('Request For Fund')

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(false);

    const onSubmit = (data) => {
        // Logic for creating a class
        setDisabled(true);

        const { name, image, instructor, availableSeats, price, email, description } = data;

        const lectureData = {
            email,
            name,
            image,
            instructor,
            description,
            availableSeats: parseInt(availableSeats),
            price: parseInt(price),
            status: 'pending',
            enrolled: 0
        };

        axios.post('https://crowd-funding-server.vercel.app/classes', lectureData)
            .then(res => {
                // console.log(res);
                if (res.data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Fund Request Successful!!',
                        footer: 'Wait until Admin Approve!!',
                        text: 'Fund will be pending',
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
                <h2 className='text-3xl text-center uppercase'>Request for Fund</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-white rounded shadow-md">


                    <label className="mb-2 font-bold" htmlFor="name">Event Name</label>
                    <div className="mb-4 shadow-lg">
                        <input {...register('name', { required: true })} className="w-full px-4 py-2 border rounded" />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </div>

                    <label className="block mb-2 font-bold" htmlFor="image">Event Image</label>
                    <div className="mb-4 shadow-lg">
                        <input {...register('image', { required: true })} className="w-full px-4 py-2 border rounded" />
                        {errors.image && <span className="text-red-500">This field is required</span>}
                    </div>

                    <label className="block mb-2 font-bold" htmlFor="instructor">Fund Raiser's Name</label>
                    <div className="mb-4 shadow-lg">
                        <input value={user?.displayName} {...register('instructor',)} className="w-full px-4 py-2 border rounded" />
                    </div>

                    <label className="block mb-2 font-bold" htmlFor="instructor">Fund Raiser's Email</label>
                    <div className="mb-4 shadow-lg">
                        <input value={user?.email} {...register('email',)} className="w-full px-4 py-2 border rounded" />
                    </div>

                    <label className="block mb-2 font-bold" htmlFor="availableSeats">Goal(Tk)</label>
                    <div className="mb-4 shadow-lg">
                        <input type="number" {...register('availableSeats', { required: true })} className="w-full px-4 py-2 border rounded" />
                        {errors.availableSeats && <span className="text-red-500">This field is required</span>}
                    </div>

                    <label className="block mb-2 font-bold" htmlFor="price">Donation Money</label>
                    <div className="mb-4 shadow-lg">
                        <input type="number" step="0.01" {...register('price', { required: true })} className="w-full px-4 py-2 border rounded" />
                        {errors.price && <span className="text-red-500">This field is required</span>}
                    </div>

                    <label className="block mb-2 font-bold" htmlFor="description">Event Description</label>
                    <div className="mb-4 shadow-lg">
                        <input type="text" step="0.01" {...register('description', { required: true })} className="w-full px-4 py-2 border rounded" />
                        {errors.description && <span className="text-red-500">This field is required</span>}
                    </div>

                    <button type="submit" disabled={disabled} className="btn text-white  bg-green-500 hover:bg-green-600">Add</button>
                </form>
            </section>
        </motion.div>
    );
};

export default AddNewClass;