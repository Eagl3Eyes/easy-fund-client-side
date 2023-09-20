import React, { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useNavigate } from 'react-router-dom';
import { TbCurrencyTaka } from "react-icons/tb";
import axios from 'axios';

const DonateNowCard = ({ donate }) => {
    useTitle('Donate Now')
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        _id,
        email,
        name,
        image,
        instructor,
        availableSeats,
        price,
        status,
        enrolled,
        feedback
    } = donate;


    // const addToCart = (donate) => {
    //     if (!user) {
    //         Swal.fire({
    //             title: 'You have to Login first',
    //             showCancelButton: true,
    //             confirmButtonText: 'Login',
    //         }).then((result) => {
    //             /* Read more about isConfirmed, isDenied below */
    //             if (result.isConfirmed) {
    //                 navigate('/login');
    //                 return;
    //             }
    //         })
    //     }


    //     const lectureData = { donate, email: user.email }
    //     axios.post('https://crowd-funding-server.vercel.app/classes-cart', lectureData)
    //         .then(res => {
    //             if (res.data.acknowledged) {
    //                 navigate('/dashboard/selecteddonation/');
    //                 return;
    //             }
    //         })

    // }

    return (
        <div className="w-60 h-96 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl p-2">

            <img className="h-40 object-cover rounded-xl" src={image} alt="" />
            <div className="p-2">
                <h2 className="font-bold text-center text-lg mb-2">{name}</h2>
                <p className="text-sm font-bold text-center text-gray-700 mb-2">Raised By: {instructor}</p>
                {/* <p className="text-center mb-2">Price: ${lecture.price}</p> */}
                {/* <p className="text-center">Already Enrolled: {lecture.enrolled}</p> */}
                <p className="text-center font-bold flex text-gray-700 items-center justify-center">Fund Raised: {enrolled * price}<span className="text-xl"><TbCurrencyTaka /></span></p>
                {/* <p className="text-center mb-12">Available Seats: {lecture.availableSeats}</p> */}
                <p className="text-center font-bold text-gray-700 mb-12 flex items-center justify-center">Goal: {availableSeats}<span className="text-xl"><TbCurrencyTaka /></span></p>
            </div>
            <div className="grid justify-items-center">
                {/* <button onClick={() => addToCart(donate)} className="btn uppercase text-white bg-slate-700 rounded-md hover:bg-slate-600 absolute bottom-0 mb-2">Donate Now</button> */}

                <Link to={`/donatenow/${_id}`}>
                    <button onClick={() => addToCart()} className="btn uppercase text-white bg-slate-700 rounded-md hover:bg-slate-600 absolute inset-x-0 bottom-0">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default DonateNowCard;