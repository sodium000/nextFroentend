/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL } = review;

  return (
    <div className="relative group w-full bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-xl dark:shadow-indigo-500/5 border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:border-indigo-500/50">

      {/* Top */}
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
          <FaQuoteLeft className="text-xl" />
        </div>

        <div className="flex gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-sm" />
          ))}
        </div>
      </div>

      {/* Review */}
      <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed italic mb-8">
        “{testimonial}”
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent mb-8" />

      {/* User */}
      <div className="flex items-center gap-4">
        <div className="relative p-1 rounded-full bg-linear-to-tr from-indigo-500 to-purple-500">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white dark:border-slate-900">
            <img
              src={user_photoURL || "https://i.pravatar.cc/150"}
              alt={userName}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <h3 className="font-black text-slate-900 dark:text-white text-lg">
            {userName}
          </h3>
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            Verified Customer
          </p>
        </div>
      </div>

      {/* Hover corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-indigo-500 to-purple-500 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default ReviewCard;
