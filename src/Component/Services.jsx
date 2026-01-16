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
        <section className="py-24 transition-colors duration-500 bg-white dark:bg-slate-950">
            <div className='container mx-auto px-6 lg:px-16'>
                
                <div className='text-center mb-20'>
                    <span className='inline-block px-4 py-1 mb-4 text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 rounded-full'>
                        Step by Step
                    </span>
                    <h2 className='text-4xl md:text-5xl font-black text-slate-900 dark:text-white'>
                        How it Works
                    </h2>
                </div>

                <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                    
                    <div className="hidden lg:block absolute top-16 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className='group relative flex flex-col items-center text-center z-10'>
                            
                            <div className={`w-32 h-32 rounded-[2.5rem] ${step.bg} border-4 border-white dark:border-slate-950 flex items-center justify-center mb-8 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl`}>
                                <div className={`${step.color} transition-transform duration-500 group-hover:rotate-12`}>
                                    {step.icon}
                                </div>


                                <div className="absolute -bottom-2 bg-white dark:bg-slate-800 px-4 py-1 rounded-full shadow-md border border-slate-100 dark:border-slate-700 text-xs font-black text-slate-500">
                                    STEP 0{index + 1}
                                </div>
                            </div>

                            <div className='space-y-4'>
                                <h3 className='text-xl font-bold text-slate-900 dark:text-white tracking-tight'>
                                    {step.title}
                                </h3>
                                <p className='text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-[250px]'>
                                    {step.description}
                                </p>
                            </div>

                            <div className={`absolute -inset-4 rounded-3xl ${step.bg} opacity-0 group-hover:opacity-100 -z-10 blur-xl transition-opacity duration-500`}></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;