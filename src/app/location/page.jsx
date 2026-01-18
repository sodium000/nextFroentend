import React from 'react';

const LocationPage = () => {
    const offices = [
        {
            city: 'New York',
            address: '123 Commerce Street, Suite 500',
            zipCode: 'NY 10001',
            country: 'United States',
            phone: '+1 (555) 123-4567',
            email: 'ny@itemsell.com',
            coordinates: { lat: 40.7128, lng: -74.0060 }
        },
        {
            city: 'London',
            address: '456 Business Avenue, Floor 3',
            zipCode: 'EC1A 1BB',
            country: 'United Kingdom',
            phone: '+44 20 1234 5678',
            email: 'london@itemsell.com',
            coordinates: { lat: 51.5074, lng: -0.1278 }
        },
        {
            city: 'Tokyo',
            address: '789 Innovation Tower, 15F',
            zipCode: '100-0001',
            country: 'Japan',
            phone: '+81 3 1234 5678',
            email: 'tokyo@itemsell.com',
            coordinates: { lat: 35.6762, lng: 139.6503 }
        },
        {
            city: 'Sydney',
            address: '321 Digital Plaza, Level 8',
            zipCode: 'NSW 2000',
            country: 'Australia',
            phone: '+61 2 1234 5678',
            email: 'sydney@itemsell.com',
            coordinates: { lat: -33.8688, lng: 151.2093 }
        }
    ];

    const features = [
        {
            icon: '📍',
            title: 'Multiple Locations',
            description: 'We have offices across the globe to serve you better'
        },
        {
            icon: '🌍',
            title: 'Global Reach',
            description: 'Supporting customers in over 50 countries worldwide'
        },
        {
            icon: '💬',
            title: 'Local Support',
            description: 'Native language support in all our office locations'
        },
        {
            icon: '⏰',
            title: '24/7 Availability',
            description: 'Round-the-clock customer service across all time zones'
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
                            Find Us
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                            Our <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Locations</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-400 leading-relaxed max-w-2xl"> {/* FIXED: added max-w-2xl for better text wrapping */}
                            Visit us at any of our global offices or reach out to our team
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative w-full py-16 overflow-hidden bg-linear-to-br from-slate-50 to-indigo-50/30 dark:from-slate-900 dark:to-indigo-950/30 flex justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8"> 
                    <div className="max-w-6xl mx-auto"> 
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"> 
                            {features.map((feature, index) => (
                                <div key={index} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/60 dark:border-slate-700/60 text-center w-full max-w-sm">
                                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-sm">
                                        {feature.description}
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
                                Our Offices
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-slate-400">
                                Connect with us at any of our locations worldwide
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center"> 
                            {offices.map((office, index) => (
                                <div key={index} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/60 dark:border-slate-700/60 w-full max-w-xl">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{office.city}</h3>
                                            <p className="text-indigo-600 dark:text-indigo-400 font-bold">{office.country}</p>
                                        </div>
                                        <div className="text-4xl">📍</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LocationPage;
