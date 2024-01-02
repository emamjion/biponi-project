import React from 'react';
import MainContent from './MainContent';

const Home = () => {
    return (
        <div className='pb-12'>
            <div className='mt-6 flex flex-col md:flex-row mx-6 md:mx-12 lg:mx-[80px]'>
                <div className='border md:w-[15%] p-4'>Left</div>
                <div className='flex-1 my-6 md:my-0 bg-[#F5F4F2]'>
                    <MainContent/>
                </div>
                <div className='border md:w-[15%] p-4'>right</div>
            </div>
            
        </div>
    );
};

export default Home;