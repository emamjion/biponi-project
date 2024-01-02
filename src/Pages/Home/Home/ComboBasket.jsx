import React, { useEffect, useState } from 'react';
import { GoPlus } from "react-icons/go";


const ComboBasket = () => {
    const [baskets, setBaskets] = useState([]);
    useEffect(() => {
        fetch('combo-basket.json').then(res => res.json()).then(data => setBaskets(data))
    }, [])
    
    return (
        <div className='mt-12'>
            <h1 className='font-bold text-3xl '>Combo Basket</h1>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-6'>
                {
                    baskets.map(basket => <div
                        key={basket.id}
                        className=''
                    >
                        <div className='bg-[#FFFFFF] p-3 rounded-3xl h-full'>
                            <img src={basket.image} className='' />
                            <div>
                                <h2 className='text-2xl font-medium my-3'>{basket.price} $</h2>
                                <h4 className=''>{basket.name}</h4>
                            </div>
                            <div className='text-center mt-4 flex items-center justify-center relative'>
                                {/* TODO: Button will be fixed with bottom corner */}
                                <button className='flex items-center justify-center bg-[#F5F4F2] px-5 py-2 rounded-xl w-full' >
                                    <span className='mr-1'> <GoPlus /> </span>
                                    <span className='text-md'>Add</span>
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ComboBasket;