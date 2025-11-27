"use client";

import React, { useEffect, useState } from 'react';
import customlogo from '../../assets/customer-top.png'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Image from 'next/image';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("/reviews.json")
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.error("Error loading reviews:", err));
    }, []);

    return (
        <div className='my-24'>
            <div className='mt-25 flex flex-col items-center gap-5'>
                <div>
                    <Image src={customlogo} alt="Customer Logo" />
                </div>
                <div className='text-3xl text-center wrap-break-word font-bold bg-linear-to-r from-blue-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent'>
                    What our customers are saying
                </div>
                <div className='text-center mb-10'>
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                    Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </div>
            </div>

            <div className="py-10 justify-center-safe rounded-2xl">
                <Swiper
                    loop={true}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3} // default for large screens

                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            coverflowEffect: {
                                rotate: 20,
                                stretch: 0,
                                depth: 100,
                                scale: 0.9,
                            },
                        },
                        640: {
                            slidesPerView: 1.5,
                            coverflowEffect: {
                                rotate: 25,
                                stretch: 50,
                                depth: 150,
                                scale: 0.85,
                            },
                        },
                        1024: {
                            slidesPerView: 3,
                            coverflowEffect: {
                                rotate: 30,
                                stretch: "40%",
                                depth: 200,
                                scale: 0.75,
                            },
                        },
                    }}

                    coverflowEffect={{
                        rotate: 30,
                        stretch: '40%',
                        depth: 200,
                        modifier: 1,
                        scale: 0.75,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={false}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <ReviewCard review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Review;




