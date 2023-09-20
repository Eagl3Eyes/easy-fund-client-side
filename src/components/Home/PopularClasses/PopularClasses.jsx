import React from 'react';
import './PopularClasses.css';
import { Link } from 'react-router-dom';
import Event1 from '../../../assets/event-1.png';
import Event2 from '../../../assets/event-2.png';
import { FaCalendarDays, FaClock, FaLocationDot } from "react-icons/fa6";


const PopularClasses = () => {
    return (
        <>
            <div class="event">
                <div class="justify-center items-center">
                    <div class="section-header text-center">
                        <p className='text-3xl md:text-5xl lg:text-5xl font-medium text-[#FDBE33]'>Upcoming Events</p>
                        <h2 className='text-3xl md:text-5xl lg:text-5xl font-semibold text-[#4a4c70] mt-4 mb-8'>Be ready for our upcoming charity events</h2>
                    </div>
                    <div class="grid md:grid-cols-2 gap-10 sm:px-0 md:px-10 lg:px-10 xl:px-10 2xl:px-52">
                        <div>
                            <div class="event-item">
                                <img src={Event1} alt="Image" />
                                <div class="event-content">
                                    <div class="event-meta">
                                        <p className='flex items-center gap-2'><FaCalendarDays />01-Sep-23</p>
                                        <p className='flex items-center gap-2'><FaClock />08:00 - 10:00</p>
                                        <p className='flex items-center gap-2'><FaLocationDot />Dhaka</p>
                                    </div>
                                    <div class="event-text">
                                        <h3>Educational Support for Less Privileged Children
                                        </h3>
                                        <p>Donate money for educational support to children of Korail Slum and other nearby areas. Our organization strives to help children who are not getting their education.</p>
                                        <Link to="/donatenow" className="btn bg-slate-300 text-black mt-2 me-3 my-2">Join Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="event-item">
                                <img src={Event2} alt="Image" />
                                <div class="event-content">
                                    <div class="event-meta">
                                        <p className='flex items-center gap-2'><FaCalendarDays />10-Sep-23</p>
                                        <p className='flex items-center gap-2'><FaClock />10:00 - 13:00</p>
                                        <p className='flex items-center gap-2'><FaLocationDot />Khulna</p>
                                    </div>
                                    <div class="event-text">
                                        <h3>Funds for New School Building</h3>
                                        <p>Donate money for a new school building in Deluti, a remote village in Khulna. The old school was damage by floods and storms and now the children are doing classes in dilapidated building which is not safe for them.</p>
                                        <Link to="/donatenow" className="btn bg-slate-300 text-black mt-2 me-3 my-2">Join Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div>
                <div className="featured-cover bg-fixed text-white my-20">
                    <div className="md:flex justify-center items-center bg-black bg-opacity-40 md:px-44 pt-22">
                        <div className='mt-24 mb-24'>
                            <div className='items-center text-center'>
                                <h3 className='text-3xl md:text-5xl lg:text-5xl font-medium text-[#FDBE33]'>Donate Now</h3>
                                <h2 className='text-3xl md:text-5xl lg:text-5xl font-semibold'>Let's donate to needy people for better lives</h2>
                                <p className='mt-2 font-semibold'>Transform lives, support causes and create positive change. Contribute money through verified <br /> sources to make someone's live better. Your generous donation can make a difference.</p>

                                <Link to="/donatenow" className="btn btn-danger me-3 my-2">Donate Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularClasses;