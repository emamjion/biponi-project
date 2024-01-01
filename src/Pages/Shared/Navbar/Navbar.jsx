import React from 'react';
import { FaLocationArrow } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Navbar = () => {
    return (
        <div className='md:flex items-center justify-between mx-12 mt-6'>
            <div>
                <h1>Food Court<span>.</span></h1>
                <button>
                    <span> <FaLocationArrow /> </span>
                    <span>Enter Delivery address</span>
                </button>
            </div>
            <div>
                <div>
                    <span> <TbWorld /> </span>
                    <span>English</span>
                </div>
                <button>Log in</button>
            </div>
        </div>
    );
};

export default Navbar;