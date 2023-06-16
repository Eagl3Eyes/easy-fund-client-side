import React, { useState } from 'react';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useTitle from '../../../hooks/useTitle';

const Payment = () => {
    // useTitle('Payment')

    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure();
    const [price, setPrice] = useState(null);
    const [lectureId, setLectureId] = useState(null);
    const [lectureId2, setLectureId2] = useState(null);


    axiosSecure(`http://localhost:5000/classes-cart/${id}`)
        .then(res => {
            setPrice(res.data?.lecture?.price);
            setLectureId2(res.data?.lecture);
            setLectureId(res.data?._id);
        })


    return (
        <section className='mt-20 mx-40 min-h-screen'>
            <h3 className='text-3xl font-semibold text-center uppercase'>Please Pay Here</h3>
            <Elements stripe={stripePromise}>
                <CheckOutForm
                    id={id}
                    lecture={lectureId2}
                    lectureId={lectureId}
                    price={price}
                />
            </Elements>
        </section>
    );
};

export default Payment;