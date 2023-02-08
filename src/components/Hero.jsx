import React from 'react';
import homeicon from "../Assets/home-icon.png"


const Hero = () => {
    return (
        <section className='w-full px-[40px]  justify-between flex flex-col md:flex-row items-center bg-rect bg-cover bg-no-repeat'  >
            <div className='flex flex-col md:gap-2 max-w-[600px] mt-20 md:mt-0 md:text-left text-center items-center md:items-start'>
                <h1 className='text-3xl md:text-6xl font-bold md:leading-[80px] '>
                    Watch your breath
                    Relax your mind
                </h1>
                <p className='text-[#565A5C] md:block hidden'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum augue sed tempor facilisis. Vestibulum tristique dolor non ferment.
                </p>
                <button className='px-[42px] py-[13px] bg-[#8777D7] w-max rounded-lg text-white font-bold md:mt-[69px] mx-auto md:mx-0 mt-5'>Book Now</button>
            </div>
            <img src={homeicon} alt="yoga logo" className='md:mr-20' />
        </section>
    )
}

export default Hero
