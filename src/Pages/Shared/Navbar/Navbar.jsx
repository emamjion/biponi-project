import React from 'react';
import { FaLocationArrow } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Navbar = () => {
    return (
        // TODO: Only the shadow will be visible when scrolled.
        <div className='flex items-center justify-between px-4 md:px-12 py-16 md:py-0 gap-3 md:gap-0 border-b h-24 sticky top-0 z-10 shadow-lg bg-[#fff] scroll-smooth'>
            <div className='md:flex items-center gap-6'>
                <h1 className='text-3xl font-bold mb-2 md:mb-0'>Food Court<span className='text-[#F2D700]'>.</span></h1>
                <button className='bg-[#F2D700] border-2 border-[#D2D0CC] flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-2xl hover:bg-[#ebcc42] '>
                    <span> <FaLocationArrow /> </span>
                    <span className='font-medium'>Enter delivery address</span>
                </button>
            </div>
            <div className='flex items-center gap-2 md:gap-6'>
                <div className=''>
                    <span className='flex items-center justify-center'> <TbWorld /> </span>
                    <span className=''>English</span>
                </div>
                <button className='px-5 py-2.5 bg-[#E7E6E4] font-medium rounded-2xl'>Log in</button>
            </div>
        </div>
    );
};

export default Navbar;