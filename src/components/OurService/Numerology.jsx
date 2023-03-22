import React from 'react';
import numerology from '../../Assets/numerology.png';
import { Link } from 'react-router-dom';

const Numerology = () => {

    return (
        <div className='w-full lg:flex lg:justify-between lg:px-[40px] lg:mt-[200px] mt-[100px]'>
            <h3 className='lg:hidden block font-[600px] text-2xl text-center sm:text-3xl sm:font-bold'>Numerology</h3>
            <div className='lg:block hidden'>
                <h3 className='text-5xl font-bold '>Numerology</h3>
                <p className='w-[670px] mt-[20px] font-sans text-xl'>We cannot deny the significance of numbers in our lives. Every person’s name is associated with such numbers and numerology is the science that helps us synchronizing our Root number, Soul urge number and destiny number with our Name, and Date of birth. Vibrations of certain numbers are favourable similarly vibrations of certain numbers are unfavourable, which determines our destiny and fortune and correcting these numbers balance these vibrations and energies make us more efficient and helps us become the best version of ourselves.
                </p>
                <Link to="/numerology"> <button className='px-[40px] py-[13px] bg-[#8777D7] w-max rounded-lg text-white font-bold lg:mt-[69px] mx-auto lg:mx-0 mt-5'>See More</button></Link>
            </div>
            {/* <div className='sm:hidden flex sm:justify-around mx-[20px]'>
                <p className='mt-[20px] font-sans text-sm  w-[184px] h-[216px]'>We cannot deny the significance of numbers in our lives. Every person’s name is associated with such numbers and numerology is the science that helps us synchronizing our Root number.
                </p>
                <img src={numerology} alt="numerologylogo" className=' w-[205px] h-[209px]' />

            </div> */}
            <div className='flex lg:hidden flex-col'>
                <div className='flex justify-center'>
                    <img src={numerology} alt="numerologylogo" className='w-[70%] mt-[40px] ' />
                </div>
                <p className='mt-[20px] font-sans text-sm sm:text-xl text-center'>We cannot deny the significance of numbers in our lives. Every person’s name is associated with such numbers and numerology is the science that helps us synchronizing our Root number, Soul urge number and destiny number with our Name, and Date of birth. Vibrations of certain numbers are favourable similarly vibrations of certain numbers are unfavourable, which determines our destiny and fortune and correcting these numbers balance these vibrations and energies make us more efficient and helps us become the best version of ourselves.
                </p>



            </div>
            <img src={numerology} alt="numerologylogo" className='lg:w-[545px] md:h-[467px] lg:block hidden mr-[90px]' />
            <Link to="/numerology"> <button className='px-[140px] py-[13px] bg-[#8777D7] w-max rounded-lg text-white font-bold  mx-auto  lg:hidden block mt-24'>See More</button></Link>
        </div>
    )
}

export default Numerology
