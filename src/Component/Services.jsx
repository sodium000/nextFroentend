import React from 'react';
import Delivery_logo from '../assets/bookingIcon.png'
import Image from 'next/image';

const Services  = () => {
    return (
         <div className='my-30 container mx-auto px-15 flex flex-col  gap-10'>
            <div className='font-bold text-2xl text-center bg-linear-to-r from-blue-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent'>
                How it Works
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-6  '>
                <div className=' p-5 flex flex-col gap-3 rounded-2xl '>
                    <div>
                        <Image src={Delivery_logo} alt="" />
                    </div>
                    <div className='font-semibold'>
                        Booking Pick & Drop
                    </div>
                    <div>
                        From personal packages to business shipments — we deliver on time, every time.
                    </div>
                </div>
                <div className=' p-5 flex flex-col gap-3 rounded-2xl'>
                    <div>
                        <Image src={Delivery_logo} alt="" />
                    </div>
                    <div className='font-semibold'>
                        Cash On Delivery
                    </div>
                    <div>
                        From personal packages to business shipments — we deliver on time, every time.
                    </div>
                </div>
                <div className=' p-5 flex flex-col gap-3 rounded-2xl'>
                    <div>
                        <Image src={Delivery_logo} alt="" />
                    </div>
                    <div className='font-semibold'>
                        Delivery Hub
                    </div>
                    <div>
                        From personal packages to business shipments — we deliver on time, every time.
                    </div>
                </div>
                <div className=' p-5 flex flex-col gap-3 rounded-2xl'>
                    <div>
                        <Image src={Delivery_logo} alt="" />
                    </div>
                    <div className='font-semibold'>
                        Booking SME & Corporate
                    </div>
                    <div>
                        From personal packages to business shipments — we deliver on time, every time.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services ;