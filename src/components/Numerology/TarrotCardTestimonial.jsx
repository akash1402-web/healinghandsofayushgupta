import React, { useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from '../Home/TestimonialCard';
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from 'swiper';
import { Navigation } from 'swiper';
import { Pagination } from "swiper";

SwiperCore.use(
    [Navigation]
)

const TarrotCardTestimonial = () => {
    const [level, setLevel] = useState(0);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const testimonials = [
        {
            quote:
                ' The best tarot reader i came across very humble gave clear advice felt very positive after the session',
            author: 'Sonam',
            date: '23/12/2022',
        },
        {
            quote:
                'Ayush is an excellent healer and tarot card reader.He tries to understand the problem in Dept and helps understand the reason for the issue and also gives possible solutions. The healing sessions I took from him have benefited me a lot . Anyone looking for a healing session should definitely reach out',
            author: 'Namratha D',
            date: '23/5/2023',
        },

        // Add more testimonial objects as needed
    ];

    const handleNext = () => {
        setLevel((prevLevel) => (prevLevel + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setLevel((prevLevel) => (prevLevel - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div id="client">

            <h1 className='text-center font-[600px] text-2xl  mt-5 lg:hidden '>what our client has to say</h1>
            <div className='w-full lg:flex gap-10 mt-[70px] justify-between  hidden'>
                <div className='lg:flex flex-col gap-5 hidden'>
                    <h3 className='text-4xl w-[280px] '>What our client has to say</h3>
                    <div className='flex gap-3 mt-[78px] items-center'>
                        <button className="p-4 bg-[#8777D7] w-max rounded-lg text-white font-bold" ref={prevRef} onClick={handlePrev}><FaArrowLeft size={12} /></button>
                        {level + 1}/2
                        <button className="p-4 bg-[#8777D7] w-max rounded-lg text-white font-bold " ref={nextRef} onClick={handleNext}><FaArrowRight size={12} /></button>
                    </div>
                    {/* <a href="#"><button className="px-[42px] py-[13px] bg-[#8777D7] w-max rounded-lg text-white font-bold">Read All</button></a> */}
                </div>

                <Swiper spaceBetween={20} slidesPerView={2} grabCursor={2} className='mySwiper '
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                        el: ".achivement-dots",
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
                        <TestimonialCard testimonial={testimonials[(level + 0) % testimonials.length]} index={level} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard testimonial={testimonials[(level + 1) % testimonials.length]} index={level + 1} />
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <TestimonialCard testimonial={testimonials[(level + 2) % testimonials.length]} index={level + 2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard testimonial={testimonials[(level + 3) % testimonials.length]} index={level + 3} />
                    </SwiperSlide> */}

                </Swiper>

            </div>
            <div className="lg:hidden block">
                <Swiper spaceBetween={20} slidesPerView={2} grabCursor={2} className='mySwiper mb-4'
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                        el: ".achivement-dots",
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
                        <TestimonialCard testimonial={testimonials[(level + 0) % testimonials.length]} index={level} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard testimonial={testimonials[(level + 1) % testimonials.length]} index={level + 1} />
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <TestimonialCard testimonial={testimonials[(level + 2) % testimonials.length]} index={level + 2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard testimonial={testimonials[(level + 3) % testimonials.length]} index={level + 3} />
                    </SwiperSlide> */}

                </Swiper>
                <div className='achivement-dots text-center'></div>
            </div>

        </div>
    )
}

export default TarrotCardTestimonial
