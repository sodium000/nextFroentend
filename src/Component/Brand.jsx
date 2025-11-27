
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Marquee from 'react-fast-marquee';

const Brand = () => {
  const logos = [
    { src: "/amazon_vector.png", alt: "Amazon Vector" },
    { src: "/amazon.png", alt: "Amazon" },
    { src: "/casio.png", alt: "Casio" },
    { src: "/moonstar.png", alt: "Moonstar" },
    { src: "/randstad.png", alt: "Randstad" },
    { src: "/star.png", alt: "Star" },
    { src: "/startpeople.png", alt: "Star People" },
  ];

  return (
    <div className="mt-15  flex flex-col gap-10 justify-center items-center">
      <div className="font-bold text-2xl text-center sm:wrap-break-word bg-linear-to-r from-blue-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent ">
        We've helped thousands of sales teams
      </div>
      <div className="flex gap-5 items-center container mx-auto">
        <Marquee autoFill={true}>
          {logos.map((logo, index) => (
            <div className="mx-10 flex items-center" key={index}>
              <img src={logo.src} alt={logo.alt}  />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Brand;
