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
    <section className="relative py-10 overflow-hidden bg-white dark:bg-slate-950 transition-colors">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[200px] sm:h-[250px] md:h-[300px] bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full blur-[120px]" />
      </div>
      <div className="px-4 relative z-10">
        <div className="flex flex-col mx-auto items-center gap-4 sm:gap-6 mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text pb-2 sm:pb-3 text-transparent">
            What our customers are saying
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
            Enhance posture, mobility, and well-being effortlessly.
            <span className="block mt-1 italic text-slate-400 dark:text-slate-500">
              Join thousands of people living pain-free.
            </span>
          </p>
        </div>

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
