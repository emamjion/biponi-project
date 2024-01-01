import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            
            <div className='flex flex-col md:flex-row mx-6 md:mx-12 lg:mx-[120px] h-screen'>
                <div className='border md:w-1/5 p-4'>Left</div>
                <div className='border flex-1 my-6 md:my-0'>main</div>
                <div className='border md:w-1/5 p-4'>right</div>
            </div>

            <Footer/>
        </div>
    );
};

export default MainLayout;