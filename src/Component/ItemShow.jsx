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
                setItems(data.slice(0, 6));
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
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
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
        <section className='relative w-full py-20 lg:py-32 overflow-hidden bg-linear-to-br from-slate-50 via-white to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30 transition-colors duration-500'>
            {/* Background Elements */}
            <div className='absolute inset-0 pointer-events-none overflow-hidden'>
                <div className='absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-[120px] animate-blob'></div>
                <div className='absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000'></div>
            </div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                {/* Header Section */}
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-bold tracking-wide mb-6'>
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Featured Products
                    </div>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight'>
                        Discover Our <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Collection</span>
                    </h2>
                    <p className='text-gray-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed'>
                        Explore our curated selection of premium items, handpicked just for you
                    </p>
                </div>

                {/* Items Grid */}
                {items.length > 0 ? (
                    <>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
                            {items.map((item, index) => (
                                <Link href={`/itemshow/details/${item._id}`} key={item._id || index}>
                                    <div className='group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl dark:shadow-none hover:shadow-2xl dark:hover:shadow-indigo-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/60 dark:border-slate-700/60 hover:border-indigo-500/50'>
                                        {/* Image Container */}
                                        <div className='relative h-64 overflow-hidden bg-linear-to-br from-indigo-100/50 to-purple-100/50 dark:from-indigo-900/20 dark:to-purple-900/20'>
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
                                            {/* Overlay Gradient */}
                                            <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                                            
                                            {/* Price Badge */}
                                            <div className='absolute top-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-slate-900 dark:text-white px-5 py-2.5 rounded-full font-black text-lg shadow-lg border border-slate-200/50 dark:border-slate-700/50'>
                                                ${item.price}
                                            </div>

                                            {/* Category Badge */}
                                            {item.category && (
                                                <div className='absolute top-4 left-4 bg-indigo-600/90 dark:bg-indigo-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg'>
                                                    {item.category}
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className='p-6 space-y-4'>
                                            <h3 className='text-xl font-black text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300 line-clamp-1'>
                                                {item.title}
                                            </h3>

                                            <p className='text-gray-600 dark:text-slate-400 line-clamp-2 leading-relaxed text-sm'>
                                                {item.description}
                                            </p>

                                            {/* Action Button */}
                                            <div className='pt-2'>
                                                <div className='inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105'>
                                                    View Details
                                                    <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Decorative Elements */}
                                        <div className='absolute top-0 left-0 w-24 h-24 bg-linear-to-br from-indigo-500/10 to-purple-500/10 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                                        <div className='absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-purple-500/10 to-pink-500/10 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* View All Button */}
                        <div className='text-center'>
                            <Link href='/itemshow'>
                                <button className='group relative px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl'>
                                    <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <span className="relative z-10 flex items-center gap-2">
                                        View All Products
                                        <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                                        </svg>
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className='text-center py-20'>
                        <div className='inline-block p-6 bg-linear-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full mb-6'>
                            <svg className='w-16 h-16 text-indigo-600 dark:text-indigo-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4' />
                            </svg>
                        </div>
                        <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-2'>No items available</h3>
                        <p className='text-gray-600 dark:text-slate-400'>Check back soon for new products!</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ItemShow;
