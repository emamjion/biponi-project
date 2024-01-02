import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import MainContent from '../Pages/Home/Home/MainContent';

const MainLayout = () => {
    return (
        <div className='bg-[#F5F4F2]'>
            <Navbar/>
            
            <Outlet/>

            <Footer/>
        </div>
    );
};

export default MainLayout;