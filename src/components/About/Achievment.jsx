import React from 'react';
import certi from '../../Assets/certi.png';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
// import "swiper/css/bundle";
import "swiper/css/pagination";
import SwiperCore from 'swiper';
import { Navigation } from 'swiper';
import { Pagination } from "swiper";

const Achievment = () => {
    return (
        <>
            <div className='w-full px-[40px] mt-[180px] md:block hidden'>
                <div className='text-4xl'>
                    Achivements
                </div>
                <div className='flex flex-row flex-wrap gap-4 mx-[40px] justify-center'>
                    <div className='flex-col flex w-[325px] '>
                        <img src={certi} alt="certificate" className='w-full' />
                        <p className='w-full text-center'>Certificate of world’s youngest reiki therapist</p>
                    </div>
                    <div className='flex-col flex w-[325px]'>
                        <img src={certi} alt="certificate" />
                        <p className='w-full text-center'>Certificate of world’s youngest reiki therapist</p>
                    </div>
                    <div className='flex-col flex w-[325px]'>
                        <img src={certi} alt="certificate" />
                        <p className='w-full text-center'>Certificate of world’s youngest reiki therapist</p>
                    </div>
                    <div className='flex-col flex w-[325px]'>
                        <img src={certi} alt="certificate" />
                        <p className='w-full text-center'>Certificate of world’s youngest reiki therapist</p>
                    </div>
                    <div className='flex-col flex w-[325px]'>
                        <img src={certi} alt="certificate" />
                        <p className='w-full text-center'>Certificate of world’s youngest reiki therapist</p>
                    </div>
                    <div className='flex-col flex w-[325px]'>
                        <img src={certi} alt="certificate" />
                        <p className='w-full text-center'>Certificate of world’s youngest reiki therapist</p>
                    </div>
                    <div className='flex-col flex w-[325px]'>
                        <img src={certi} alt="certificate" />
                        <p className='w-full text-center'>Certificate of world’s youngest reiki therapist</p>
                    </div>



                </div>
            </div>

            <div className='md:hidden
                 block px-[20px]'>
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
                        <div className='flex justify-center'>
                            <img src={certi} className='w-[244px] h-[226px]  rounded-lg object-cover' />
                        </div>
                        <p className='w-full text-center'>Certificate of world’s youngest reiki therapist</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <img src={certi} className='w-[244px] h-[226px]  rounded-lg object-cover' />
                        </div>
                        <p className='w-full text-center'>Certificate of world’s youngest reiki therapist</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <img src={certi} className='w-[244px] h-[226px]  rounded-lg object-cover' />
                        </div>
                        <p className='w-full text-center'>Certificate of world’s youngest reiki therapist</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <img src={certi} className='w-[244px] h-[226px]  rounded-lg object-cover' />
                        </div>
                        <p className='w-full text-center'>Certificate of world’s youngest reiki therapist</p>
                    </SwiperSlide>

                </Swiper>
                <div className='achivement-dots mt-[10px] text-center'></div>
            </div>


        </>

    )
}

export default Achievment
