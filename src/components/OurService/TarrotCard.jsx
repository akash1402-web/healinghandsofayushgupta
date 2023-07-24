import React from 'react';
import tarrotCard from '../../Assets/tarrotcard.png';
import { Link } from 'react-router-dom';

const TarrotCard = () => {
    return (
        <div className='w-full lg:flex lg:justify-between  md:mt-[200px] mt-[100px]'>
            <img src={tarrotCard} alt="numerologylogo" className='lg:w-[545px] lg:h-[467px] lg:block hidden mr-[90px]' />
            <h3 className='lg:hidden block font-[600px] text-2xl text-center sm:text-3xl sm:font-bold'>Tarot Card Reading</h3>

            <div className='lg:block hidden'>
                <h3 className='text-5xl font-bold '>Tarot Card Reading</h3>
                <p className='w-[670px] mt-[20px] font-sans text-xl'>We can not deny the significance of numbers in our life. Every person’s name is associated with such numbers and numerology is the science that helps us synchronizing our Root number, Soul urge number and destiny number with our Name, and Date of birth. Vibrations of certain numbers are favorable similarly vibrations of certain numbers are unfavorable , which determines our destiny and fortune and correcting these numbers balance these vibrations and energies make us more efficient and helps us become the best version of ourselves.
                </p>
                <Link to="/tarrotcard"><button className='px-[40px] py-[13px] bg-[#8777D7] w-max rounded-lg text-white font-bold lg:mt-[69px] mx-auto lg:mx-0 mt-5'>See More</button></Link>
            </div>
            {/* <div className='sm:hidden flex sm:justify-around mx-[20px]'>
                <img src={tarrotCard} alt="numerologylogo" className=' w-[205px] h-[209px]' />
                <p className='mt-[20px] font-sans text-sm  w-[184px] h-[216px]'>A tarot card reading is a tool of divination to help you get answers to your questions. Practitioners use tarot cards to gain insight into the past, present or future.</p>
            </div> */}
            <div className='flex lg:hidden flex-col'>
                <p className='mt-[20px] font-sans text-sm sm:text-xl text-center'>We can not deny the significance of numbers in our life. Every person’s name is associated with such numbers and numerology is the science that helps us synchronizing our Root number, Soul urge number and destiny number with our Name, and Date of birth. Vibrations of certain numbers are favorable similarly vibrations of certain numbers are unfavorable , which determines our destiny and fortune and correcting these numbers balance these vibrations and energies make us more efficient and helps us become the best version of ourselves.</p>
                <div className='flex justify-center'>
                    <img src={tarrotCard} alt="numerologylogo" className='w-[70%] mt-[40px] ' />
                </div>


            </div>
            <Link to="/tarrotcard"><button className=' px-[140px] py-[13px] bg-[#8777D7] w-max rounded-lg text-white font-bold  mx-auto  lg:hidden block mt-10'>See More</button></Link>
        </div>
    )
}

export default TarrotCard
