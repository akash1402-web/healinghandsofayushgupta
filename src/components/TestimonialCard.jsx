import React from 'react';
import publication from '../Assets/publication.png';
import { RiDoubleQuotesL } from 'react-icons/ri'

const TestimonialCard = () => {
    return (
        <div className='flex flex-col md:w-[440px] gap-5 shadow-lg md:p-[25px] p-[20px] text-[#282828] w-[185px]'>
            <RiDoubleQuotesL size={45} className='text-[#8777D7]' />
            <p className='text-base md:block hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum augue sed tempor facilisisLorem ipsum dolor sit amet, ectetur adipiscing elit. Curabitur condimentum augue sed tempor facilisisLorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className='text-sm  md:hidden'>I love creating new think every single days so let’s do it together it was wonderful to work with you.</p>
            <div className='flex gap-3 items-center'>
                <img src={publication} className="md:w-16 md:h-16 w-8 h-8 object-cover rounded-full" alt="profile" />
                <div className='flex flex-col gap-2'>
                    <p className=''>Jack Right</p>
                    <span className='md:text-base text-xs text-[#565A5C]'>23/12/2022</span>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
