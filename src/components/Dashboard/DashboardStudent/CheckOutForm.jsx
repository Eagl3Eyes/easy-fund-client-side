import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';
import { motion } from 'framer-motion';




const CheckOutForm = ({ price, lectureId, lecture }) => {
    useTitle('Check Out')

    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(lecture);

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price: parseInt(price) })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])
    // console.log(clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('error', error)
            setCardError(error.message);
            Swal.fire(
                error.message,
                'error'
            )
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            // console.log(confirmError);
        }

        // console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                _id: lectureId,
                lecture,
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                status: 'service pending',
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    // console.log(res.data);
                    if (res.data) {
                        // display confirm

                        axiosSecure.patch(`/classes-cart/${lecture._id}`)
                            .then(res => {
                                if (res.data) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Payment successfully',
                                    })
                                    navigate('/dashboard/selecteddonation')
                                }
                            })

                    }
                })
        }


    }



    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth }}
        >

            <div className="container mx-auto p4-10">
                <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
                    <div className="md:flex">
                        <div className="w-full px-6 py-8 md:p-8">
                            {/* <h2 class="text-2xl font-bold text-gray-800">Checkout</h2> */}
                            <p className="mt-4 text-gray-600">Please fill out the form below to complete your donation.</p>
                            <form className="mt-6">
                                <div className="mb-6">
                                    <label className="block text-gray-800 font-bold mb-2" for="name">
                                        Name
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-800 font-bold mb-2" for="email">
                                        Email
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@example.com" />
                                </div>
                                <div class="mb-6">
                                    <label className="block text-gray-800 font-bold mb-2" for="number">
                                        Phone Number
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="number" type="text" placeholder="01345678901" />
                                </div>
                                <div class="mb-6">
                                    <label className="block text-gray-800 font-bold mb-2" for="address">
                                        Address
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="House #39, Road #37, Gulshan-2" />
                                </div>

                                <div class="mb-6">
                                    <label className="block text-gray-800 font-bold mb-2" for="zip">
                                        Zip Code
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zip" type="number" placeholder="1212" />
                                </div>
                                <div class="mb-6">
                                    <label className="block text-gray-800 font-bold mb-2" for="card_number">
                                        Enter Amount
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="card_number" type="number" placeholder="500" />
                                </div>



                                {/* <div className="mb-6">
                                    <label className="block text-gray-800 font-bold mb-2" for="card_number">
                                        Card Number
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="card_number" type="text" placeholder="**** **** **** 1234" />
                                </div> */}
                                {/* <div className="mb-6">
                                    <label className="block text-gray-800 font-bold mb-2" for="expiration_date">
                                        Expiration Date
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="expiration_date" type="text" placeholder="MM / YY" />
                                </div> */}
                                {/* <div className="mb-6">
                                    <label className="block text-gray-800 font-bold mb-2" for="cvv">
                                        CVV
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cvv" type="text" placeholder="***" />
                                </div> */}
                                {/* <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Submit
                                </button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <form className="w-1/3 m-8  mx-auto" onSubmit={handleSubmit}>

                <CardElement
                    options={
                        {
                            style: {
                                base: {
                                    fontSize: '20px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                />

                <div className="grid justify-items-center mt-10">
                    {/* <input value="Pay" className="btn flex px-20 mt-4 text-white bg-green-500 hover:bg-green-600" type="submit" disabled={!stripe || !clientSecret || processing} /> */}
                    <input value="Pay" className="btn flex px-20 mt-4 text-white bg-green-500 hover:bg-green-600" type="submit"  />
                </div>

            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
        </motion.div>
    );
};

export default CheckOutForm;