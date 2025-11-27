import Image from 'next/image';
import React from 'react';
import SerLogo from '../assets/service.png'

const HowWork = () => {
    const services = [
        {
            title: 'Express & Standard Delivery',
            logo: '/ExpressStandardDelivery.webp',
            description: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.'
        },
        {
            title: 'Nationwide Delivery',
            logo: '/NationwideDelivery.png',
            description: 'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.'
        },
        {
            title: 'Fulfillment Solution',
            logo: '/FulfillmentSolution.webp',
            description: 'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.'
        },
        {
            title: 'Cash on Home Delivery',
            logo: '/CashHomeDelivery.jpg',
            description: '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.'
        },
        {
            title: 'Corporate Service / Contract In Logistics',
            logo: '/ContractLogistics.webp',
            description: 'Customized corporate services which includes warehouse and inventory management support.'
        },
        {
            title: 'Parcel Return',
            logo: '/ParcelReturn.jpg',
            description: 'Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.'
        }
    ];

    return (
        <div className='relative w-full py-16 md:py-20 lg:py-24 overflow-hidden'>
            <div className='absolute inset-0 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'></div>
            

            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
                <div className='absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
                <div className='absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000'></div>
            </div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='flex flex-col gap-6 mb-12 md:mb-16'>
                    <div className='text-center'>
                        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4'>
                            Our Services
                        </h2>
                        <p className='text-gray-600 dark:text-gray-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed'>
                            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                        </p>
                    </div>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='group relative bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden'
                        >
                            <div className='absolute inset-0 bg-linear-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        
                            <div className='relative z-10 flex flex-col items-center text-center gap-4 md:gap-6'>

                                <div className='relative'>
                                    <div className='absolute  bg-linear-to-r from-blue-400 to-purple-400 rounded-full'></div>
                                    <div className='relative bg-linear-to-br from-blue-500 to-purple-600 p-1 md:p-1 rounded-full  '>
                                        <Image 
                                            src={service.logo}
                                            alt={service.title} 
                                            className='w-12 h-12 md:w-16 md:h-16 rounded-full object-cover' 
                                            width={64}
                                            height={64}
                                        />
                                    </div>
                                </div>

                                <h3 className='font-bold text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300'>
                                    {service.title}
                                </h3>

                                <p className='text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed'>
                                    {service.description}
                                </p>
                            </div>

                            <div className='absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowWork;