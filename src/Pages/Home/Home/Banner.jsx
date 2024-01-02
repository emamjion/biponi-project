import React from 'react';
import { MdOutlineStar } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";

const Banner = () => {
    return (
        <div className='banner-bg md:h-[400px] flex items-center pl-5 md:pl-10 rounded-2xl'>
            <div className='mt-8 mb-4 md:mt-28'>
                <h1 className='text-5xl font-bold mb-5 text-white'>KFC</h1>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center bg-[#EFE9E8] hover:bg-[#F0EEEE] px-5 py-1 rounded-2xl gap-3'>
                        <span className='text-3xl'> <MdOutlineStar /> </span>
                        <div>
                            <h4 className='font-medium text-2xl'>4.6</h4>
                            <p className='text-[#6E6B6B] -mt-1'>200+</p>
                        </div>
                    </div>
                    <div className='bg-[#EFE9E8] w-16 h-[54px] hover:bg-[#F0EEEE] flex items-center justify-center rounded-2xl'>
                        <span className='text-3xl '> <IoInformationCircleOutline /> </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;