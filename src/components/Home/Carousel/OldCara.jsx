
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import Img1 from '../../../Assets/img1.png';
// import Img2 from '../../../Assets/img2.png';
// import Img3 from '../../../Assets/img3.png';
// import Img4 from '../../../Assets/img4.png';
// import Img5 from '../../../Assets/img5.png';
// import './OldCara.css';
// import { useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import "swiper/css";
// // import "swiper/css/bundle";
// import "swiper/css/pagination";
// import SwiperCore from 'swiper';
// import { Navigation } from 'swiper';
// import { Pagination } from "swiper";
// const OldCara = () => {

//     let carouselArray;
//     useEffect(() => {
//         carouselArray = Array.from(document.querySelectorAll(".carousel-item"));

//     }, []);

//     const updateClasses = () => {
//         carouselArray.forEach((el) => {
//             el.classList.remove("carousel-item-1");
//             el.classList.remove("carousel-item-2");
//             el.classList.remove("carousel-item-3");
//             el.classList.remove("carousel-item-4");
//             el.classList.remove("carousel-item-5");
//         });

//         carouselArray.forEach((el, i) => {
//             el.classList.add(`carousel-item-${i + 1}`);
//         });

//     };

//     const goLeft = () => {

//         carouselArray.unshift(carouselArray.pop());
//         updateClasses();

//     };

//     const goRight = () => {

//         carouselArray.push(carouselArray.shift());
//         updateClasses();

//     };

//     return (
//         <>

//             <div className="carousel md:block hidden">
//                 <div className="carousel-container">
//                     <img
//                         className={"carousel-item carousel-item-1"}
//                         src={Img1}
//                         alt="carousel"
//                     />
//                     <img
//                         className={"carousel-item carousel-item-2"}
//                         src={Img2}
//                         alt="carousel"
//                     />
//                     <img
//                         className={"carousel-item carousel-item-3"}
//                         src={Img3}
//                         alt="carousel"
//                     />
//                     <img
//                         className={"carousel-item carousel-item-4"}
//                         src={Img4}
//                         alt="carousel"
//                     />
//                     <img
//                         className={"carousel-item carousel-item-5"}
//                         src={Img5}
//                         alt="carousel"
//                     />
//                 </div>
//                 <div className="controls">
//                     <button onClick={goLeft}><FaArrowLeft size={20} /></button>
//                     {/* <div className='dots'>
//                         {dots.map((dot, i) => (
//                             <div className={
//                                 i === activedot ? "dot active" : "dot"
//                             }>

//                             </div>
//                         ))}
//                     </div> */}
//                     <button onClick={goRight}> <FaArrowRight size={20} /></button>
//                 </div>
//             </div>
//             <div className='md:hidden
//                  block px-[20px]'>
//                 <h1 className='text-center font-[600px] text-2xl mt-[40px] mb-[10px]'>Customer Stories</h1>
//                 <Swiper slidesPerView={1} grabCursor={2} className='mySwiper'

//                     loop={true}

//                     pagination={{
//                         clickable: true,
//                         el: ".achivement-dots"
//                     }}
//                     modules={[
//                         Pagination
//                     ]
//                     }>


//                     <SwiperSlide>
//                         <div className='flex justify-center'>
//                             <img src={Img1} className='w-full  rounded-lg object-cover' />
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className='flex justify-center'>
//                             <img src={Img2} className='w-full   rounded-lg object-cover' />
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className='flex justify-center'>
//                             <img src={Img3} className='w-full rounded-lg object-cover' />
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className='flex justify-center'>
//                             <img src={Img4} className='w-full   rounded-lg object-cover' />
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <div className='flex justify-center'>
//                             <img src={Img5} className='w-full   rounded-lg object-cover' />
//                         </div>
//                     </SwiperSlide>

//                 </Swiper>
//                 <div className='achivement-dots mt-[10px] text-center'></div>
//             </div>
//         </>


//     );
// };

// export default OldCara;




import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import "swiper/css";
import "swiper/css/pagination";

import Img1 from '../../../Assets/img1.png';
import Img2 from '../../../Assets/img2.png';
import Img3 from '../../../Assets/img3.png';
import Img4 from '../../../Assets/img4.png';
import Img5 from '../../../Assets/img5.png';

import ActiveDot from '../../../Assets/ActiveDot.svg';
import InactiveDot from '../../../Assets/InactiveDot.svg';

import './OldCara.css';

let img = [Img1, Img2, Img3, Img4, Img5];

const OldCara = () => {
    const [currentCenter, setCurrentCenter] = useState(2);
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(img);
    }, [])

    const goLeft = (isDot, ind) => {
        img.unshift(img[4]);
        img.pop();

        setImages([...img]);

        if (isDot) {
            setCurrentCenter(ind);
        } else {
            if (currentCenter === 0) {
                setCurrentCenter(4);
            } else {
                setCurrentCenter(Math.abs(currentCenter - 1) % 5)
            }
        }
    };

    const goRight = (isDot, ind) => {
        const s = img[0];
        img.shift();
        img.push(s);
        setImages([...img]);

        if (isDot) {
            setCurrentCenter(ind);
        } else {
            setCurrentCenter(Math.abs((currentCenter + 1)) % 5);
        }
    };

    const dotClick = (ind) => {
        if (ind < currentCenter) {
            for (let i = 0; i < currentCenter - ind; i++) {
                goLeft(true, ind);
            }
        } else {
            for (let i = 0; i <= ind - currentCenter; i++) {
                goRight(true, ind);
            }
        }
    }

    const CarouselImage = ({ Img, ind }) => {
        return (
            <img
                className={`cursor-pointer carousel-item carousel-item-${ind}`}
                src={Img}
                alt="carousel"
                onClick={() => goRight(false)}
            />
        )
    }

    return (
        <>
            <div className="carousel md:block hidden">
                <div className="carousel-container">
                    {
                        images?.map((val, ind) => {
                            return <CarouselImage key={ind} Img={val} ind={ind + 1} />
                        })
                    }
                </div>
                <div className="controls">
                    <button onClick={() => goLeft(false)} className="mr-4"><FaArrowLeft size={20} /></button>
                    {
                        images?.map((val, ind) => {
                            return <img alt='dot' className='cursor-pointer' src={currentCenter === ind ? ActiveDot : InactiveDot} width={16} height={16} onClick={() => dotClick(ind)} />
                        })
                    }
                    <button onClick={() => goRight(false)} className="ml-4"> <FaArrowRight size={20} /></button>
                </div>
            </div>
            <div className='md:hidden
                 block px-[20px]'>
                <h1 className='text-center font-[600px] text-2xl mt-[40px] mb-[10px]'>Customer Stories</h1>
                <Swiper slidesPerView={1} grabCursor={2} className='mySwiper'

                    loop={true}
                    modules={[
                        Pagination
                    ]}
                    pagination={{
                        clickable: true,
                        el: ".achivement-dots1",
                    }}>
                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <img src={Img1} className='w-full  rounded-lg object-cover' alt="Carousel" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <img src={Img2} className='w-full   rounded-lg object-cover' alt="Carousel" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <img src={Img3} className='w-full rounded-lg object-cover' alt="Carousel" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <img src={Img4} className='w-full   rounded-lg object-cover' alt="Carousel" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <img src={Img5} className='w-full   rounded-lg object-cover' alt="Carousel" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='achivement-dots1 text-center mx-2'></div>
            </div>
        </>
    );
};

export default OldCara;