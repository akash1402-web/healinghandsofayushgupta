import React from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const Statement = () => {
    return (
        <div className='w-full flex justify-center items-center md:mt-[150px] mt-[80px] relative px-[20px]'>
            <div className='flex flex-col gap-8 mb-[150px]'>
                <RiDoubleQuotesL size={35} className='text-[#8777D7] absolute md:left-44 -top-14 md:block hidden' />
                <RiDoubleQuotesL size={25} className='text-[#8777D7] absolute md:left-44 -top-14 md:hidden block' />
                <p className='md:w-[785px] md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada, ex vel mattis ullamcorper, ex lectus condimentum nisl, ut auctor nisi dui et ligula. Nam luctus libero vitae nisl rutrum accumsan. Ut scelerisque, eros a tempus dictum, nisl ipsum volutpat nisl, nec aliquet elit urna eu nisi.</p>
                <RiDoubleQuotesR size={35} className='text-[#8777D7] absolute md:right-48 md:top-28 top-40 right-0 md:block hidden' />
                <RiDoubleQuotesR size={25} className='text-[#8777D7] absolute md:right-48 md:top-28 top-48 right-[5%]  md:hidden block' />


            </div>

        </div>
    )
}

export default Statement
