import React from 'react';

const Statistics = () => {
    const stats = [
        {
            number: '10,000+',
            label: 'Active Users',
            icon: '👥',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            number: '50,000+',
            label: 'Products Sold',
            icon: '📦',
            color: 'from-purple-500 to-pink-500'
        },
        {
            number: '98%',
            label: 'Satisfaction Rate',
            icon: '⭐',
            color: 'from-orange-500 to-red-500'
        },
        {
            number: '24/7',
            label: 'Support Available',
            icon: '🛟',
            color: 'from-green-500 to-emerald-500'
        }
    ];

    return (
        <div className='relative w-full overflow-hidden bg-white dark:bg-slate-950 py-10 transition-colors duration-500'>
            <div className='px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='text-center mb-8 sm:mb-12 md:mb-16'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-linear-to-r pb-2 sm:pb-3 from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4 sm:mb-6'>
                        Trusted by Thousands
                    </h2>
                    <p className='text-gray-600 text-center mx-auto dark:text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl   leading-relaxed px-4'>
                        Join our growing community of creators and entrepreneurs who trust our platform for their digital success.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className='group relative bg-white/70 dark:bg-slate-800/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl dark:shadow-none hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 dark:border-slate-700/50 overflow-hidden'
                        >

                            <div className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500`}></div>
                            
                            <div className='relative z-10 flex flex-col items-center text-center gap-2 sm:gap-3 md:gap-4'>
                                <div className='text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2 drop-shadow-lg transform group-hover:scale-125 transition-transform duration-500 ease-out'>
                                    {stat.icon}
                                </div>
                                
                                <div className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-linear-to-r ${stat.color} bg-clip-text text-transparent`}>
                                    {stat.number}
                                </div>
                                
                                <div className='text-gray-600 dark:text-slate-300 font-bold tracking-wide uppercase text-xs sm:text-sm'>
                                    {stat.label}
                                </div>
                            </div>

                            <div className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-linear-to-br ${stat.color} rounded-bl-2xl sm:rounded-bl-full opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Statistics;