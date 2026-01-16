import React from 'react';
import Link from 'next/link';

const Features = () => {
    const features = [
        {
            icon: '🚀',
            title: 'Lightning Fast Setup',
            description: 'Get your store up and running in minutes with our intuitive, code-free builder.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: '🔒',
            title: 'Secure Transactions',
            description: 'Bank-level security ensures all your transactions and customer data are protected.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: '💰',
            title: 'Zero Platform Fees',
            description: 'Keep 100% of your revenue. No hidden fees, no transaction costs, no surprises.',
            color: 'from-orange-500 to-red-500'
        },
        {
            icon: '📱',
            title: 'Mobile Optimized',
            description: 'Your store looks perfect on any device, automatically adapting to all screen sizes.',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: '📊',
            title: 'Analytics Dashboard',
            description: 'Track sales, visitors, and performance with detailed, real-time analytics.',
            color: 'from-indigo-500 to-purple-500'
        },
        {
            icon: '🌐',
            title: 'Global Reach',
            description: 'Sell to customers worldwide with multi-currency support and international shipping.',
            color: 'from-teal-500 to-blue-500'
        }
    ];

    return (
        <section className='relative w-full py-20 lg:py-32 overflow-hidden transition-colors duration-500 bg-white dark:bg-slate-950'>
            
            <div className='absolute inset-0 pointer-events-none'>
                <div className='absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-100/50 dark:bg-indigo-900/20 rounded-full blur-[120px]'></div>
                <div className='absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-100/50 dark:bg-rose-900/20 rounded-full blur-[120px]'></div>
            </div>

            <div className='container mx-auto px-6 relative z-10'>
                {/* Header Section */}
                <div className='text-center max-w-3xl mx-auto mb-20'>
                    <h2 className='text-sm font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-3'>
                        Powerful Features
                    </h2>
                    <h3 className='text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight'>
                        Everything you need to <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Scale.</span>
                    </h3>
                    <p className='text-gray-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed'>
                        Build, manage, and grow your digital empire with a suite of tools designed for modern creators.
                    </p>
                </div>

                {/* Features Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className='group relative p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/60 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl dark:hover:shadow-indigo-500/10'
                        >
                            {/* Icon Container */}
                            <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center text-3xl shadow-lg mb-8 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                                {feature.icon}
                            </div>
                            
                            <h4 className='text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors'>
                                {feature.title}
                            </h4>
                            
                            <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
                                {feature.description}
                            </p>

                            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col items-center gap-6'>
                    <Link href='/itemshow'>
                        <button className='group relative px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl'>
                            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="relative z-10">Start Your Free Journey</span>
                        </button>
                    </Link>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        No credit card required
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;