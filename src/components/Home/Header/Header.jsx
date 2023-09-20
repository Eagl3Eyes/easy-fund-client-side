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
                            src="https://i.ibb.co/Z6F8Cgn/Use-Case-Ask-Your-Donors-to-Help-You-Fund-Raise-with-Text-Messaging-Featured-1024x412.png"
                            alt="Image"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <div className="text-center text-white">
                                <h2 className="md:text-5xl text-2xl font-bold uppercase text-shadow mb-10">
                                    <p>Welcome to our <span className="text-[#FDBE33]">E</span>asy <span className="text-[#FDBE33]">F</span>und</p>
                                    {/* <p>Help, Donate & Fundraise</p> */}
                                </h2>
                                <p className="mx-auto md:text-lg w-4/6">
                                    <p className=' fs-6 col-lg-5 fw-semibold'>You Can
                                        <span style={{ color: '#FDBE33', fontWeight: 'bold' }}>
                                            {/* Style will be inherited from the parent element */}
                                            <Typewriter
                                                words={[' Volunteer', ' Donate', ' Fund Raise!!']}
                                                loop={5}
                                                cursor
                                                cursorStyle='_'
                                                typeSpeed={70}
                                                deleteSpeed={50}
                                                delaySpeed={1000}
                                            />
                                        </span>
                                    </p>

                                    <div className='mt-12'>
                                        <Link to="/donatenow" className="btn btn-danger me-3 mb-2">Donate Now</Link>
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
                            src="https://i.ibb.co/1mKRsDY/money-small.png"
                            alt="Image"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <div className="text-center text-white">
                                <h2 className="md:text-5xl text-2xl font-bold uppercase text-shadow mb-10">
                                <p>Welcome to our <span className="text-[#FDBE33]">E</span>asy <span className="text-[#FDBE33]">F</span>und</p>
                                </h2>
                                <p className="mx-auto md:text-lg w-4/6">
                                    <p className=' fs-6 col-lg-5 fw-semibold'>You can
                                        <span style={{ color: '#FDBE33', fontWeight: 'bold' }}>
                                            {/* Style will be inherited from the parent element */}
                                            <Typewriter
                                                words={[' Volunteer', ' Donate', ' Fund Raise!!']}
                                                loop={5}
                                                cursor
                                                cursorStyle='_'
                                                typeSpeed={70}
                                                deleteSpeed={50}
                                                delaySpeed={1000}
                                            />
                                        </span>
                                    </p>

                                    <div className='mt-12'>
                                        <Link to="/donatenow" className="btn btn-danger me-3 mb-2">Donate Now</Link>
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