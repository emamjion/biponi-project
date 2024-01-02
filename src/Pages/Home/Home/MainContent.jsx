import React from 'react';
import Banner from './Banner';
import FreeDevlivery from './FreeDevlivery';
import ComboBasket from './ComboBasket';
import JuicyChicken from './JuicyChicken';
import Snacks from './Snacks';

const MainContent = () => {
    return (
        <div className='px-6 bg-[#F5F4F2]'>
            <Banner/>
            <FreeDevlivery/>
            <ComboBasket/>
            <JuicyChicken/>
            <Snacks/>
        </div>
    );
};

export default MainContent;