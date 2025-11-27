/* eslint-disable @next/next/no-img-element */

"use client";


import { useRouter } from "next/navigation";
import { useContext, useEffect, use, useState } from "react";
import AuthContext from "@/AuthContext/Authcontext";

export default function ProductDetail({ params }) {
    const { id } = use(params);
    const [singleData, setSingleData] = useState([])

    const router = useRouter();
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login");
        }
        const sin = fetch(`https://next-backend-sage.vercel.app/item/${id}`).then(res => res.json()).then((data) => { setSingleData(data) })
    }, [loading, user, router, id]);


    if (loading || (!loading && !user)) {
        return (
            <div className="min-h-screen bg-gray-50 text-gray-600 flex items-center justify-center">
                Checking authentication...
            </div>
        );
    }



    return (
        <>
            {singleData.map((sinItem) => (
                <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-indigo-50" key={sinItem._id}>
                    <div className="relative container mx-auto mt-6 h-80 sm:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">

                        <div className="absolute inset-0 bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600">
                            <img
                                src={sinItem.image}
                                alt={sinItem.title}
                                className="h-full w-full object-cover opacity-90"
                            />
                        </div>
                        
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
                        
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                        
                        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                            <div className="max-w-4xl">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-2xl leading-tight mb-4">
                                    {sinItem.title}
                                </h1>
                                <p className="text-white/95 text-lg sm:text-xl font-medium max-w-2xl drop-shadow-lg line-clamp-2">
                                    {sinItem.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <section className="lg:col-span-2 space-y-6">
                            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-3xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                        Overview
                                    </h2>
                                </div>
                                <p className="leading-relaxed text-gray-700 text-lg">
                                    {sinItem.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                                    <div className="flex items-center gap-2 mb-2">
                                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-sm font-semibold text-gray-600">Release Date</span>
                                    </div>
                                    <p className="text-lg font-bold text-gray-900">
                                        {new Date(sinItem.Date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </p>
                                </div>

                                <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                                    <div className="flex items-center gap-2 mb-2">
                                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-sm font-semibold text-gray-600">Priority</span>
                                    </div>
                                    <span
                                        className={`inline-block text-sm font-bold px-4 py-2 rounded-lg ${
                                            sinItem.Priority == "High"
                                                ? "bg-linear-to-r from-red-500 to-red-600 text-white"
                                                : sinItem.Priority === "Medium"
                                                    ? "bg-linear-to-r from-amber-500 to-amber-600 text-white"
                                                    : "bg-linear-to-r from-green-500 to-green-600 text-white"
                                        }`}
                                    >
                                        {sinItem.Priority}
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* Sidebar Card */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-6 bg-white/90 backdrop-blur-lg rounded-2xl border-2 border-gray-100 shadow-2xl p-8 space-y-6">
                
                                <div className="text-center pb-6 border-b-2 border-gray-100">
                                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Price</span>
                                    <div className="mt-2">
                                        <span className="text-4xl font-extrabold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                            ${sinItem.price}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    className="w-full bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                                    onClick={() => alert("Added to cart")}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Add to Cart
                                </button>

                                {/* Additional Features */}
                                <div className="space-y-3 pt-4">
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <div className="p-2 bg-indigo-100 rounded-lg">
                                            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium">Free Shipping</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <div className="p-2 bg-purple-100 rounded-lg">
                                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium">Secure Payment</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <div className="p-2 bg-pink-100 rounded-lg">
                                            <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-medium">30-Day Return</span>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Back Button */}
                        <div className="col-span-full">
                            <button
                                onClick={() => router.back()}
                                className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-lg text-gray-700 font-semibold rounded-xl hover:bg-white shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-indigo-300 group"
                            >
                                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Products
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
