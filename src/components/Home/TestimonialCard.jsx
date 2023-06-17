import React from 'react';
import publication from '../../Assets/publication.png';
import { RiDoubleQuotesL } from 'react-icons/ri'

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className='flex flex-col lg:w-[440px] md:w-[380px] gap-5 shadow-md lg:p-[25px] p-[20px] text-[#282828] w-[170px]'>
            <RiDoubleQuotesL size={35} className='text-[#8777D7]' />
            <p className='text-base md:block hidden'>{testimonial.quote}</p>
            <p className='text-sm  md:hidden'>{testimonial.quote.slice(0, 100)}...</p>
            <div className='flex gap-3 items-center'>
                <img src={publication} className="md:w-16 md:h-16 w-8 h-8 object-cover rounded-full" alt="profile" />
                <div className='flex flex-col gap-2'>
                    <p className=''>{testimonial.author}</p>
                    <span className='md:text-base text-xs text-[#565A5C]'>{testimonial.date}</span>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
