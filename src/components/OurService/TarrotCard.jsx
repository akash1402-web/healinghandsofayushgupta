import React from 'react';
import tarrotCard from '../../Assets/tarrotcard.png';
import { Link } from 'react-router-dom';

const TarrotCard = () => {
    return (
        <div className='w-full md:flex md:justify-between md:px-[40px] md:mt-[200px] mt-[100px]'>
            <img src={tarrotCard} alt="numerologylogo" className='md:w-[545px] md:h-[467px] md:block hidden mr-[90px]' />
            <h3 className='md:hidden block font-[600px] text-2xl text-center'>Tarrot Card Reading</h3>

            <div className='md:block hidden'>
                <h3 className='text-5xl font-bold '>Tarrot Card Reading</h3>
                <p className='w-[670px] mt-[20px] font-sans text-xl'>We can not deny the significance of numbers in our life. Every person’s name is associated with such numbers and numerology is the science that helps us synchronizing our Root number, Soul urge number and destiny number with our Name, and Date of birth. Vibrations of certain numbers are favorable similarly vibrations of certain numbers are unfavorable , which determines our destiny and fortune and correcting these numbers balance these vibrations and energies make us more efficient and helps us become the best version of ourselves.
                </p>
                <Link to="/tarrotcard"><button className='px-[40px] py-[13px] bg-[#8777D7] w-max rounded-lg text-white font-bold md:mt-[69px] mx-auto md:mx-0 mt-5'>See More</button></Link>
            </div>
            <div className='md:hidden flex justify-between mx-[20px]'>
                <img src={tarrotCard} alt="numerologylogo" className=' w-[205px] h-[209px]' />
                <p className='mt-[20px] font-sans text-sm  w-[184px] h-[216px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum augue sed tempor facilisis. Vestibulum tristique dolor non fermentum facilisis.
                </p>
            </div>
            <Link to="/tarrotcard"><button className=' px-[140px] py-[13px] bg-[#8777D7] w-max rounded-lg text-white font-bold  mx-auto  md:hidden block sm:mt-10'>See More</button></Link>
        </div>
    )
}

export default TarrotCard
