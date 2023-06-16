import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { Fade, Slide } from "react-awesome-reveal";



const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('./reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <section className="md:mx-40 mx-10 mb-20">
            <span className="font-bold mb-20 text-center">
                <Slide>
                    <h1 className='text-5xl font-bold text-center uppercase mt-40'>Our Student Review's</h1>
                </Slide>
            </span>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper rounded-lg mt-14"
            >
                {
                    reviews?.map(review =>
                        <SwiperSlide
                            className="space-y-10 py-5"
                            key={review.author}>
                            <h3 className="text-3xl font-semibold ">
                                {review.author}
                            </h3>
                            <Rating
                                className="mx-auto"
                                style={{ maxWidth: 180, }}
                                value={review.rating}
                                readOnly
                            />
                            <Fade
                                className='flex font-bold'
                                delay={1e1}
                                cascade damping={1e-1}
                            >
                                {review.content}
                            </Fade>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    );
};

export default Reviews;