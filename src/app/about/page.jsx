/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const AboutPage = () => {
    const teamMembers = [
        {
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            image: 'https://i.pravatar.cc/150?u=sarah',
            bio: 'Visionary leader with 10+ years in e-commerce'
        },
        {
            name: 'Michael Chen',
            role: 'CTO',
            image: 'https://i.pravatar.cc/150?u=michael',
            bio: 'Tech enthusiast building the future of online retail'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Head of Design',
            image: 'https://i.pravatar.cc/150?u=emily',
            bio: 'Creating beautiful experiences for our users'
        },
        {
            name: 'David Kim',
            role: 'Head of Operations',
            image: 'https://i.pravatar.cc/150?u=david',
            bio: 'Ensuring smooth operations and customer satisfaction'
        }
    ];

    const values = [
        {
            icon: '🎯',
            title: 'Customer First',
            description: 'We prioritize our customers\' needs and satisfaction above all else.'
        },
        {
            icon: '🚀',
            title: 'Innovation',
            description: 'Constantly pushing boundaries to deliver cutting-edge solutions.'
        },
        {
            icon: '🤝',
            title: 'Integrity',
            description: 'Building trust through transparency and honest business practices.'
        },
        {
            icon: '💪',
            title: 'Excellence',
            description: 'Striving for perfection in every aspect of our service.'
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">       
            <section className="relative w-full py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 left-0 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-[120px] animate-blob"></div>
                    <div className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
                </div>

                <div className="    px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl   text-center">
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-bold tracking-wide mb-4 sm:mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            Our Story
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
                            About <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Us</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-slate-400 leading-relaxed px-4">
                            We're on a mission to revolutionize the way people buy and sell online, making commerce accessible to everyone.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative w-full max-h-[70vh] min-h-[60vh] py-8 sm:py-12 md:py-16 overflow-hidden flex items-center">
                <div className="    px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl  ">
                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl border border-slate-200/60 dark:border-slate-700/60">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4 sm:mb-6">
                                Our Mission
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-slate-400 leading-relaxed mb-4 sm:mb-6 md:mb-8">
                                At ItemSell, we believe that everyone should have the opportunity to start their own online business. 
                                Our platform provides a seamless, code-free solution that empowers entrepreneurs, creators, and businesses 
                                to build, manage, and grow their digital storefronts without the technical barriers.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-slate-400 leading-relaxed">
                                We're committed to providing exceptional service, innovative features, and a community-driven approach 
                                that helps our users achieve their business goals. With zero platform fees and 24/7 support, we're here 
                                to make your success our priority.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full py-16 overflow-hidden bg-linear-to-br from-slate-50 to-indigo-50/30 dark:from-slate-900 dark:to-indigo-950/30">
                <div className="    px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl  ">
                        <div className="text-center mb-8 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-3 sm:mb-4">
                                Our Values
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-slate-400">
                                The principles that guide everything we do
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl dark:shadow-none hover:shadow-2xl dark:hover:shadow-indigo-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/60 dark:border-slate-700/60"
                                >
                                    <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 dark:text-white mb-2 sm:mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-slate-400 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full max-h-[70vh] min-h-[60vh] py-8 sm:py-12 md:py-16 overflow-hidden flex items-center">
                <div className="    px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl  ">
                        <div className="text-center mb-8 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-3 sm:mb-4">
                                Meet Our Team
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-slate-400">
                                The passionate people behind ItemSell
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl dark:shadow-none hover:shadow-2xl dark:hover:shadow-indigo-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/60 dark:border-slate-700/60 text-center"
                                >
                                    <div className="relative mb-4 sm:mb-6">
                                        <div className="absolute inset-0 bg-linear-to-br from-indigo-500 to-purple-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full   border-2 sm:border-4 border-slate-200 dark:border-slate-700 group-hover:border-indigo-500 transition-colors duration-300"
                                        />
                                    </div>
                                    <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 dark:text-white mb-1 sm:mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-indigo-600 dark:text-indigo-400 font-bold mb-2 sm:mb-3 text-sm sm:text-base">
                                        {member.role}
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400">
                                        {member.bio}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full py-16 overflow-hidden bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30">
                <div className="    px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl  ">
                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-slate-200/60 dark:border-slate-700/60">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
                                <div>
                                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                                        10K+
                                    </div>
                                    <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-slate-400 font-semibold">
                                        Active Users
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                                        50K+
                                    </div>
                                    <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-slate-400 font-semibold">
                                        Products Sold
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                                        98%
                                    </div>
                                    <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-slate-400 font-semibold">
                                        Satisfaction
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                                        24/7
                                    </div>
                                    <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-slate-400 font-semibold">
                                        Support
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
