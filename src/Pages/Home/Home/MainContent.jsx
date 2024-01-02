import React from 'react';
import Banner from './Banner';
import FreeDevlivery from './FreeDevlivery';
import ComboBasket from './ComboBasket';
import JuicyChicken from './JuicyChicken';
import Snacks from './Snacks';
import Combo from './Combo';
import Drinks from './Drinks';

const MainContent = () => {
    return (
        <div className='px-6 bg-[#F5F4F2]'>
            <Banner/>
            <FreeDevlivery/>
            <ComboBasket/>
            <JuicyChicken/>
            <Snacks/>
            <Combo/>
            <Drinks/>
        </div>
    );
};

export default MainContent;