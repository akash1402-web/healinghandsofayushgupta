import React from 'react';
import about2 from '../../Assets/about-h2.png';
import { Link } from 'react-router-dom';
const RaikiHeal = () => {
    return (
        <div className='w-full lg:flex lg:justify-between lg:px-[40px] lg:mt-[200px] mt-[100px]'>
            <img src={about2} alt="numerologylogo" className='lg:w-[545px] lg:h-[467px] lg:block hidden mr-[90px]' />
            <h3 className='lg:hidden block font-[600px] text-2xl text-center sm:font-bold sm:text-3xl'>Reiki Healing</h3>
            <div className='lg:block hidden'>
                <h3 className='text-5xl font-bold'>Reiki Healing</h3>
                <p className='w-[670px] mt-[20px] font-sans text-xl'>The process of channelizing energies from universe and using them for healing people, correcting their aura, treating people mental, physical and professional problems.
                    We interact with a lot of people in our day to day life and often times we come across individuals with imbalanced energies, and it’s very usual for our energies to clash at that point which enervates our aura, and weaker aura leads to undesired circumstances and situations, also fondly known as our good of problems. And these problems can be fixed by transforming the negative energies into positive energy and stabilizing the aura.
                </p>
                <Link to="/raikiheal"><button className='px-[40px] py-[13px] bg-[#8777D7] w-max rounded-lg text-white font-bold lg:mt-[69px] mx-auto lg:mx-0 mt-5'>See More</button></Link>
            </div>
            <div className='lg:hidden flex flex-col'>
                <p className='mt-[20px] font-sans text-sm sm:text-xl text-center'>The process of channelizing energies from universe and using them for healing people, correcting their aura, treating people mental, physical and professional problems.
                    We interact with a lot of people in our day to day life and often times we come across individuals with imbalanced energies, and it’s very usual for our energies to clash at that point which enervates our aura, and weaker aura leads to undesired circumstances and situations, also fondly known as our good of problems. And these problems can be fixed by transforming the negative energies into positive energy and stabilizing the aura.</p>
                <div className='flex justify-center'>
                    <img src={about2} alt="about-me" className='w-[70%]  mt-[40px] align-middle' />
                </div>


            </div>
            <Link to="/raikiheal"><button className=' px-[140px] py-[13px] bg-[#8777D7] w-max rounded-lg text-white font-bold  mx-auto  lg:hidden block mt-10'>See More</button></Link>
        </div>
    )
}

export default RaikiHeal
