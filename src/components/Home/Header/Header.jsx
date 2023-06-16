import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className="relative overflow-hidden">
                        <img
                            style={{ height: "450px", objectFit: "cover" }}
                            className="w-full object-cover"
                            src="https://i.ibb.co/2PMM7fw/1420x800-2-DG-110.webp"
                            alt="Image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <div className="text-center text-white">
                                <h2 className="md:text-5xl text-2xl font-bold uppercase text-shadow mb-10">
                                    <p>Welcome to our ARTISTIC VENTURES</p>
                                </h2>
                                <p className="mx-auto md:text-lg w-4/6">
                                    <p className=' fs-6 col-lg-5 fw-semibold'>We have professional
                                        <span style={{ color: 'red', fontWeight: 'bold' }}>
                                            {/* Style will be inherited from the parent element */}
                                            <Typewriter
                                                words={[' Analyst', ' Teacher', ' Designer', ' Artist!']}
                                                loop={5}
                                                cursor
                                                cursorStyle='_'
                                                typeSpeed={70}
                                                deleteSpeed={50}
                                                delaySpeed={1000}
                                            />
                                        </span>
                                    </p>

                                    <div className='mt-3'>
                                        <Link to="/classes" className="btn btn-danger me-3 mb-2">Join Our Class</Link>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative overflow-hidden">
                        <img
                            style={{ height: "450px", objectFit: "cover" }}
                            className="w-full object-cover"
                            src="https://i.ibb.co/DRQW414/1420x800-2-DG-40.webp"
                            alt="Image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <div className="text-center text-white">
                                <h2 className="md:text-5xl text-2xl font-bold  text-shadow mb-10">
                                    <p>Welcome to our ARTISTIC VENTURES</p>
                                </h2>
                                <p className="mx-auto md:text-lg w-4/6">
                                    <p className=' fs-6 col-lg-5 fw-semibold'>We have professional
                                        <span style={{ color: 'red', fontWeight: 'bold' }}>
                                            {/* Style will be inherited from the parent element */}
                                            <Typewriter
                                                words={[' Analyst', ' Teacher', ' Designer', ' Artist!']}
                                                loop={5}
                                                cursor
                                                cursorStyle='_'
                                                typeSpeed={70}
                                                deleteSpeed={50}
                                                delaySpeed={1000}
                                            />
                                        </span>
                                    </p>

                                    <div className='mt-3'>=
                                        <Link to="/classes" className="btn btn-danger me-3 mb-2">Join Our Class</Link>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative overflow-hidden">
                        <img
                            style={{ height: "450px", objectFit: "cover" }}
                            className="w-full object-cover"
                            src="https://i.ibb.co/ZV5Kbvw/1420x800-2-DG-10.jpg"
                            alt="Image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-50"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <div className="text-center text-white">
                                <h2 className="md:text-5xl text-2xl font-bold  text-shadow mb-10">
                                    <p>Welcome to our ARTISTIC VENTURES</p>
                                </h2>
                                <p className="mx-auto md:text-lg w-4/6">
                                    <p className=' fs-6 col-lg-5 fw-semibold'>We have professional
                                        <span style={{ color: 'red', fontWeight: 'bold' }}>
                                            {/* Style will be inherited from the parent element */}
                                            <Typewriter
                                                words={[' Analyst', ' Teacher', ' Designer', ' Artist!']}
                                                loop={5}
                                                cursor
                                                cursorStyle='_'
                                                typeSpeed={70}
                                                deleteSpeed={50}
                                                delaySpeed={1000}
                                            />
                                        </span>
                                    </p>

                                    <div className='mt-3'>
                                        <Link to="/classes" className="btn btn-danger me-3 mb-2">Join Our Class</Link>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Header;