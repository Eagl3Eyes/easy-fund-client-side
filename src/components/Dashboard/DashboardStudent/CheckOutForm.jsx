import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';




const CheckOutForm = ({ price, lectureId, lecture }) => {
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
            console.log('error', error)
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
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
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
                    console.log(res.data);
                    if (res.data) {
                        // display confirm

                        axiosSecure.patch(`/classes-cart/${lecture._id}`)
                            .then(res => {
                                if (res.data) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Payment successfully',
                                    })
                                    navigate('/dashboard/studentClasses')
                                }
                            })

                    }
                })
        }


    }



    return (
        <>
            <form className="w-2/3 m-8  mx-auto" onSubmit={handleSubmit}>
                <CardElement
                    options={{
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
                    <input value="Pay" className="btn flex px-20 mt-4 text-white bg-green-500 hover:bg-green-600" type="submit" disabled={!stripe || !clientSecret || processing} />
                </div>

            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
        </>
    );
};

export default CheckOutForm;