import React from 'react';

const Services = () => {
    const steps = [
        {
            title: 'Booking Pick & Drop',
            description: 'Easily schedule your pickup through our intuitive dashboard or mobile app.',
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            color: 'text-blue-500',
            bg: 'bg-blue-500/10'
        },
        {
            title: 'Cash On Delivery',
            description: 'Secure payment collection with instant digital confirmation for every parcel.',
                        
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            color: 'text-emerald-500',
            bg: 'bg-emerald-500/10'
        },
        {
            title: 'Delivery Hub',
            description: 'Automated sorting at our high-tech hubs ensures the fastest routing possible.',
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            color: 'text-purple-500',
            bg: 'bg-purple-500/10'
        },
        {
            title: 'SME & Corporate',
            description: 'Tailored logistics solutions designed to scale with your growing business.',
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            color: 'text-orange-500',
            bg: 'bg-orange-500/10'
        }
    ];

    return (
        <section className="py-10 transition-colors duration-500 bg-white dark:bg-slate-950">
            <div className='    px-4 sm:px-6 lg:px-16'>   
                <div className='text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20'>
                    <span className='inline-block px-3 sm:px-4 py-1 mb-3 sm:mb-4 text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 rounded-full'>
                        Step by Step
                    </span>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white'>
                        How it Works
                    </h2>
                </div>

                <div className='relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12'>
                    
                    <div className="hidden lg:block absolute top-12 sm:top-16 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className='group relative flex flex-col items-center text-center z-10'>
                            
                            <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl sm:rounded-4xl md:rounded-[2.5rem] ${step.bg} border-2 sm:border-4 border-white dark:border-slate-950 flex items-center justify-center mb-4 sm:mb-6 md:mb-8 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl`}>
                                <div className={`${step.color} transition-transform duration-500 group-hover:rotate-12`}>
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {step.icon.props.children}
                                    </svg>
                                </div>

                                <div className="absolute -bottom-1 sm:-bottom-2 bg-white dark:bg-slate-800 px-2 py-0.5 sm:px-4 sm:py-1 rounded-full shadow-md border border-slate-100 dark:border-slate-700 text-xs font-black text-slate-500">
                                    STEP 0{index + 1}
                                </div>
                            </div>

                            <div className='space-y-2 sm:space-y-3 md:space-y-4'>
                                <h3 className='text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white tracking-tight'>
                                    {step.title}
                                </h3>
                                <p className='text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-[200px] sm:max-w-[250px]'>
                                    {step.description}
                                </p>
                            </div>

                            <div className={`absolute -inset-2 sm:-inset-4 rounded-2xl sm:rounded-3xl ${step.bg} opacity-0 group-hover:opacity-100 -z-10 blur-xl transition-opacity duration-500`}></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;