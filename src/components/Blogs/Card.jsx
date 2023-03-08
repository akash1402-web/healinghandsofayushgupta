import React from 'react';
import about2 from '../../Assets/about-h2.png';

const Card = () => {
    return (
        <div className='flex md:flex-col md:w-[440px] gap-3 md:gap-0'>
            <img src={about2} alt="card-img" className='md:w-full md:h-[330px] object-cover w-[142px] h-[127px]' />

            <div className='flex flex-col'>
                <h3 className='md:mt-[40px] md:text-2xl text-[#282828] gap-3'>
                    Integer Maecenas Eget Viverra
                </h3>
                <div className='flex  md:mt-[20px] gap-5'>
                    <div className='md:flex items-center gap-3 hidden'>
                        <img src={about2} alt="profile" className='h-[30px] w-[30px] rounded-full object-cover' />
                        <p>Ayush Gupta</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className='w-[28px] h-[1px] bg-[#6C757D66]/40 md:block hidden'>
                        </div>
                        <p className='text-sm md:text-base text-[#6C757D]'>
                            June 28, 2018
                        </p>
                    </div>

                </div>
                <p className='mt-[16px] text-[#6C757D] text-sm h-[97px] md:block hidden'>
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                </p>
                <a href="/publication" className='md:mt-[10px] mt-auto font-bold text-[#8777D7] border-b-[2px] border-[#8777D7] w-max '>Read More</a>
            </div>
        </div>
    )
}

export default Card
