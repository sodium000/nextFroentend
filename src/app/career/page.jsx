/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';

const CareerPage = () => {
    const openPositions = [
        {
            title: 'Senior Frontend Developer',
            department: 'Engineering',
            location: 'Remote / New York',
            type: 'Full-time',
            experience: '5+ years',
            description: 'Build beautiful, responsive user interfaces using React and Next.js'
        },
        {
            title: 'Product Designer',
            department: 'Design',
            location: 'London / Remote',
            type: 'Full-time',
            experience: '3+ years',
            description: 'Create intuitive and delightful user experiences for our platform'
        },
        {
            title: 'Backend Engineer',
            department: 'Engineering',
            location: 'Tokyo / Remote',
            type: 'Full-time',
            experience: '4+ years',
            description: 'Design and implement scalable backend systems and APIs'
        },
        {
            title: 'Marketing Manager',
            department: 'Marketing',
            location: 'Sydney / Remote',
            type: 'Full-time',
            experience: '3+ years',
            description: 'Drive growth and brand awareness through innovative marketing strategies'
        },
        {
            title: 'Customer Success Specialist',
            department: 'Support',
            location: 'Remote',
            type: 'Full-time',
            experience: '2+ years',
            description: 'Help our customers succeed and achieve their business goals'
        },
        {
            title: 'DevOps Engineer',
            department: 'Engineering',
            location: 'Remote',
            type: 'Full-time',
            experience: '4+ years',
            description: 'Ensure reliable infrastructure and smooth deployments'
        }
    ];

    const benefits = [
        {
            icon: '💰',
            title: 'Competitive Salary',
            description: 'Top-tier compensation packages'
        },
        {
            icon: '🏥',
            title: 'Health Insurance',
            description: 'Comprehensive medical coverage'
        },
        {
            icon: '🏖️',
            title: 'Flexible PTO',
            description: 'Unlimited vacation days'
        },
        {
            icon: '💻',
            title: 'Remote Work',
            description: 'Work from anywhere in the world'
        },
        {
            icon: '📚',
            title: 'Learning Budget',
            description: 'Annual budget for courses and conferences'
        },
        {
            icon: '🎯',
            title: 'Stock Options',
            description: 'Equity participation in the company'
        }
    ];

    const values = [
        {
            title: 'Growth Mindset',
            description: 'We encourage continuous learning and personal development'
        },
        {
            title: 'Work-Life Balance',
            description: 'We believe in sustainable productivity and well-being'
        },
        {
            title: 'Diversity & Inclusion',
            description: 'We celebrate different perspectives and backgrounds'
        },
        {
            title: 'Innovation',
            description: 'We empower you to experiment and bring new ideas'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
        <section className="relative w-full py-20 lg:py-32 overflow-hidden flex justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
                <div className="max-w-4xl text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-bold tracking-wide mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Join Us
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                        Build Your <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Career</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">
                        Join a team of passionate individuals building the future of e-commerce
                    </p>
                    <Link href="#open-positions">
                        <button className="px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/50 hover:scale-105">
                            View Open Positions
                        </button>
                    </Link>
                </div>
            </div>
        </section>

        <section className="relative w-full py-16 overflow-hidden bg-linear-to-br from-slate-50 to-indigo-50/30 dark:from-slate-900 dark:to-indigo-950/30 flex justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                            Why Join ItemSell?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-slate-400 max-w-xl">
                            We're building something special, and we want you to be part of it
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 justify-items-center">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/60 dark:border-slate-700/60 w-full">
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-sm">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section className="relative w-full py-16 overflow-hidden flex justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                            Benefits & Perks
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-slate-400 max-w-xl">
                            We take care of our team with comprehensive benefits
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/60 dark:border-slate-700/60 text-center w-full">
                                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-sm">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section id="open-positions" className="relative w-full py-16 overflow-hidden bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 flex justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                            Open Positions
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-slate-400 max-w-xl">
                            Find your perfect role and help us shape the future
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                        {openPositions.map((position, index) => (
                            <div key={index} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/60 dark:border-slate-700/60 w-full">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{position.title}</h3>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold">{position.department}</span>
                                            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full text-xs font-bold">{position.type}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-slate-400 text-sm">
                                        <span>📍</span><span>{position.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-slate-400 text-sm">
                                        <span>💼</span><span>{position.experience} experience</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-slate-400 mb-6 leading-relaxed">{position.description}</p>
                                <button className="w-full px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-all duration-300 shadow-lg group-hover:scale-105">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12 flex justify-center">
                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/60 dark:border-slate-700/60 max-w-3xl">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
                                Don't see a role that fits?
                            </h3>
                            <p className="text-gray-600 dark:text-slate-400 mb-6">
                                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                            </p>
                            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all duration-300 shadow-lg">
                                Send General Application
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
};

export default CareerPage;
