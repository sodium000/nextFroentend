/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
    const { userName, review: testimonial, user_photoURL } = review;
    return (
        <div className="max-w-sm w-full bg-base-100 shadow-lg rounded-xl p-4 sm:p-6 border border-gray-200">
    <FaQuoteLeft className="text-secondary text-xl sm:text-2xl mb-3 sm:mb-4" />

    <p className="text-sm sm:text-base leading-relaxed mb-4">
        {testimonial}
    </p>

    <div className="border-t border-dashed border-gray-300 my-4"></div>

    <div className="flex items-center gap-3 sm:gap-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-primary flex items-center justify-center">
            <img 
                src={user_photoURL} 
                alt="" 
                className="w-full h-full object-cover"
            />
        </div>

        <div>
            <h3 className="font-semibold text-base sm:text-lg">
                {userName}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
                Senior Product Designer
            </p>
        </div>
    </div>
</div>

    );
};

export default ReviewCard;