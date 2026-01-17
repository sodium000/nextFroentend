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
            {/* Hero Section */}
            <section className="relative w-full py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-[120px] animate-blob"></div>
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
                </div>

                <div className="    px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl   text-center">
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
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-400 leading-relaxed">
                            Visit us at any of our global offices or reach out to our team
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative w-full py-16 overflow-hidden bg-linear-to-br from-slate-50 to-indigo-50/30 dark:from-slate-900 dark:to-indigo-950/30">
                <div className="    px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl  ">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl dark:shadow-none hover:shadow-2xl dark:hover:shadow-indigo-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/60 dark:border-slate-700/60 text-center"
                                >
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

            <section className="relative w-full py-16 overflow-hidden">
                <div className="    px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl  ">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                                Our Offices
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-slate-400">
                                Connect with us at any of our locations worldwide
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {offices.map((office, index) => (
                                <div
                                    key={index}
                                    className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl dark:shadow-none hover:shadow-2xl dark:hover:shadow-indigo-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/60 dark:border-slate-700/60"
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                                                {office.city}
                                            </h3>
                                            <p className="text-indigo-600 dark:text-indigo-400 font-bold">
                                                {office.country}
                                            </p>
                                        </div>
                                        <div className="text-4xl">📍</div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <span className="text-gray-400 dark:text-slate-500 mt-1">📍</span>
                                            <div>
                                                <p className="text-gray-600 dark:text-slate-400 font-medium">
                                                    {office.address}
                                                </p>
                                                <p className="text-gray-500 dark:text-slate-500 text-sm">
                                                    {office.zipCode}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="text-gray-400 dark:text-slate-500">📞</span>
                                            <a href={`tel:${office.phone}`} className="text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                                {office.phone}
                                            </a>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="text-gray-400 dark:text-slate-500">✉️</span>
                                            <a href={`mailto:${office.email}`} className="text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                                {office.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                                        <button className="w-full px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                                            Get Directions
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full py-16 overflow-hidden bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30">
                <div className="    px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl  ">
                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-200/60 dark:border-slate-700/60">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 text-center">
                                Global Presence
                            </h2>
                            <div className="aspect-video rounded-3xl overflow-hidden bg-linear-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🌍</div>
                                    <p className="text-lg text-gray-600 dark:text-slate-400 font-semibold">
                                        Interactive map coming soon
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-slate-500 mt-2">
                                        Click on any office above to get directions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LocationPage;
