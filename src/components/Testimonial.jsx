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
        <div className='px-5'>

            <h1 className='text-center font-[600px] text-2xl  mt-5 md:hidden px-[40px]'>what our client has to say</h1>
            <div className='w-full flex gap-10 md:px-[40px] px-[22px] mt-[70px] justify-between '>
                <div className='md:flex flex-col gap-5 hidden'>
                    <h3 className='text-4xl w-[280px] '>What our client has to say</h3>
                    <div className='flex gap-3 mt-[78px] items-center'>
                        <button className="p-4 bg-[#8777D7] w-max rounded-lg text-white font-bold" ref={prevRef}><FaArrowLeft size={20} /></button>
                        1/4
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
                    loop={true}
                    // paginationStyle={{
                    //     position: 'absolute',
                    //     top: 0,
                    //     right: 0,
                    //     bottom: 1000,
                    //     left: 265,
                    // }}
                    // pagination={{
                    //     clickable: true,
                    // }}
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

            <button className='w-[100%] h-[40px] rounded-sm  bg-white  border-2 border-[#282828] mt-8  md:hidden hover:bg-navitem'>View All</button>



        </div>
    )
}

export default Testimonial
