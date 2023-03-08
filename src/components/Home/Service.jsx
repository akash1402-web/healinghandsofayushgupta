import React from 'react';
import s1c1 from '../../Assets/s1c1.png';
import s1c2 from '../../Assets/s1c2.png';
import s1c3 from '../../Assets/s1c3.png';
import s1c4 from '../../Assets/s1c4.png';
import ourservicecard from '../../Assets/mobileHomeService.png'

const Service = () => {
    return (
        // <div className='flex w-full mt-20 px-[40px] gap-12 md:flex-row flex-col'>
        //     <h1 className='text-center md:text-4xl font-[600px] text-2xl md:font-normal md:hidden'>Our Services</h1>
        //     <div className='md:flex flex-col hidden'>
        //         <h2 className='text-[#282828] text-4xl'>Our Services</h2>
        //         <p className='w-[546px] text-[#565A5C] my-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum augue sed tempor facilisis</p>
        //         <button className='mt-[31px] cursor-pointer bg-[#282828] w-[191px] h-[50px] text-white font-bold px-[42px]py-[13px] rounded-lg'>Explore More</button>
        //         <img src={s1c4} alt="yoga" className='w-[590px] h-[314px] mt-[40px] rounded-md' />
        //     </div>
        //     <div className='flex flex-col gap-8'>
        //         <img src={s1c1} alt="yoga" className='md:w-[785px] md:h-[314px] w-[100%] h-[200px] rounded-md' />
        //         <div className='flex md:gap-10 gap-5'>
        //             <img src={s1c3} alt="yoga" className='md:w-[407px] md:h-[195px] w-[45%] h-[150px] rounded-md' />
        //             <img src={s1c2} alt="yoga" className='md:w-[345px] md:h-[195px] w-[45%] h-[150px] rounded-md' />
        //         </div>
        //     </div>


        // </div>


        // <div className='flex w-full mt-20 md:px-[40px] px-[20px] gap-12 md:flex-row flex-col'>
        //     <h1 className='text-center md:text-4xl font-[600px] text-2xl md:font-normal md:hidden'>Our Services</h1>
        //     <div className='md:flex flex-col hidden'>
        //         <h2 className='text-[#282828] text-4xl'>Our Services</h2>
        //         <p className='w-[546px] text-[#565A5C] my-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum augue sed tempor facilisis</p>
        //         <button className='mt-[31px] cursor-pointer bg-[#282828] w-[191px] h-[50px] text-white font-bold px-[42px]py-[13px] rounded-lg'>Explore More</button>
        //         <img src={s1c4} alt="yoga" className='w-[590px] h-[314px] mt-[40px] rounded-md' />
        //     </div>
        //     <div className='md:flex flex-col gap-8 hidden'>
        //         <img src={s1c1} alt="yoga" className='md:w-[785px] md:h-[314px] w-[100%] h-[200px] rounded-md' />
        //         <div className='flex md:gap-10 gap-5'>
        //             <img src={s1c3} alt="yoga" className='md:w-[407px] md:h-[195px] w-[45%] h-[150px] rounded-md' />
        //             <img src={s1c2} alt="yoga" className='md:w-[345px] md:h-[195px] w-[45%] h-[150px] rounded-md' />
        //         </div>
        //     </div>

        //     <div className='md:hidden block'>
        //         <img src={ourservicecard} alt="cards-read" />
        //     </div>


        // </div>

        <div className='flex w-full mt-20 justify-center md:gap-12  lg:flex-row flex-col'>
            <h1 className='text-center md:text-4xl font-[600px] text-2xl md:font-normal lg:hidden'>Our Services</h1>
            <div className='lg:flex flex-col hidden justify-between'>
                <h2 className='text-[#282828] text-4xl'>Our Services</h2>
                <p className='w-[546px] text-[#565A5C] my-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum augue sed tempor facilisis</p>
                <button className='mt-[31px] cursor-pointer bg-[#282828] w-[191px] h-[50px] text-white font-bold px-[42px]py-[13px] rounded-lg'>Explore More</button>
                <img src={s1c4} alt="yoga" className=' md:w-[590px] h-[314px] mt-[40px] rounded-md' />
            </div>
            <div className='md:flex flex-col md:gap-8 hidden'>
                <img src={s1c1} alt="yoga" className='md:w-[785px] md:h-[314px] w-[100%] h-[200px] rounded-md' />
                <div className='flex md:gap-8 gap-5'>
                    <img src={s1c3} alt="yoga" className='md:w-[50%] md:h-[195px] w-[45%] h-[150px] rounded-md' />
                    <img src={s1c2} alt="yoga" className='md:w-[45%] md:h-[195px] w-[45%] h-[150px] rounded-md' />
                </div>
            </div>

            <div className='md:hidden flex mt-3 justify-center'>
                <img src={ourservicecard} alt="cards-read" />
            </div>


        </div>
    )
}

export default Service
