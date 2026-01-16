/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


export default function ItemListPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [sampleItems,setSampleItems] = useState([])

    

    useEffect(()=>{
        
        fetch('http://localhost:5000/showItem').then(res=>res.json()).then(data=>setSampleItems(data));
        
    },[])
    

    const filteredItems = sampleItems.filter((item) => {
        const matchesSearch = item.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());


        const matchesCategory = categoryFilter
            ? item.category === categoryFilter
            : true;


        return matchesSearch && matchesCategory;
    });


    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50">
            <div className="relative bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                        Discover Our Collection
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl">
                        Browse through our curated selection of premium items with advanced search and filtering.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-6 space-y-8 -mt-8 relative z-10">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="Search items..."
                                className="w-full border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 px-6 py-3 rounded-xl transition-all bg-white/90 backdrop-blur-sm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <select
                            className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 px-6 py-3 rounded-xl text-gray-900 font-medium cursor-pointer transition-all"
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                        >
                            <option value="">All Categories</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Sports">Sports</option>
                            <option value="Home">Home</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item,index) => (
                        <Link href={`/itemshow/details/${item._id}`} key={index}>
                            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2">
                                <div className="relative h-64 overflow-hidden bg-linear-to-br from-indigo-100 to-purple-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => {
                                            if (!e.target.src.includes('data:image')) {
                                                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23e0e7ff;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f3e8ff;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad)' width='400' height='300'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImage Unavailable%3C/text%3E%3C/svg%3E";
                                            }
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    <div className="absolute top-4 right-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                                        ${item.price}
                                    </div>
                                </div>
                                <div className="p-6 space-y-3">
                                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                                        {item.title}
                                    </h2>

                                    <p className="text-gray-600 line-clamp-2 leading-relaxed">
                                        {item.description}
                                    </p>

                                    <div className="pt-2">
                                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg group-hover:scale-105">
                                            View Details
                                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div className="absolute top-0 left-0 w-20 h-20 bg-linear-to-br from-indigo-500/20 to-transparent rounded-br-2xl"></div>
                            </div>
                        </Link>
                    ))}
                </div>
                {filteredItems.length === 0 && (
                    <div className="text-center py-20">
                        <div className="inline-block p-6 bg-linear-to-br from-indigo-100 to-purple-100 rounded-full mb-4">
                            <svg className="w-16 h-16 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No items found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}