import React from 'react';
import health from '../../Assets/health.png';
import relationship from '../../Assets/relationship.png';
import peace from '../../Assets/peace.png';
import abundance from '../../Assets/abundance.png';
import growth from '../../Assets/growth.png';


const Cards = () => {
    return (
        <>
            <div className='flex items-center justify-center md:gap-10 gap-3 mt-[70px]'>
                <div className='md:w-[338px] w-[74px] h-[2px]  bg-[#8777D7]' />
                <h2 className='md:text-4xl text-2xl text-[#282828] '>Ayush Gupta</h2>
                <div className='md:w-[338px] w-[74px] h-[2px] bg-[#8777D7]' />
            </div>
            <div className='flex mt-20 md:gap-10 sm:gap-3 gap-y-10 justify-center xl:justify-between flex-wrap'>
                <div className='flex flex-col gap-3 md:w-[200px] w-[115px] items-center px-2'>
                    <img src={health} alt="health" className='md:w-[82px] md:h-[82px] w-[52px] h-[52px] ' />
                    <h3 className='font-bold'>Health</h3>
                    <p className='md:text-sm text-xs text-center'>Become physically, mentally, emotionally and spiritually well-being.</p>
                </div>
                <div className='md:w-[2px] w-[2px] md:h-[200px] h-[180px] bg-[#E9E9E9] '>

                </div>
                <div className='flex flex-col gap-3 md:w-[200px] w-[115px] items-center  px-2'>
                    <img src={abundance} alt="health" className='md:w-[82px] md:h-[82px] w-[52px] h-[52px]' />
                    <h3 className='font-bold'>Abundance</h3>
                    <p className='md:text-sm text-xs text-center'>Attract happiness, success and great moments and money.</p>
                </div>
                <div className='md:w-[2px] w-[2px] md:h-[200px] h-[180px] bg-[#E9E9E9] ' />

                <div className='flex flex-col gap-3 md:w-[200px] w-[115px] items-center  px-2'>
                    <img src={relationship} alt="health" className='md:w-[82px] md:h-[82px] w-[52px] h-[52px]' />
                    <h3 className='font-bold'>Relationships</h3>
                    <p className='md:text-sm text-xs text-center'>Strengthening strained connections will improve communications and passions.</p>
                </div>
                <div className='md:w-[2px]  md:h-[200px] h-[180px] md:block hidden bg-[#E9E9E9] ' />

                <div className='flex flex-col gap-3 md:w-[200px] w-[115px] items-center  px-2'>
                    <img src={peace} alt="health" className='md:w-[82px] md:h-[82px] w-[52px] h-[52px]' />
                    <h3 className='font-bold'>Peace</h3>
                    <p className='md:text-sm text-xs text-center'>Discover enduring happiness, tranquillity and liveliness.</p>
                </div>
                <div className='md:w-[2px] w-[2px] md:h-[200px] h-[180px]  bg-[#E9E9E9]  ' />

                <div className='flex flex-col gap-3 md:w-[200px] w-[115px] items-center  px-2'>
                    <img src={growth} alt="health" className='md:w-[82px] md:h-[82px] w-[52px] h-[52px]' />
                    <h3 className='font-bold text-center'>Personal Growth</h3>
                    <p className='md:text-sm text-xs text-center'>Discover your life’s purpose, boost your confidence and enhance your intuition.</p>
                </div>
            </div>
        </>
    )
}

export default Cards
