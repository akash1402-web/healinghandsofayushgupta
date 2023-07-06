import React from 'react';
import appoint from '../../Assets/blog-img.png';
import ReactWhatsapp from 'react-whatsapp';

const Appointment = () => {
    return (
        <div className='w-full md:mt-[60px] mt-[30px] '>

            <div className='relative'>
                <img src={appoint} alt="" className='md:block hidden' />
                <img src={appoint} alt="" className='md:hidden block h-[170px]' />
                <button className='w-max p-2 absolute bottom-[60%] md:left-[48%] left-[40%]  text-white bg-[#FFFFFF33]/[20%]  font-normal'>Peace</button>
                <p className='absolute bottom-[50%] md:left-[38%] left-[28%] text-white md:text-4xl font-semibold'>Find your Inner Peace</p>
                <p className='absolute md:bottom-[42%] bottom-[40%] md:left-[30%] left-[10%] text-white md:text-2xl text-xs font-normal'>Keep Your mind calm and let the energy flow in you</p>
                <ReactWhatsapp number="+91 9987560606"><button className='w-max md:p-2 p-1 absolute md:bottom-[30%] bottom-[20%] md:left-[42%] left-[23%] text-[#8777D7] rounded-lg bg-[white]  font-normal text-xs'>Book Appointment For Reiki Healing</button></ReactWhatsapp>
            </div>
        </div>
    )
}

export default Appointment
