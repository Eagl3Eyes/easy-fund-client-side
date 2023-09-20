import React from 'react';
import './Reviews.css';
import Blog1 from '../../../assets/blog-1.jpg';
import Blog2 from '../../../assets/blog-2.jpg';
import Blog3 from '../../../assets/blog-3.jpg';
import { FaUser, FaComments } from "react-icons/fa";

const Reviews = () => {
    return (
        <div>
            <div className="blog">
                <div className="justify-center items-center">
                    <div className="section-header text-center">
                        <p className='text-3xl md:text-5xl lg:text-5xl font-medium text-[#FDBE33]'>Our Blog</p>
                        <h2 className='text-3xl md:text-5xl lg:text-5xl font-semibold text-[#4a4c70] mt-4 mb-8'>Latest news & articles directly from our blog</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10 sm:px-0 md:px-0 lg:px-10 xl:px-48 text-center">
                        <div className="">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={Blog1} alt="Image" />
                                </div>
                                <div className="blog-text">
                                    <h3><a href="#">Aid Sylhet floods through your generous donations.</a></h3>
                                    <p>
                                        Each passing day, the rising Sylhet flood intensifies, leaving families desperate for essential relief assistance and support.
                                    </p>
                                </div>
                                <div className="blog-meta">
                                    <p className='flex items-center gap-2'><FaUser /><a href=""><span className='hover:text-[#FDBE33]'>Admin</span></a></p>
                                    <p className='flex items-center gap-2'><FaComments /><a href=""><span className='hover:text-[#FDBE33]'>15 Comments</span></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={Blog2} alt="Image" />
                                </div>
                                <div className="blog-text">
                                    <h3><a href="#">Relief Funds for Flood Affected in Chattogram</a></h3>
                                    <p>
                                        Funds for relief were gathered <br />to aid Chattogram after the devastating impact of the flood.
                                    </p>
                                </div>
                                <div className="blog-meta">
                                    <p className='flex items-center gap-2'><FaUser /><a href=""><span className='hover:text-[#FDBE33]'>Admin</span></a></p>
                                    <p className='flex items-center gap-2'><FaComments /><a href=""><span className='hover:text-[#FDBE33]'>15 Comments</span></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={Blog3} alt="Image" />
                                </div>
                                <div className="blog-text">
                                    <h3><a href="#">Food and relief items distributed in remote areas
                                    </a></h3>
                                    <p>
                                        Food and other necessary item are <br /> being distributed by a reputed NGO in remote parts of the country
                                    </p>
                                </div>
                                <div className="blog-meta">
                                    <p className='flex items-center gap-2'><FaUser /><a href=""><span className='hover:text-[#FDBE33]'>Admin</span></a></p>
                                    <p className='flex items-center gap-2'><FaComments /><a href=""><span className='hover:text-[#FDBE33]'>15 Comments</span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;