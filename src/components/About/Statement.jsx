import React from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const Statement = () => {
    return (
        <div className='w-full flex justify-center items-center lg:mt-[150px] mt-[80px] relative px-[20px]'>
            <div className='flex flex-col gap-8 mb-[150px]'>
                <RiDoubleQuotesL size={35} className='text-[#8777D7] absolute lg:left-44 -top-14 lg:block hidden' />
                <RiDoubleQuotesL size={25} className='text-[#8777D7] absolute lg:left-44 -top-14 lg:hidden block' />
                <p className='lg:w-[785px] lg:text-2xl font-semibold'>Meditation simply helps us to see and understand life more clearly. Clarity dictates our perspective, and our perspective dictates our experience. Get more clarity in your life through meditation.</p>
                <RiDoubleQuotesR size={35} className='text-[#8777D7] absolute lg:right-48 lg:top-28 top-40 right-0 lg:block hidden' />
                <RiDoubleQuotesR size={25} className='text-[#8777D7] absolute lg:right-48 lg:top-28 top-32 right-[5%]  lg:hidden block' />


            </div>

        </div>
    )
}

export default Statement
