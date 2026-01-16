/* eslint-disable @next/next/no-img-element */
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
    <section className="py-10 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-linear-to-r from-transparent to-slate-200 dark:to-slate-800"></div>
          <h2 className="font-bold text-lg md:text-xl text-center text-slate-500 dark:text-slate-400 tracking-tight">
            Trusted by <span className="text-indigo-600 dark:text-indigo-400">2,500+</span> industry leaders worldwide
          </h2>
          <div className="h-px flex-1 bg-linear-to-l from-transparent to-slate-200 dark:to-slate-800"></div>
        </div>

        <div className="relative group">
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 z-10 bg-linear-to-r from-white dark:from-slate-950 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 z-10 bg-linear-to-l from-white dark:from-slate-950 to-transparent pointer-events-none"></div>

          <Marquee 
            autoFill={true} 
            speed={40} 
            gradient={false} 
            pauseOnHover={true}
          >
            {logos.map((logo, index) => (
              <div 
                className="mx-8 md:mx-16 flex items-center justify-center" 
                key={index}
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className=" w-auto object-contain dark:invert transition-all duration-500 "
                />
              </div>
            ))}
          </Marquee>
        </div>

        <div className="mt-12 flex justify-center">
            <div className="h-1 w-32 rounded-full bg-linear-to-r from-transparent via-indigo-500/20 to-transparent"></div>
        </div>

      </div>
    </section>
  );
};

export default Brand;