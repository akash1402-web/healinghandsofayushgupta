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

const RaikiHealTestimonial = () => {
    const [level, setLevel] = useState(0);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const testimonials = [
        {
            quote:
                ' I can`t thank you enough for the work you are doing on the planet. I am grateful for the time we have spent together. You have enriched my life, coming in just when I needed your gifts of Reiki. Thank you for being the enlightened soul you are.',
            author: 'Deepti',
            date: '23/12/2022',
        },
        {
            quote:
                'It was amazing, Ayush bhai is like doctor of everything, it is like nothing is impossible for these guy. I suggest everyone to meet Ayush bhai at least one time in life and you will forget every problem of life.',
            author: 'Jatin',
            date: '23/5/2023',
        },
        {
            quote:
                ' He is an amazing guy with an extra ordinary talent. He is somewhere savior of my papa`s life too during covid times. I really appreciate him for his selfless efforts ( miracles) by providing reiki healing to the needy one`s. Thank you is really not enough to express how grateful you `ve made us.',
            author: 'Manjari',
            date: '23/3/2023',
        },
        {
            quote:
                ' Inspite of being young Ayush Gupta possesses incredible knowledge. He has a very thereauptic presence, he is available whenever you want his service and his reiki healing affects your mind and body in a very positive manner. I am grateful for his selfless services to my family',
            author: 'Kranti Kulkarni',
            date: '23/1/2023',
        }
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
                        {level + 1}/4
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
                    <SwiperSlide>
                        <TestimonialCard testimonial={testimonials[(level + 2) % testimonials.length]} index={level + 2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard testimonial={testimonials[(level + 3) % testimonials.length]} index={level + 3} />
                    </SwiperSlide>

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
                    <SwiperSlide>
                        <TestimonialCard testimonial={testimonials[(level + 2) % testimonials.length]} index={level + 2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TestimonialCard testimonial={testimonials[(level + 3) % testimonials.length]} index={level + 3} />
                    </SwiperSlide>

                </Swiper>
                <div className='achivement-dots text-center'></div>
            </div>

            <a><button className='w-[100%] h-[40px] rounded-md  bg-white  border-2 border-[#282828] mt-8  md:hidden hover:bg-navitem'>View All</button></a>
        </div>
    )
}

export default RaikiHealTestimonial