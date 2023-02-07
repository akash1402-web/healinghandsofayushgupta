import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import logo from "../Assets/logo.png"
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className='flex justify-between items-center h-[68px] bg-navcolor text-black'>
            <div className='hidden md:flex items-center px-[42px] gap-9'>
                <img src={logo} alt="logo" />
                <ul className='flex items-center gap-4 text-sm'>
                    <li className='hover:text-navitem transition-all duration-100 cursor-pointer'>Home</li>
                    <li className='hover:text-navitem transition-all duration-100 cursor-pointer'>About</li>
                    <li className='hover:text-navitem transition-all duration-100 cursor-pointer'>Our Services</li>
                    <li className='hover:text-navitem transition-all duration-100 cursor-pointer'>Publication</li>
                    <li className='hover:text-navitem transition-all duration-100 cursor-pointer'>Gallery</li>
                    <li className='hover:text-navitem transition-all duration-100 cursor-pointer'>Contact us</li>
                </ul>
            </div>

            <div className='flex md:hidden justify-between w-full items-center px-[21px] gap-9 relative z-10'>
                <img src={logo} alt="logo" />

                <div className="cursor-pointer" onClick={() => { setMenuOpen(!menuOpen) }}>
                    {
                        menuOpen ? <GrClose size={20} /> : <GiHamburgerMenu size={20} />
                    }
                </div>
                <ul className={menuOpen ? 'flex flex-col gap-4 text-sm absolute -bottom-64 bg-[#F5F5F5] w-full left-0 p-[21px] shadow-lg' : 'hidden flex-col gap-4 text-sm absolute -bottom-80 bg-[#F5F5F5] w-full left-0 p-[21px] '}>
                    <li className='hover:text-navitem transition-all duration-100 cursor-pointer'>Home</li>
                    <li className='hover:text-navitem transition-all duration-100 cursor-pointer'>About</li>
                    <li className='hover:text-navitem transition-all duration-100 cursor-pointer'>Our Services</li>
                    <li className='hover:text-navitem transition-all duration-100 cursor-pointer'>Publication</li>
                    <li className='hover:text-navitem transition-all duration-100 cursor-pointer'>Gallery</li>
                    <li className='hover:text-navitem transition-all duration-100 cursor-pointer'>Contact us</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
