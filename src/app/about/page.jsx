/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FiTarget, FiZap, FiShield, FiTrendingUp, FiArrowRight } from 'react-icons/fi';

const AboutPage = () => {
    const teamMembers = [
        { name: 'Sarah Johnson', role: 'CEO & Founder', image: 'https://i.pravatar.cc/150?u=sarah', bio: 'Visionary leader with 10+ years in e-commerce' },
        { name: 'Michael Chen', role: 'CTO', image: 'https://i.pravatar.cc/150?u=michael', bio: 'Tech enthusiast building the future of retail' },
        { name: 'Emily Rodriguez', role: 'Head of Design', image: 'https://i.pravatar.cc/150?u=emily', bio: 'Creating beautiful experiences for our users' },
        { name: 'David Kim', role: 'Head of Ops', image: 'https://i.pravatar.cc/150?u=david', bio: 'Ensuring smooth operations and satisfaction' }
    ];

    const values = [
        { icon: <FiTarget />, title: 'Customer First', desc: 'Prioritizing needs above all else.', color: 'from-blue-500 to-cyan-400' },
        { icon: <FiZap />, title: 'Innovation', desc: 'Pushing boundaries every single day.', color: 'from-orange-500 to-yellow-400' },
        { icon: <FiShield />, title: 'Integrity', desc: 'Trust through total transparency.', color: 'from-green-500 to-emerald-400' },
        { icon: <FiTrendingUp />, title: 'Excellence', desc: 'Striving for perfection in service.', color: 'from-purple-500 to-pink-400' }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white">
            <header className="relative pt-20 pb-12 lg:pt-32 lg:pb-24 border-b border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
                        <div className="max-w-3xl">
                            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">Est. 2024</span>
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
                                WE BUILD <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600">POSSIBILITIES.</span>
                            </h1>
                        </div>
                        <div className="max-w-md pb-4">
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed border-l-4 border-indigo-500 pl-6">
                                ItemSell isn't just a marketplace. It's a technical ecosystem designed to bridge the gap between creators and consumers.
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-24 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-8 bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-indigo-500/50 transition-colors">
                        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                            We provide a seamless, code-free solution that empowers entrepreneurs to build digital storefronts without technical barriers. We believe the future of commerce belongs to everyone, not just the tech giants.
                        </p>
                        <div className="mt-8">
                            <button className="flex items-center gap-2 font-bold text-indigo-600 dark:text-indigo-400 group">
                                Learn more about our tech <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                    <div className="md:col-span-4 bg-indigo-600 dark:bg-indigo-500 rounded-[2.5rem] p-10 text-white flex flex-col justify-center">
                        <div className="text-6xl font-black mb-2">0%</div>
                        <div className="text-xl font-bold opacity-90">Platform Fees</div>
                        <p className="mt-4 opacity-75">Our success is tied to yours. We don't take a cut of your hard-earned revenue.</p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-100 dark:bg-slate-900/50">
                <div className="container mx-auto px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl font-black uppercase tracking-tight">Core Values</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all group">
                                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${v.color} flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                    {v.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <h2 className="text-5xl font-black leading-tight sticky top-24">
                            MEET THE <br />
                            <span className="text-indigo-600">ARCHITECTS</span>
                        </h2>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
                        {teamMembers.map((m, i) => (
                            <div key={i} className="group">
                                <div className="relative overflow-hidden rounded-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                                    <img src={m.image} alt={m.name} className="w-full aspect-square object-cover scale-105 group-hover:scale-100 transition-transform duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold">{m.name}</h3>
                                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{m.role}</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{m.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { label: 'Active Users', value: '10K+' },
                            { label: 'Products Sold', value: '50K+' },
                            { label: 'Satisfaction', value: '98%' },
                            { label: 'Support', value: '24/7' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">{stat.value}</div>
                                <div className="text-slate-500 dark:text-slate-400 uppercase font-bold text-xs tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;