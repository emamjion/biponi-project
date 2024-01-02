import React from 'react';
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';

const LeftContent = () => {
    return (
        <div className='sticky top-0'>
            <button className='flex items-center gap-1 bg-[#fff] hover:bg-[#fafaf9] w-full md:w-60 h-12 pl-4 rounded-xl'>
                <span className='text-2xl'> <BiLeftArrowAlt /> </span>
                <span className='text-lg font-medium'>All restaurants</span>
            </button>
            <div className='mt-8'>
                <h1 className='text-xl font-medium'>Menu</h1>
                <nav className='mt-2'>
                    <NavLink to='/' className='block mt-6 font-medium text-lg'>What's new</NavLink>
                    <NavLink to='/basket' className='block mt-6 font-medium text-lg'>Combo Basket</NavLink>
                    <NavLink to='/juicy' className='block mt-6 font-medium text-lg'>Juicy chicken</NavLink>
                    <NavLink to='/snacks' className='block mt-6 font-medium text-lg'>Snacks</NavLink>
                    <NavLink to='/combo' className='block mt-6 font-medium text-lg'>Combo</NavLink>
                    <NavLink to='/drinks' className='block mt-6 font-medium text-lg'>Drinks</NavLink>
                    <NavLink to='/additionally' className='block mt-6 font-medium text-lg'>Additionally</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default LeftContent;