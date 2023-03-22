import React from 'react';
import logo from '../Assets/logo.png';
import twitter from '../Assets/twitter.png';
import facebook from '../Assets/facebook.png';
import instagram from '../Assets/instagram.png';
import twitter1 from '../Assets/twitter1.png';
import insta1 from '../Assets/insta1.png';
import fb1 from '../Assets/fb1.png';
import phone1 from '../Assets/phone1.png';
import email1 from '../Assets/email1.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className='w-full flex lg:flex-row lg:justify-around flex-col bg-[#282828] md:pt-[31px] md:pl-20 md:pr-5 lg:mt-20 mt-[138px] p-5'>
                <div className='flex-col my-auto'>
                    <div className='flex gap-2 items-center'>
                        <img src={logo}></img>
                        <p className='md:text-white text-[#8777D7] md:text-2xl w-[144px] text-[18px] '>Ayush Gupta</p>
                    </div>
                    <p className='md:text-[#FFD982] text-[#EAECF0] md:ml-[30px] ml-[45px]'>The Raiki center</p>

                </div>
                <div className='md:w-[2px] w-[74px] h-[200px] lg:block hidden bg-[#ABB8C3]'>

                </div>
                <div className='flex text-white flex-col md:mt[31px] mt-[19px]'>
                    <h1 className='md:text-2xl  font-[600px] text-[16px]'>Contact us</h1>
                    <div className='flex lg:flex-row flex-col mt-[9px] gap-2'>
                        <p>Address :</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum augue sed tempor facilisis</p>
                    </div>
                    <div className='flex lg:flex-row flex-col mt-[35px] gap-2'>
                        <p>Phone :</p>
                        <p>+91 9987560606</p>
                    </div>
                    <div className='flex lg:flex-row flex-col mt-[44px] gap-2'>
                        <p>Email :</p>
                        <a href="mailto:info@healinghandsofaayushgupta.com"><p>Info@healinghandsofaayushgupta.com</p></a>
                    </div>
                    <center className='md:mt-[48px] text-[#FAFAFA] text-xs lg:block hidden'>Copyright © All rights reserved</center>
                </div>
                <div className='md:w-[2px] w-[74px] h-[200px] lg:block hidden bg-[#ABB8C3]'>

                </div>
                <div className='flex-col text-2xl font-[600px] text-white lg:block hidden'>
                    Follow us on
                    <div className='flex justify-center gap-10 mt-[14px]'>
                        <a href="https://twitter.com/reikiayush"><img src={twitter} alt="twitter-logo"></img></a>
                        <a href="https://facebook.com/reikimasterayush"><img src={facebook} alt="facebook-logo"></img></a>
                        <a href="https://instagram.com/ayushguptareiki"><img src={instagram} alt="instagram-logo"></img></a>
                    </div>
                </div>


            </div>
            <div className='w-[100%] flex flex-col md:hidden gap-5 bg-[#1A1A1A] '>
                <div className='flex gap-5 justify-center pt-[40px]'>
                    <a href="https://twitter.com/reikiayush"><img src={twitter1} alt="twitter-logo" /></a>
                    <a href="https://facebook.com/reikimasterayush"><img src={fb1} alt="twitter-logo" /></a>
                    <a href="https://instagram.com/ayushguptareiki"><img src={insta1} alt="twitter-logo" /></a>
                    <a href="tel:+91 9987560606	"><img src={phone1} alt="twitter-logo" /></a>
                    <img src={email1} alt="twitter-logo" />
                </div >
                <div className='flex justify-center text-[#98A2B3] pb-[47px]'>
                    Copyright © All rights reserved
                </div>
            </div >

        </>
    )
}

export default Footer
