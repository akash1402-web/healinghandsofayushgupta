import React from 'react';
import raikiheal from '../../Assets/raikiheal.png';
import tarrotservice from '../../Assets/tarrot-service.png';
import Chakra from './Chakra';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
// import "swiper/css/bundle";
import "swiper/css/pagination";
import SwiperCore from 'swiper';
import { Navigation } from 'swiper';
import { Pagination } from "swiper";

const RaikiHeal = () => {
    return (
        <div className='w-full  md:px-[40px] px-[20px]'>
            <div className=' mt-[36px]'>
                <h2 className='md:text-4xl font-400 md:leading-[80px] text-2xl'>Raiki Healing</h2>
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col md:leading-[40px] md:text-xl md:w-[900px]  md:mt-[150px] items-center'>
                    <img src={raikiheal} alt="numerology-img" className=' md:mt-[115px] md:hidden w-[181px] h-[253px]' />
                    <p className='text-center md:text-left'>You are energetically designed to have a life of magnificence.
                        Within you is a powerful, in-built chakra system, which creates for you a beautiful life, filled with all the things you cherish and adore.
                    </p>

                    <p className='md:mt-[50px] text-center md:text-left mt-[30px]'>Going within and changing your energy, is the only sure fire way to change your life because the state of your energy field determines the state of your life. our energy field, also called your aura, is a magnificent field of pure energy that exists all around you. It not only surrounds your entire body, it also radiates out from beneath your feet, either side of your body and above your head.</p>

                    <p className='md:mt-[50px] text-center md:text-left mt-[30px]'>
                        Your energy field consists of twelve different levels of vibration. These levels of vibration are called ‘chakras‘, and these chakras are found at specific places within your physical body or in your energy field. Six of the twelve chakras are found in the body, and the other six are located above the head.
                    </p>
                </div>
                <img src={raikiheal} alt="numerology-img" className='mr-[40px] md:mt-[50px] md:block hidden' />

            </div>

            <p className='md:leading-[40px] md:text-xl mt-[30px] text-center md:text-left'>
                Each one of your chakras energetically fuels and sustains aspects of your life and your body. They do this by receiving energy for your energy field from the universe and then transporting this energy into a certain area of your life and body. Think of the chakras as happy, eager, diligent workers, who spend all day looking after, managing and organizing every aspect of your life.
                There is a chakra, whose job it is to look after your career, a chakra that looks after your abundance, one who makes sure you rest and enjoy yourself, and one that supports you in discovering and living out your creativity. It’s that amazing! Within you is a marvellous inbuilt system, that creates for you a joyful, creative, abundant, fulfilling and beautiful life.</p>

            <p className='md:leading-[40px] md:text-xl mt-[50px] text-center md:text-left'>Aren’t we generously crafted and designed!
                What you need to understand about yourself is this: Every aspect of your life works if the chakras are doing their job properly.
                This understanding is the key to a magical life. If your chakras are all working properly, your life is magical, beautiful and exciting, full of everything you could ever dream of and desire.</p>

            <p className='md:leading-[40px] md:text-xl md:mt-[50px] md:block hidden'>If most of your chakras are working, your life is wonderful with a few hiccups here and there.</p>
            <div className='md:block hidden'>
                <Chakra />
            </div>

            <div className='md:hidden
                 block px-[10px]'>
                <h1 className='text-center font-[600px] text-2xl mt-[40px] mb-[10px]'>Achievements</h1>
                <Swiper slidesPerView={1} grabCursor={2} className='mySwiper'
                    // navigation={{
                    //     prevEl: ".swiper-button-prev",
                    //     nextEl: ".swiper-button-next",
                    // }}
                    loop={true}
                    // paginationStyle={{
                    //     position: 'absolute',
                    //     top: 0,
                    //     right: 0,
                    //     bottom: 1000,
                    //     left: 265,
                    // }}
                    pagination={{
                        clickable: true,
                        el: ".achivement-dots"
                    }}
                    modules={[
                        Pagination
                    ]
                    }
                // onInit={(swiper) => {
                //     swiper.params.navigation.prevEl = prevRef.current;
                //     swiper.params.navigation.nextEl = nextRef.current;
                //     swiper.navigation.init();
                //     swiper.navigation.update();
                // }}
                >

                    <SwiperSlide>
                        <div className='flex justify-center bg-[#A497C8]/[0.13]'>
                            <p className='p-3'>The first level of your energy anatomy is the base chakra.This chakra is located at the base of your spine and its job is to look after the spine, hips, legs, feet, as well your physical body in general. It makes sure that you receive everything you needs to survive, i.e food, water, shelter.</p>
                        </div>
                        <h4 className='w-full text-center mt-[28px]'>level 1</h4>
                        <h4 className='w-full text-center'>Your Base Chakra</h4>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center bg-[#A497C8]/[0.13]'>
                            <p className='p-3'>The first level of your energy anatomy is the base chakra.This chakra is located at the base of your spine and its job is to look after the spine, hips, legs, feet, as well your physical body in general. It makes sure that you receive everything you needs to survive, i.e food, water, shelter.</p>
                        </div>
                        <h4 className='w-full text-center mt-[28px]'>level 2</h4>
                        <h4 className='w-full text-center'>Your Base Chakra</h4>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center bg-[#A497C8]/[0.13]'>
                            <p className='p-3'>The first level of your energy anatomy is the base chakra.This chakra is located at the base of your spine and its job is to look after the spine, hips, legs, feet, as well your physical body in general. It makes sure that you receive everything you needs to survive, i.e food, water, shelter.</p>
                        </div>
                        <h4 className='w-full text-center mt-[28px]'>level 3</h4>
                        <h4 className='w-full text-center'>Your Base Chakra</h4>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center bg-[#A497C8]/[0.13]'>
                            <p className='p-3'>The first level of your energy anatomy is the base chakra.This chakra is located at the base of your spine and its job is to look after the spine, hips, legs, feet, as well your physical body in general. It makes sure that you receive everything you needs to survive, i.e food, water, shelter.</p>
                        </div>
                        <h4 className='w-full text-center mt-[28px]'>level 4</h4>
                        <h4 className='w-full text-center'>Your Base Chakra</h4>
                    </SwiperSlide>

                </Swiper>
                <div className='achivement-dots mt-[10px] text-center'></div>
            </div>

            <div className='flex flex-col  items-center'>
                <h4 className='text-center md:mt-[283px] md:text-4xl md:leading-[46px] mt-[130px]'>Our Services</h4>
                <img src={tarrotservice} alt="img" className='md:mt-[60px] mt-[30px]'></img>
                <button className='px-[40px] py-[13px] mt-[60px] md:mb-[200px] bg-[#8777D7] w-max rounded-lg text-white font-bold'>Book an Appointment</button>
            </div>



        </div >
    )
}

export default RaikiHeal
