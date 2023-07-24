import React from 'react';
import about2 from '../../Assets/about-h2.jpg';

const Myabout = () => {
    return (
        <>

            <div className='flex items-center lg:hidden justify-center lg:gap-10 gap-3 mt-[70px]'>
                <div className='lg:w-[338px] w-[74px] h-[2px]  bg-[#8777D7]'>

                </div>
                <h2 className='lg:text-4xl text-2xl text-[#282828] '>Ayush Gupta</h2>
                <div className='lg:w-[338px] w-[74px] h-[2px] bg-[#8777D7]'>

                </div>
            </div>

            <div className='w-full lg:flex lg:justify-between lg:px-[40px] lg:mt-[100px] mt-[20px] lg:gap-20'>
                <div className='flex lg:hidden'>
                    <img src={about2} alt="about-me" className='w-full flex justify-center' />
                    {/* <div className='flex flex-col justify-start'>
                        <img src={about5} alt="abountimg" className='h-full w-full' />
                        <img src={about6} alt="abountimg" className='h-full w-full' />
                    </div> */}
                </div>



                <img src={about2} alt="about-me" className='lg:w-[493px] lg:h-[350px] lg:block hidden' />

                <div className='lg:flex flex-col gap-5 hidden'>
                    <div className='text-[#8777D7] text-4xl'>
                        Ayush gupta
                    </div>
                    <div className='text-xl'>
                        The youngest Reiki healer in the world, the youngest numerologist in the world, the youngest tarot card reader in India, and the author of the best-selling book "Reiki- Bhrahmand ki Rahasyamayi Oorja" are all named Ayush.
                        In addition to performing over 25000+ Tarot card readings, he has used Reiki to heal over 700 individuals.
                        Over 15 schools in India have successfully adopted a paradigm of meditative and spiritual disciplines. Many Bollywood and television celebrities acknowledge Ayush Gupta and since Ayush infuse good energy into their auras, these celebrities have noticed a significant improvement in both their lives and their auras. He decided that keeping this to himself would not be equitable and started offering Reiki healing to others. He played a significant role in dispelling misconceptions and breaking down barriers by being at the forefront of teaching people about Reiki and its benefits.
                    </div>
                </div>

            </div>
            <div className='text-sm px-[20px] mt-[20px] lg:hidden'>
                The youngest Reiki healer in the world, the youngest numerologist in the world, the youngest tarot card reader in India, and the author of the best-selling book "Reiki- Bhrahmand ki Rahasyamayi Oorja" are all named Ayush.
                In addition to performing over 25000+ Tarot card readings, he has used Reiki to heal over 700 individuals.
                Over 15 schools in India have successfully adopted a paradigm of meditative and spiritual disciplines. Many Bollywood and television celebrities acknowledge Ayush Gupta and since Ayush infuse good energy into their auras, these celebrities have noticed a significant improvement in both their lives and their auras. He decided that keeping this to himself would not be equitable and started offering Reiki healing to others. He played a significant role in dispelling misconceptions and breaking down barriers by being at the forefront of teaching people about Reiki and its benefits.
            </div>

        </>

    )
}

export default Myabout
