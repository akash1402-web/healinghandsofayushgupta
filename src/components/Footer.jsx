import React from 'react';
import logo from '../Assets/logo.png';
import twitter from '../Assets/twitter.png';
import facebook from '../Assets/facebook.png';
import instagram from '../Assets/instagram.png';

const Footer = () => {
    return (
        <div className='w-full flex md:flex-row md:justify-around flex-col bg-[#282828] pt-[31px] pl-20 pr-5 mt-20'>
            <div className='flex-col my-auto'>
                <div className='flex gap-2 items-center'>
                    <img src={logo}></img>
                    <p className='text-white text-2xl w-[144px] '>Ayush Gupta</p>
                </div>
                <p className='text-[#FFD982] ml-[30px]'>The Raiki center</p>

            </div>
            <div className='md:w-[2px] w-[74px] h-[200px] md:block hidden bg-[#ABB8C3]'>

            </div>
            <div className='flex text-white flex-col '>
                <h1 className='text-2xl  font-[600px]'>Contact us</h1>
                <p className='mt-[9px] w-[598px]'>Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum augue sed tempor facilisis</p>
                <p className='mt-[35px]'>Phone: +91 1234567899</p>
                <p className='mt-[44px]'>Email: Xyz@gmail.com</p>
                <center className='md:mt-[48px] text-[#FAFAFA] text-xs'>Copyright © All rights reserved</center>
            </div>
            <div className='md:w-[2px] w-[74px] h-[200px] md:block hidden bg-[#ABB8C3]'>

            </div>
            <div className='flex-col text-2xl font-[600px] text-white'>
                Follow US On
                <div className='flex justify-center gap-10 mt-[14px]'>
                    <img src={twitter} alt="twitter-logo"></img>
                    <img src={facebook} alt="facebook-logo"></img>
                    <img src={instagram} alt="instagram-logo"></img>
                </div>
            </div>
        </div>
    )
}

export default Footer
