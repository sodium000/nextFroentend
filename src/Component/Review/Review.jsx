"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import customlogo from "../../assets/customer-top.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import ReviewCard from "./ReviewCard";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error loading reviews:", err));
  }, []);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white dark:bg-slate-950 transition-colors">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center gap-6 mb-14 md:mb-20 max-w-3xl mx-auto text-center">
          
          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30" />
            <div className="relative bg-white dark:bg-slate-900 rounded-full p-1">
              <Image
                src={customlogo}
                alt="Customer Logo"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            What our customers are saying
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
            Enhance posture, mobility, and well-being effortlessly.
            <span className="block mt-1 italic text-slate-400 dark:text-slate-500">
              Join thousands of people living pain-free.
            </span>
          </p>
        </div>

        {/* Slider */}
        <div className="relative py-8 md:py-14 px-4 md:px-10 rounded-3xl md:rounded-[2.5rem]
          bg-slate-50/60 dark:bg-slate-900/30
          backdrop-blur border border-slate-200/50 dark:border-slate-800/50"
        >
          <Swiper
            loop
            grabCursor
            centeredSlides
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onResize={(swiper) => swiper.update()}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="pb-12"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="flex justify-center">
                {({ isActive }) => (
                  <div
                    className={`transition-all duration-500 ${
                      isActive
                        ? "opacity-100 scale-100"
                        : "opacity-50 scale-95"
                    }`}
                  >
                    <ReviewCard review={review} />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Pagination Style */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #6366f1;
          opacity: 0.3;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default Review;
