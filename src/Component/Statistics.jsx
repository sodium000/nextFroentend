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
        <div className='relative w-full overflow-hidden bg-linear-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 py-20 transition-colors duration-500'>
            
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute top-0 right-0 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-blob'></div>
                <div className='absolute bottom-0 left-0 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-20 animate-blob animation-delay-2000'></div>
            </div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-6'>
                        Trusted by Thousands
                    </h2>
                    <p className='text-gray-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed'>
                        Join our growing community of creators and entrepreneurs who trust our platform for their digital success.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className='group relative bg-white/70 dark:bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 shadow-xl dark:shadow-none hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 dark:border-slate-700/50 overflow-hidden'
                        >

                            <div className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500`}></div>
                            
                            <div className='relative z-10 flex flex-col items-center text-center gap-4'>
                                <div className='text-5xl mb-2 drop-shadow-lg transform group-hover:scale-125 transition-transform duration-500 ease-out'>
                                    {stat.icon}
                                </div>
                                
                                <div className={`text-4xl md:text-5xl font-black bg-linear-to-r ${stat.color} bg-clip-text text-transparent`}>
                                    {stat.number}
                                </div>
                                
                                <div className='text-gray-600 dark:text-slate-300 font-bold tracking-wide uppercase text-sm'>
                                    {stat.label}
                                </div>
                            </div>

                            <div className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-br ${stat.color} rounded-bl-full opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Statistics;