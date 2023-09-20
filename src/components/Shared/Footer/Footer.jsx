import React from 'react';
import './Footer.css';
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";
import { MdOutlineForwardToInbox } from "react-icons/md";


const Footer = () => {
    return (
        <>
            <div className="footer justify-center items-center grid grid-flow-row sm:grid-cols-1 sm:px-2 md:px-2 lg:px-32 gap-10">
                <div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 px-10">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-contact">
                                <h2>Our Head Office</h2>
                                <p>
                                    <div className='flex items-center gap-1'>
                                        <FaLocationDot />Dhaka, Bangladesh
                                    </div>
                                </p>
                                <p>
                                    <div className='flex items-center gap-1'>
                                        <BiSolidPhone />+012 345 67890
                                    </div>
                                </p>
                                <p>
                                    <div className='flex items-center gap-1'>
                                        <MdOutlineForwardToInbox />info@donation.com
                                    </div>
                                </p>

                                <div className="footer-social flex text-3xl">
                                    <a href=""><FaTwitter /></a>
                                    <a href=""><FaFacebookF /></a>
                                    <a href=""><FaYoutube /></a>
                                    <a href=""><FaInstagram /></a>
                                    <a href=""><FaLinkedin /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-link">
                                <h2>Popular Links</h2>
                                <a href="">
                                    <div className='flex items-center'>
                                        <span className='text-xl'><MdKeyboardArrowRight /></span>
                                        About Us
                                    </div>
                                </a>
                                <a href="">
                                    <div className='flex items-center'>
                                        <span className='text-xl'><MdKeyboardArrowRight /></span>
                                        Contact Us
                                    </div>
                                </a>
                                <a href="">
                                    <div className='flex items-center'>
                                        <span className='text-xl'><MdKeyboardArrowRight /></span>
                                        Popular Causes
                                    </div>
                                </a>
                                <a href="">
                                    <div className='flex items-center'>
                                        <span className='text-xl'><MdKeyboardArrowRight /></span>
                                        Upcoming Events
                                    </div>
                                </a>
                                <a href="">
                                    <div className='flex items-center'>
                                        <span className='text-xl'><MdKeyboardArrowRight /></span>
                                        Latest Blog
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-link">
                                <h2>Useful Links</h2>
                                <a href="">
                                    <div className='flex items-center'>
                                        <span className='text-xl'><MdKeyboardArrowRight /></span>
                                        Terms of use
                                    </div>
                                </a>
                                <a href="">
                                    <div className='flex items-center'>
                                        <span className='text-xl'><MdKeyboardArrowRight /></span>
                                        Privacy policy
                                    </div>
                                </a>
                                <a href="">
                                    <div className='flex items-center'>
                                        <span className='text-xl'><MdKeyboardArrowRight /></span>
                                        Cookies
                                    </div>
                                </a>
                                <a href="">
                                    <div className='flex items-center'>
                                        <span className='text-xl'><MdKeyboardArrowRight /></span>
                                        Help
                                    </div>
                                </a>
                                <a href="">
                                    <div className='flex items-center'>
                                        <span className='text-xl'><MdKeyboardArrowRight /></span>
                                        FQAs
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className=''>
                            <div className="footer-newsletter">
                                <h2>Newsletter</h2>
                                <form>
                                    <input className="text-black md:h-12 lg:h-12 lg:px-4 md:pr-24 lg:pr-20" placeholder="Email goes here" />
                                    <button className="btn md:btn-wide lg:btn-wide py-4">Submit</button>
                                    <h3 className='mt-4'>Don't worry, we don't spam!</h3>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;