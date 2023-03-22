import React from 'react';
import pc1 from "../../Assets/pc1.png";
import pc2 from "../../Assets/pc2.png";
import pc3 from "../../Assets/pc3.png";
import publication from "../../Assets/publication.png"
import { FaArrowRight } from 'react-icons/fa';

const Publication = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row lg:items-end overflow-x-hidden mt-20 md:items-center'>
            <div className='flex flex-col md:gap-4 gap-3 items-center md:items-start md:flex-1'>
                <h3 className='text-[18px] text-[#8777D7] leading-[23.4px] md:block hidden font-bold'>Articles</h3>

                <h2 className='md:hidden block text-2xl font-[600px]'>Read latest collections</h2>
                <p className='text-[44px] leading-[57.2px] md:block hidden'>Publication</p>

                <a href="/blogs" className='text-[18px] text-[#8777D7] leading-[23.4px] underline font-bold md:flex md:items-center hidden'>
                    Read My Blogs <FaArrowRight size={15} />
                </a>

                <a href="https://www.amazon.in/Reiki-Bramhand-Urja-Rahasyamai-Chikitsa/dp/B097MFQMKD" className='text-[18px] text-[#8777D7] leading-[23.4px]  md:hidden block'>
                    Read My Book
                </a>

                <div className='flex md:flex-col gap-2 flex-col-reverse md:items-start items-center'>
                    <a href="https://www.amazon.in/Reiki-Bramhand-Urja-Rahasyamai-Chikitsa/dp/B097MFQMKD" className='md:hidden'><button className='w-40 h-14 bg-[#8777D7]  rounded-lg text-white font-bold '>Buy Now</button></a>

                    <p className='md:text-[26px] font-[600px] leading-[33px] '>create cozy Dinning Room Vibes</p>
                    <div className='relative'>
                        <img src={publication} className='md:w-[582px] md:h-[637px] w-[234px] h-[256px] object-cover' alt="book-logo"></img>
                        <p className='absolute md:block hidden left-12 bottom-28 text-white'>Tips and Tricks</p>
                        <a href="https://www.amazon.in/Reiki-Bramhand-Urja-Rahasyamai-Chikitsa/dp/B097MFQMKD" className='absolute left-10 bottom-10 hidden md:block'><button className='w-40 h-14  bg-[#FFFFFF33]/[20%]  rounded-lg text-white font-bold'>Buy Now</button></a>
                    </div>

                </div>
            </div>

            <div className='flex items-center justify-between mt-[60px]'>
                <h2 className='text-xl font-[600px] md:hidden block'>Blogs</h2>
                <h2 className='text-[#8777D7] font-semibold text-lg md:hidden block'>Read All Blogs</h2>
            </div>

            <div className='flex flex-col gap-2 items-center md:items-start md:flex-1 md:mt-0 mt-5'>
                <div className='flex flex-row gap-3'>
                    <img src={pc1} className='md:w-[260px] md:h-[260px] w-[106px] h-full object-contain' alt="card1"></img>
                    <div className='flex flex-col justify-center md:gap-4 md:px-[26px]'>
                        <p className=" text-[#AFADB5] md:text-lg text-xs">Tips and Tricks</p>
                        <h3 className='font-bold md:text-2xl md:max-w-[318px]'>6 way to give your home minimistic vibes</h3>
                        <div>
                            <p className=' text-[#AFADB5] text-xs md:text-lg'>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .
                            </p>
                            <a href="/blogs" className='text-[#8777D7] font-semibold md:text-base text-xs'>Read more</a>
                        </div>

                        <p className='text-[#AFADB5] md:block hidden'>Friday, 1 April 2022</p>
                    </div>
                </div>
                <div className='flex flex-row gap-3'>
                    <img src={pc2} className='md:w-[260px] md:h-[260px] w-[106px] h-full object-cover' alt="card2"></img>
                    <div className='flex flex-col justify-center md:gap-4 md:px-[26px]'>
                        <p className="text-[#AFADB5] text-xs md:text-lg">Tips and Tricks</p>
                        <h3 className='font-bold md:text-2xl md:max-w-[318px]'>6 way to give your home minimistic vibes</h3>
                        <div>
                            <p className=' text-[#AFADB5] text-xs md:text-lg'>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .
                            </p>
                            <a href="/blogs" className='text-[#8777D7] font-semibold md:text-base text-xs'>Read more</a>
                        </div>
                        <p className='text-[#AFADB5] md:block hidden'>Friday, 1 April 2022</p>

                    </div>
                </div>
                <div className='flex flex-row gap-3 '>
                    <img src={pc3} className='md:w-[260px] md:h-[260px] w-[106px] h-full object-cover' alt="card3"></img>
                    <div className='flex flex-col justify-center md:gap-4 md:px-[26px]'>
                        <p className="text-[#AFADB5] text-xs md:text-lg">Tips and Tricks</p>
                        <h3 className='font-bold md:text-2xl md:max-w-[318px]'>6 way to give your home minimistic vibes</h3>
                        <div>
                            <p className=' text-[#AFADB5] text-xs md:text-lg'>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .
                            </p>
                            <a href="/blogs" className='text-[#8777D7] font-semibold md:text-base text-xs'>Read more</a>
                        </div>
                        <p className='text-[#AFADB5] md:block hidden'>Friday, 1 April 2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Publication
