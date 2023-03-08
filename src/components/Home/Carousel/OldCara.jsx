
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Img1 from '../../../Assets/img1.png';
import Img2 from '../../../Assets/img2.png';
import Img3 from '../../../Assets/img3.png';
import Img4 from '../../../Assets/img4.png';
import Img5 from '../../../Assets/img5.png';
import './OldCara.css';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
// import "swiper/css/bundle";
import "swiper/css/pagination";
import SwiperCore from 'swiper';
import { Navigation } from 'swiper';
import { Pagination } from "swiper";
const OldCara = () => {

    let carouselArray;
    useEffect(() => {
        carouselArray = Array.from(document.querySelectorAll(".carousel-item"));

    }, []);

    const updateClasses = () => {
        carouselArray.forEach((el) => {
            el.classList.remove("carousel-item-1");
            el.classList.remove("carousel-item-2");
            el.classList.remove("carousel-item-3");
            el.classList.remove("carousel-item-4");
            el.classList.remove("carousel-item-5");
        });

        carouselArray.forEach((el, i) => {
            el.classList.add(`carousel-item-${i + 1}`);
        });

    };

    const goLeft = () => {

        carouselArray.unshift(carouselArray.pop());
        updateClasses();

    };

    const goRight = () => {

        carouselArray.push(carouselArray.shift());
        updateClasses();

    };

    return (
        <>

            <div className="carousel md:block hidden">
                <div className="carousel-container">
                    <img
                        className={"carousel-item carousel-item-1"}
                        src={Img1}
                        alt="carousel"
                    />
                    <img
                        className={"carousel-item carousel-item-2"}
                        src={Img2}
                        alt="carousel"
                    />
                    <img
                        className={"carousel-item carousel-item-3"}
                        src={Img3}
                        alt="carousel"
                    />
                    <img
                        className={"carousel-item carousel-item-4"}
                        src={Img4}
                        alt="carousel"
                    />
                    <img
                        className={"carousel-item carousel-item-5"}
                        src={Img5}
                        alt="carousel"
                    />
                </div>
                <div className="controls">
                    <button onClick={goLeft}><FaArrowLeft size={20} /></button>
                    {/* <div className='dots'>
                        {dots.map((dot, i) => (
                            <div className={
                                i === activedot ? "dot active" : "dot"
                            }>

                            </div>
                        ))}
                    </div> */}
                    <button onClick={goRight}> <FaArrowRight size={20} /></button>
                </div>
            </div>
            <div className='md:hidden
                 block px-[20px]'>
                <h1 className='text-center font-[600px] text-2xl mt-[40px] mb-[10px]'>Customer Stories</h1>
                <Swiper slidesPerView={1} grabCursor={2} className='mySwiper'

                    loop={true}

                    pagination={{
                        clickable: true,
                        el: ".achivement-dots"
                    }}
                    modules={[
                        Pagination
                    ]
                    }>


                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <img src={Img1} className='w-full  rounded-lg object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <img src={Img2} className='w-full   rounded-lg object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <img src={Img3} className='w-full rounded-lg object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <img src={Img4} className='w-full   rounded-lg object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <img src={Img5} className='w-full   rounded-lg object-cover' />
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className='achivement-dots mt-[10px] text-center'></div>
            </div>
        </>


    );
};

export default OldCara;