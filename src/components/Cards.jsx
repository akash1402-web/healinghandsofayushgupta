import React from 'react';
import health from '../Assets/health.png';
import relationship from '../Assets/relationship.png';
import peace from '../Assets/peace.png';
import abundance from '../Assets/abundance.png';
import growth from '../Assets/growth.png';


const Cards = () => {
    return (
        <>

            <div className='flex items-center justify-center md:gap-10 gap-3'>
                <div className='md:w-[338px] w-[74px] h-[2px]  bg-[#8777D7]'>

                </div>
                <h2 className='md:text-4xl text-2xl text-[#282828] '>Ayush Gupta</h2>
                <div className='md:w-[338px] w-[74px] h-[2px] bg-[#8777D7]'>

                </div>
            </div>

            <div className='flex mt-20 md:px-[40px] md:gap-12 sm:gap-3 gap-y-10 justify-center flex-wrap'>
                <div className='flex flex-col gap-3 md:w-[200px] w-[115px] items-center'>
                    <img src={health} alt="health" className='md:w-[82px] md:h-[82px] w-[52px] h-[52px] ' />
                    <h3 className='font-bold'>Health</h3>
                    <p className='md:text-sm text-xs text-center'>Achieve physical, mental, emotional, and spiritual well-being</p>
                </div>
                <div className='md:w-[2px] w-[2px] md:h-[200px] h-[180px]  bg-[#ABB8C3] '>

                </div>
                <div className='flex flex-col gap-3 md:w-[200px] w-[115px] items-center'>
                    <img src={abundance} alt="health" className='md:w-[82px] md:h-[82px] w-[52px] h-[52px]' />
                    <h3 className='font-bold'>Abundance</h3>
                    <p className='md:text-sm text-xs text-center'>Achieve physical, mental, emotional, and spiritual well-being</p>
                </div>
                <div className='md:w-[2px] w-[2px] md:h-[200px] h-[180px]  bg-[#ABB8C3] '>

                </div>
                <div className='flex flex-col gap-3 md:w-[200px] w-[115px] items-center'>
                    <img src={relationship} alt="health" className='md:w-[82px] md:h-[82px] w-[52px] h-[52px]' />
                    <h3 className='font-bold'>Relationships</h3>
                    <p className='md:text-sm text-xs text-center'>Achieve physical, mental, emotional, and spiritual well-being</p>
                </div>
                <div className='md:w-[2px]  md:h-[200px] h-[180px] md:block hidden bg-[#ABB8C3] '>

                </div>
                <div className='flex flex-col gap-3 md:w-[200px] w-[115px] items-center'>
                    <img src={peace} alt="health" className='md:w-[82px] md:h-[82px] w-[52px] h-[52px]' />
                    <h3 className='font-bold'>Peace</h3>
                    <p className='md:text-sm text-xs text-center'>Achieve physical, mental, emotional, and spiritual well-being</p>
                </div>
                <div className='md:w-[2px] w-[2px] md:h-[200px] h-[180px]  bg-[#ABB8C3] '>

                </div>
                <div className='flex flex-col gap-3 md:w-[200px] w-[115px] items-center'>
                    <img src={growth} alt="health" className='md:w-[82px] md:h-[82px] w-[52px] h-[52px]' />
                    <h3 className='font-bold text-center'>Personal Growth</h3>
                    <p className='md:text-sm text-xs text-center'>Achieve physical, mental, emotional, and spiritual well-being</p>
                </div>

            </div>
        </>
    )
}

export default Cards
