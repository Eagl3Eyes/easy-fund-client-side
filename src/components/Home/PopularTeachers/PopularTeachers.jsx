import React from 'react';
import './PopularTeachers.css';
import { FaHome } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { LuHeartHandshake } from "react-icons/lu";
import { TbCurrencyTaka } from "react-icons/tb";
import { BsBoxFill, BsBox2HeartFill } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { BiHealth } from "react-icons/bi";
import { HiRocketLaunch } from "react-icons/hi2";
import { FaHandHoldingHeart } from "react-icons/fa";
import { RiRefund2Line } from "react-icons/ri";


const PopularTeachers = () => {
    return (
        <>
            <div className="service flex flex-col items-center">
                <div className="container">
                    <div className="section-header text-center mb-10">
                        <p className='text-3xl md:text-5xl lg:text-5xl text-[#FDBE33]'>What We Do?</p>
                        <h2 className='text-3xl md:text-5xl lg:text-5xl font-semibold text-[#4a4c70]'>We believe that we can save more lifes with you</h2>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 px-3 gap-4'>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item items-center">
                                <div className="text-6xl text-[#FDBE33]">
                                    <HiRocketLaunch />
                                </div>
                                <div className="service-text">
                                    <h3>Startup</h3>
                                    <p>Help startups by donating or create one for your own startup.</p>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="service-item items-center">
                                <div className="text-6xl text-[#FDBE33]">
                                    <FaHandHoldingHeart />
                                </div>
                                <div className="service-text">
                                    <h3>Charitable Trust</h3>
                                    <p>Contribute to reputable charities, making a difference for those in need through your gracious donations.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="service-item items-center">
                                <div className="text-6xl text-[#FDBE33]">
                                    <BiHealth />
                                </div>
                                <div className="service-text">
                                    <h3>Health Care</h3>
                                    <p>Create a fund or donate to people in need of health care.</p>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div className="service-item items-center">
                                <div className="text-6xl text-[#FDBE33]">
                                    <GiTeacher />
                                </div>
                                <div className="service-text">
                                    <h3>Education</h3>
                                    <p>Make children's life brighter by donating or creating funds for their education.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="service-item items-center">
                                <div className="text-6xl text-[#FDBE33]">
                                    <RiRefund2Line />
                                </div>
                                <div className="service-text">
                                    <h3>Relief Fund</h3>
                                    <p>Collect funds for families affected by natural or manmade disasters
                                        .</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="service-item items-center">
                                <div className="text-6xl text-[#FDBE33]">
                                    <FaPeopleRoof />
                                </div>
                                <div className="service-text">
                                    <h3>Social Care</h3>
                                    <p>Help change people's lives by donating or creating funds for less fortunate people</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Banner */}


            <div className="featured-item bg-fixed text-white my-20">
                <div className="md:flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 justify-center items-center bg-black bg-opacity-40 lg:px-36 lg:pt-22 gap-12 sm:gap-12 md:gap-12 lg:gap-16 xl:gap-32">
                    
                    <div className='sm:mt-36 mt-12 sm:mb-36 lg:mt-36 lg:mb-36 flex justify-center items-center'>
                        <div className="lg:col-span-3 md:col-span-6">
                            <div className='flex items-center gap-6'>
                                <div className='text-5xl text-[#FDBE33]'>
                                    <FaHome></FaHome>
                                </div>
                                <div className='font-bold text-4xl'>
                                    <h3>50+</h3>
                                    <p>District</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sm:mt-36 sm:mb-36 lg:mt-36 lg:mb-36 flex justify-center items-center'>
                        <div className="lg:col-span-3 md:col-span-6">
                            <div className='flex items-center gap-6'>
                                <div className='text-5xl text-[#FDBE33]'>
                                    <LuHeartHandshake></LuHeartHandshake>
                                </div>
                                <div className='font-bold text-4xl'>
                                    <h3>400+</h3>
                                    <p>Volunteers</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='sm:mt-36 sm:mb-36 lg:mt-36 lg:mb-36 flex justify-center items-center'>
                        <div className="lg:col-span-3 md:col-span-6">
                            <div className='flex items-center gap-6'>
                                <div className='text-5xl text-[#FDBE33]'>
                                    <BsBox2HeartFill></BsBox2HeartFill>
                                </div>
                                <div className='font-bold text-4xl'>
                                    <div className='flex'>
                                        <div>
                                            <h3>100000</h3>
                                        </div>
                                        <div>
                                            <TbCurrencyTaka></TbCurrencyTaka>
                                        </div>
                                    </div>
                                    <p>Our Goal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-12 sm:mt-36 sm:mb-36 lg:mt-36 lg:mb-36 flex justify-center items-center'>
                        <div className="lg:col-span-3 md:col-span-6">
                            <div className='flex items-center gap-6'>
                                <div className='text-5xl text-[#FDBE33]'>
                                    <BsBoxFill></BsBoxFill>
                                </div>
                                <div className='font-bold text-4xl'>
                                    <div className='flex'>
                                        <div>
                                            <h3>45000</h3>
                                        </div>
                                        <div>
                                            <TbCurrencyTaka></TbCurrencyTaka>
                                        </div>
                                    </div>
                                    <p>Raised</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );

};

export default PopularTeachers;