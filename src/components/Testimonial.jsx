import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import TestimonialCard from './TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
// import "swiper/css/bundle";
import "swiper/css/pagination";
import SwiperCore from 'swiper';
import { Navigation } from 'swiper';
import { Pagination } from "swiper";

SwiperCore.use(
    [Navigation]
)

// import required modules


const Testimonial = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>

            <h1 className='text-center font-bold text-2xl  mt-5 md:hidden'>what our client has to say</h1>
            <div className='w-full flex gap-10 md:px-[40px] px-[22px] mt-[70px] justify-between '>
                <div className='md:flex flex-col gap-5 hidden'>
                    <h3 className='text-4xl w-[280px] '>What our client has to say</h3>
                    <div className='flex gap-12 mt-[78px]'>
                        <button className="p-4 bg-[#8777D7] w-max rounded-lg text-white font-bold" ref={prevRef}><FaArrowLeft size={20} /></button>
                        <button className="p-4 bg-[#8777D7] w-max rounded-lg text-white font-bold " ref={nextRef}><FaArrowRight size={20} /></button>
                    </div>
                    <a href="#"><button className="px-[42px] py-[13px] bg-[#8777D7] w-max rounded-lg text-white font-bold">Read All</button></a>
                </div>
                {/* <TestimonialCard /> */}

                <Swiper spaceBetween={20} slidesPerView={2} grabCursor={2} className='mySwiper'
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[
                        Pagination
                    ]
                    }
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}>

                    <SwiperSlide>
                        <TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard />
                    </SwiperSlide>

                </Swiper>


            </div>
            <div>

            </div>
            <button className='w-[388px] h-[40px] rounded-sm  bg-white  border-2 border-[#282828] mt-8 mr-2 ml-2 md:hidden'>View All</button>
        </>
    )
}

export default Testimonial
