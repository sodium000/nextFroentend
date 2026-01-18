/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, use, useState } from "react";
import AuthContext from "@/AuthContext/Authcontext";

export default function ProductDetail({ params }) {
    const { id } = use(params);
    const [singleData, setSingleData] = useState([]);
    const router = useRouter();
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login");
        }
        fetch(`https://next-backend-sage.vercel.app /item/${id}`)
            .then(res => res.json())
            .then((data) => {
                setSingleData(Array.isArray(data) ? data : [data]);
            });
    }, [loading, user, router, id]);

    if (loading || (!loading && !user)) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-pulse flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-500 font-medium">Loading premium details...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8fafc] pb-20">
            {singleData.map((sinItem) => (
                <div key={sinItem._id?.$oid || sinItem._id} className="animate-in fade-in duration-700">
                    
                    <nav className="max-w-7xl mx-auto px-6 py-6">
                        <button 
                            onClick={() => router.back()}
                            className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors font-medium"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            Back to Collection
                        </button>
                    </nav>

                    <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
                        
                        <div className="lg:col-span-7">
                            <div className="sticky top-6">
                                <div className="relative group rounded-4xl overflow-hidden bg-white shadow-2xl border-4 border-white">
                                    <img
                                        src={sinItem.image}
                                        alt={sinItem.title}
                                        className="w-7xl h-[600] object-cover aspect-4/4 lg:aspect-square group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {sinItem.Priority === "High" && (
                                        <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                            Priority Listing
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 space-y-8">
                            <div className="space-y-4">
                                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-bold uppercase tracking-widest">
                                    {sinItem.Categories}
                                </span>
                                <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                                    {sinItem.title}
                                </h1>
                                <p className="text-xl text-gray-500 font-medium italic">
                                    {sinItem.description}
                                </p>
                                <div className="flex items-baseline gap-4">
                                    <span className="text-5xl font-black text-indigo-600">${sinItem.price}</span>
                                    <span className="text-gray-400 line-through text-xl">$120.00</span>
                                </div>
                            </div>

                            <div className="h-px bg-gray-200 w-full"></div>

                            <div className="grid grid-cols-2 gap-4">
                                {sinItem.Details && Object.entries(sinItem.Details).map(([key, value]) => (
                                    <div key={key} className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <p className="text-[10px] uppercase tracking-tighter text-gray-400 font-bold mb-1">{key}</p>
                                        <p className="text-gray-800 font-bold">{value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white p-8 rounded-4xl border border-gray-100 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">The Story</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {sinItem.FullDesc}
                                </p>
                            </div>

                            <div className="bg-indigo-50 p-6 rounded-4xl flex items-center gap-4 border border-indigo-100">
                                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner">
                                    {sinItem.UserName?.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-xs text-indigo-400 font-bold uppercase">Trusted Seller</p>
                                    <p className="text-gray-900 font-bold">{sinItem.UserName}</p>
                                    <p className="text-sm text-gray-500">{sinItem.Email}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button className="flex-1 bg-gray-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-xl hover:-translate-y-1">
                                    Buy Now
                                </button>
                                <button className="p-5 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all shadow-sm">
                                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </button>
                            </div>

                            <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">
                                <span>Listed: {new Date(sinItem.Date?.$date || sinItem.Date).toLocaleDateString()}</span>
                                <span>ID: {sinItem._id?.$oid?.slice(-6) || sinItem._id?.slice(-6)}</span>
                            </div>
                        </div>
                    </main>
                </div>
            ))}
        </div>
    );
}