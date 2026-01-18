/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const ItemShow = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/showItem')
            .then(res => res.json())
            .then(data => {
                setItems(data.slice(0, 8));
                setLoading(false);
            })
            .catch(err => {
                console.error("Error loading items:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className='relative w-full py-20 overflow-hidden bg-white dark:bg-slate-950'>
                <div className=' px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {[1, 2, 3].map(i => (
                            <div key={i} className='animate-pulse'>
                                <div className='bg-slate-200 dark:bg-slate-800 rounded-3xl h-80'></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section className='relative w-full  overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500'>
            <div className=' container mx-auto flex flex-col  items-center  px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='text-center max-w-3xl mb-8 sm:mb-12 md:mb-16'>
                    <div className='inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-bold tracking-wide mb-4 sm:mb-6'>
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Featured Products
                    </div>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 dark:text-white mb-3 sm:mb-4 md:mb-6 tracking-tight'>
                        Discover Our <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Collection</span>
                    </h2>
                    <p className='text-gray-600 dark:text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed'>
                        Explore our curated selection of premium items, handpicked just for you
                    </p>
                </div>

                {items.length > 0 ? (
                    <>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12'>
                            {items.map((item, index) => (
                                <Link href={`/itemshow/details/${item._id}`} key={item._id || index}>
                                    <div className='group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl dark:shadow-none hover:shadow-2xl dark:hover:shadow-indigo-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/60 dark:border-slate-700/60 hover:border-indigo-500/50 '>
                                        <div className='relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden bg-linear-to-br from-indigo-100/50 to-purple-100/50 dark:from-indigo-900/20 dark:to-purple-900/20'>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                                                onError={(e) => {
                                                    if (!e.target.src.includes('data:image')) {
                                                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23e0e7ff;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f3e8ff;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad)' width='400' height='300'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImage Unavailable%3C/text%3E%3C/svg%3E";
                                                    }
                                                }}
                                            />

                                            <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                                            <div className='absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-slate-900 dark:text-white px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full font-black text-sm sm:text-lg shadow-lg border border-slate-200/50 dark:border-slate-700/50'>
                                                ${item.price}
                                            </div>

                                            {item.category && (
                                                <div className='absolute top-2 left-2 sm:top-4 sm:left-4 bg-indigo-600/90 dark:bg-indigo-500/90 backdrop-blur-sm text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg'>
                                                    {item.category}
                                                </div>
                                            )}
                                        </div>

                                        <div className='p-4 sm:p-6 space-y-2 sm:space-y-4'>
                                            <h3 className='text-base sm:text-lg md:text-xl font-black text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300 line-clamp-1'>
                                                {item.title}
                                            </h3>

                                            <p className='text-gray-600 dark:text-slate-400 line-clamp-2 leading-relaxed text-xs sm:text-sm'>
                                                {item.description}
                                            </p>

                                            <div className='pt-1 sm:pt-2'>
                                                <div className='inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105'>
                                                    View Details
                                                    <svg className='w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-linear-to-br from-indigo-500/10 to-purple-500/10 rounded-br-2xl sm:rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                                        <div className='absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-linear-to-tl from-purple-500/10 to-pink-500/10 rounded-tl-2xl sm:rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className='text-center'>
                            <Link href='/itemshow'>
                                <button className='group relative px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-sm sm:text-base rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl'>
                                    <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <span className="relative z-10 flex items-center gap-2">
                                        View All Products
                                        <svg className='w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                                        </svg>
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className='text-center py-12 sm:py-20'>
                        <div className='inline-block p-4 sm:p-6 bg-linear-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full mb-4 sm:mb-6'>
                            <svg className='w-12 h-12 sm:w-16 sm:h-16 text-indigo-600 dark:text-indigo-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4' />
                            </svg>
                        </div>
                        <h3 className='text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2'>No items available</h3>
                        <p className='text-sm sm:text-base text-gray-600 dark:text-slate-400'>Check back soon for new products!</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ItemShow;
