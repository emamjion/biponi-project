import React from 'react';
import { FaGift } from "react-icons/fa";

const FreeDevlivery = () => {
    return (
        <div className='main-container'>
            <div className='bg-[#E4F2DC] mt-10 p-6  rounded-2xl hover-container'>
                <div className='flex items-center gap-3'>
                    <span className='bg-[#48C600] text-white p-2 text-2xl rounded-full'> <FaGift /> </span>
                    <div>
                        <p className='text-[#72AA52]'>Free delivery - off any order</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center flex-col mt-4 tooltip-container'>
                <div className='bg-[#fff] w-40 md:w-52 h-20 md:h-32 flex items-start justify-center flex-col rounded-3xl'>
                    <div className='mx-auto'>
                        <h1 className='font-semibold text-lg md:text-2xl'>Free Develivery</h1>
                        <p>Off any order</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeDevlivery;