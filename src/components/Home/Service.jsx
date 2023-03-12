import React from 'react';
import s1c1 from '../../Assets/s1c1.png';
import s1c2 from '../../Assets/s1c2.png';
import s1c3 from '../../Assets/s1c3.png';
import s1c4 from '../../Assets/s1c4.png';
import ourservicecard from '../../Assets/mobileHomeService.png';

const HoverComp = () => {
    return (
        <div className='absolute right-2 top-2 z-10 bg-white rounded-md flex items-center p-2 transition-all duration-500 group-hover:right-0 group-hover:top-1 group-hover:scale-110'>
            <img src={require("../../Assets/Icons/ArrowUp.png")} className="w-[16px] h-[16px]" alt="Arrow" />
            <p className='hidden transition-all duration-500 group-hover:block ml-2 font-bold text-[#282828] text-small'>Open</p>
        </div>
    )
}

const Service = () => {
    return (
        <div className='flex w-full mt-20 justify-between md:gap-12 lg:flex-row flex-col'>
            <h1 className='text-center md:text-4xl font-[600px] text-2xl md:font-normal lg:hidden'>Our Services</h1>
            <div className='lg:flex flex-col hidden justify-between'>
                <h2 className='text-[#282828] text-4xl'>Our Services</h2>
                <p className='w-[546px] text-[#565A5C] my-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum augue sed tempor facilisis</p>
                <button className='mt-[31px] cursor-pointer bg-[#282828] w-[191px] h-[50px] text-white font-bold px-[42px]py-[13px] rounded-lg'>Explore More</button>
                <img src={s1c4} alt="yoga" className=' md:w-[590px] h-[314px] mt-[40px] rounded-md transition-all duration-500 hover:scale-110' />
            </div>
            <div className='md:flex flex-col md:gap-8 hidden'>
                <div className='w-full relative group'>
                    <HoverComp />
                    <img src={s1c1} alt="yoga" className='md:w-[785px] md:h-[314px] w-[100%] h-[200px] rounded-md transition-all duration-500 hover:scale-110' />
                </div>

                <div className='flex justify-between gap-3 md:gap-6'>
                    <div className='w-full relative group'>
                        <HoverComp />
                        <img src={s1c3} alt="yoga" className='w-full md:h-[195px] h-[150px] rounded-md transition-all duration-500 group-hover:scale-110' />
                    </div>
                    <div className='w-full relative group'>
                        <HoverComp />
                        <img src={s1c2} alt="yoga" className='w-full md:h-[195px] h-[150px] rounded-md transition-all duration-500 hover:scale-110' />
                    </div>
                </div>
            </div>

            <div className='md:hidden flex mt-3 justify-center'>
                <img src={ourservicecard} alt="cards-read" />
            </div>
        </div>
    )
}

export default Service
