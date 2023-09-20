import React, { useContext, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Donate.css';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProviders';

import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import img1 from '../../assets/event-22.jpg'
import img2 from '../../assets/blog-1.jpg'
import { TbCurrencyTaka } from 'react-icons/tb';



const DonateNowDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const donate = useLoaderData();
    const { user } = useContext(AuthContext);


    const onInit = () => {
        console.log('lightGallery has been initialized');
    };


    const addToCart = (donate) => {
        if (!user) {
            Swal.fire({
                title: 'You have to Login first',
                showCancelButton: true,
                confirmButtonText: 'Login',
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    navigate('/login');
                    return;
                }
            })
        }
    }

    return (
        <section>
            <div >
                <div className="mx-auto text-center">
                    <div>
                        <img
                            style={{ height: "450px", objectFit: "cover" }}
                            className="w-full object-cover"
                            src={donate?.image}
                            alt="chef image"
                        />
                    </div>
                    <div className="md:w-10/12 mx-auto mb-10">
                        <h2 className="text-4xl my-9 font-bold">
                            {donate?.name}
                        </h2>

                        <p className="font-semibold text-gray-700">
                            {donate?.description}
                        </p>
                        <p className="font-bold mt-4">
                            Goal: {donate?.availableSeats}Tk
                        </p>
                        <p className="font-bold mt-4">
                            Fund Raised: {donate?.price * donate?.enrolled}Tk
                        </p>
                    </div>
                </div>
                <div>

                    <p className="mt-3 text-center my-6 font-semibold text-gray-900">I would like to give:</p>
                    <div className="flex justify-center mt-5 gap-2 px-12">
                        <div className="w-40">
                            <input className="appearance-none " type="radio" name="money" id="money1" />
                            <label for="money1" className="h-10 text-gray-700 font-semibold text-sm cursor-pointer transition-all justify-center items-center w-full border-2 flex ">100Tk</label>

                        </div>
                        <div className="w-40">
                            <input className="appearance-none " type="radio" name="money" id="money2" />
                            <label for="money2" class="h-10 text-gray-700 font-semibold cursor-pointer transition-all text-sm justify-center items-center w-full border-2 flex ">500Tk</label>

                        </div>
                        <div className="w-40">
                            <input className="appearance-none " type="radio" name="money" id="money3" />
                            <label for="money3" className="h-10 text-gray-700 font-semibold text-sm cursor-pointer transition-all justify-center items-center w-full border-2 flex ">1000Tk</label>

                        </div>
                        <div className="w-40">
                            <input className="appearance-none " type="radio" name="money" id="money4" />
                            <label for="money4" className="h-10 text-gray-700 font-semibold cursor-pointer transition-all text-sm justify-center items-center w-full border-2 flex ">Other</label>
                            {/* <input for="money4" type="number" name="" id="" className="appearance-none h-10 text-gray-700 font-semibold cursor-pointer transition-all text-sm justify-center items-center w-full border-2 flex " /> */}

                        </div>
                    </div>

                    <div className="my-4 flex justify-center">
                        {/* <button className="btn uppercase text-white bg-slate-700 rounded-md hover:bg-slate-600">Donate</button> */}
                        <Link to={{
                            pathname: `/dashboard/selecteddonation/pay/${donate._id}`
                        }}
                            onClick={() => addToCart(donate)}
                            className="btn uppercase text-white bg-slate-700 rounded-md hover:bg-slate-600"
                        >
                            Donate
                        </Link>
                    </div>
                </div>
            </div>




            <div className='grid grid-cols-3 gap-6 mt-12'>
                <img alt="img1" src={img1} />
                <img alt="img2" src={img2} />
                <img alt="img1" src={img1} />
                <img alt="img2" src={img2} />
                <img alt="img1" src={img1} />
                <img alt="img2" src={img2} />
            </div>


        </section>
    );
};

export default DonateNowDetails;