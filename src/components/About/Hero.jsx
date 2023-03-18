import React from 'react';
import about1 from '../../Assets/about-h1.png';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const Hero = () => {
    return (
        <div className='w-full flex justify-between md:px-[40px] px-[20px] lg:pt-[100px] pt-[20px] items-center bg-[#F9F8FD]' >
            <div className='relative w-[568px]'>
                <RiDoubleQuotesL size={35} className='text-[#8777D7] lg:block hidden' />
                <RiDoubleQuotesL size={25} className='text-[#8777D7] lg:hidden block' />
                <p className='lg:text-sm md:ml-[40px] font-semibold'>The Science of the soul. The active turning, the strident vibrations of selfishness are to be stilled by meditation. By letting the heart and the mind dwell in the spiritual life, by lifting up the heart to the strong and silent life above, where it then rests in the stillness of eternal love and needs no harsh vibration to convince it of its true being.</p>
                <RiDoubleQuotesR size={35} className='text-[#8777D7] ml-auto lg:block hidden' />
                <RiDoubleQuotesR size={25} className='text-[#8777D7] ml-auto lg:hidden block' />
            </div>
            <img src={about1} alt="about-hero" className='mr-[200px] lg:block hidden' />

        </div>
    )
}

export default Hero
