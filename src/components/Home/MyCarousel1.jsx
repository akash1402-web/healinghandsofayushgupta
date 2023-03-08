import React, { useState } from 'react';
import img1 from '../../Assets/img1.png';
import img2 from '../../Assets/img2.png';
import img3 from '../../Assets/img3.png';
import img4 from '../../Assets/img4.png';
import img5 from '../../Assets/img5.png';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
// import "swiper/css/bundle";
import "swiper/css/pagination";
import SwiperCore from 'swiper';
import { Navigation } from 'swiper';
import { Pagination } from "swiper";


// import { config } from 'react-spring';
// import { v4 as uuidv4 } from "uuid";
// import Carousel from "react-spring-3d-carousel";
// const MyCarousel1 = () => {
//     const [state, setState] = useState(
//         {
//             goToSlide: 0,
//             offsetRadius: 2,
//             showNavigation: true,
//             config: config.gentle
//         }
//     )
//     let slides = [
//         {
//             key: uuidv4(),
//             content: <img src={img1} alt="1" />
//         },
//         {
//             key: uuidv4(),
//             content: <img src={img2} alt="2" />
//         },
//         {
//             key: uuidv4(),
//             content: <img src={img3} alt="3" />
//         },
//         {
//             key: uuidv4(),
//             content: <img src={img4} alt="4" />
//         },
//         {
//             key: uuidv4(),
//             content: <img src={img5} alt="5" />
//         },
//     ]
//     return (
//         <Carousel
//             slides={slides}
//             goToSlide={state.goToSlide}
//             offsetRadius={state.offsetRadius}
//             showNavigation={state.showNavigation}
//             animationConfig={state.config}
//         />
//     )
// }

// export default MyCarousel1


import { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

SwiperCore.use(
    [Navigation]
)

export default class MyCarousel extends Component {
    state = {
        goToSlide: 0,
        // offsetRadius: 2,
        showNavigation: true,
        config: config.gentle
    };

    slides = [
        {
            key: uuidv4(),
            content: <img className="w-[648px] h-[340px] rounded-3xl" src={img1} alt="1" />
        },
        {
            key: uuidv4(),
            content: <img className="w-[648px] h-[340px] rounded-3xl" src={img2} alt="2" />
        },
        {
            key: uuidv4(),
            content: <img className="w-[648px] h-[340px] rounded-3xl" src={img3} alt="3" />
        },
        {
            key: uuidv4(),
            content: <img className="w-[648px] h-[340px] rounded-3xl" src={img4} alt="4" />
        },
        {
            key: uuidv4(),
            content: <img className="w-[648px] h-[340px] rounded-3xl" src={img5} alt="5" />
        },

    ].map((slide, index) => {
        return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });

    onChangeInput = e => {
        this.setState({
            [e.target.name]: parseInt(e.target.value, 10) || 0
        });
    };

    render() {
        return (
            <>
                <div style={{ width: "80%", height: "500px", margin: "0 auto" }} className='md:block hidden' >
                    <Carousel
                        slides={this.slides}
                        goToSlide={this.state.goToSlide}
                        offsetRadius={this.state.offsetRadius}
                        showNavigation={this.state.showNavigation}
                        animationConfig={this.state.config}
                    />
                    <div
                        style={{
                            margin: "0 auto",
                            marginTop: "2rem",
                            width: "50%",
                            display: "flex",
                            justifyContent: "space-around"
                        }}
                    >
                    </div>
                </div>

                <div className='md:hidden
                 block px-[20px]'>
                    <h1 className='text-center font-[600px] text-2xl mt-[60px] mb-[32px]'>Customer Stories</h1>
                    <Swiper spaceBetween={20} slidesPerView={2} grabCursor={2} className='mySwiper'
                        // navigation={{
                        //     prevEl: ".swiper-button-prev",
                        //     nextEl: ".swiper-button-next",
                        // }}
                        loop={true}
                        paginationStyle={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            bottom: 1000,
                            left: 265,
                        }}
                        pagination={{
                            clickable: true,
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
                            <img src={img1} className='w-[244px] h-[226px]  rounded-lg object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img2} className='w-[244px] h-[226px] rounded-lg object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img3} className='w-[244px] h-[226px] rounded-lg object-cover' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img4} className='w-[244px] h-[226px] rounded-lg object-cover' />
                        </SwiperSlide>

                    </Swiper>
                </div>




            </>


        );
    }
}


// import { Carousal } from ReactDOM
// class MyCarousel1 extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         let slides = [
//             <img src="https://picsum.photos/800/300/?random" alt="1" />,
//             <img src="https://picsum.photos/800/301/?random" alt="2" />,
//             <img src="https://picsum.photos/800/302/?random" alt="3" />,
//             <img src="https://picsum.photos/800/303/?random" alt="4" />,
//             <img src="https://picsum.photos/800/304/?random" alt="5" />];
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <h1 className="App-title"></h1>
//                 </header>

//                 This is our carousal Component:
//                 <br />
//                 <br />
//                 <br />
//                 <Carousal.Carousel slides={slides} />
//                 {/* Carousal.Carousal because of unpkg in developement use npm import and use only {Carousal}*/}
//             </div>
//         );
//     }
// }
// export default MyCarousel1


// // import {Carousel} from '3d-react-carousal';
// // let slides = [
// //     <img  src="https://picsum.photos/800/300/?random" alt="1" />,
// //     <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
// //     <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
// //     <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
// //     <img src="https://picsum.photos/800/304/?random" alt="5" />   ];
// // .
// // .
// // .
// // <Carousel slides={slides} autoplay={true} interval={1000}/>





// // import React from 'react';
// // import { Swiper, SwiperSlide } from 'swiper/react';

// // import 'swiper/css';
// // import 'swiper/css/effect-coverflow';
// // import 'swiper/css/pagination';
// // import 'swiper/css/navigation';

// // import { EffectCoverflow, Pagination, Navigation } from 'swiper';
// // import img1 from '../../Assets/img1.png';
// // import img2 from '../../Assets/img2.png';
// // import img3 from '../../Assets/img3.png';
// // import img4 from '../../Assets/img4.png';
// // import img5 from '../../Assets/img5.png';
// // function MyCarousel1() {
// //     return (
// //         <div className="container">

// //             <Swiper
// //                 effect={'coverflow'}
// //                 grabCursor={true}
// //                 centeredSlides={true}
// //                 loop={true}
// //                 slidesPerView={'auto'}

// //                 pagination={{ el: '.swiper-pagination', clickable: true }}
// //                 navigation={{
// //                     nextEl: '.swiper-button-next',
// //                     prevEl: '.swiper-button-prev',
// //                     clickable: true,
// //                 }}
// //                 modules={[Pagination, Navigation]}
// //                 className="swiper_container"
// //             >
// //                 <SwiperSlide>
// //                     <img src={img1} alt="slide_image" />
// //                 </SwiperSlide>
// //                 <SwiperSlide>
// //                     <img src={img2} alt="slide_image" />
// //                 </SwiperSlide>
// //                 <SwiperSlide>
// //                     <img src={img3} alt="slide_image" />
// //                 </SwiperSlide>
// //                 <SwiperSlide>
// //                     <img src={img4} alt="slide_image" />
// //                 </SwiperSlide>
// //                 <SwiperSlide>
// //                     <img src={img5} alt="slide_image" />
// //                 </SwiperSlide>
// //                 {/* <SwiperSlide>
// //                     <img src={slide_image_6} alt="slide_image" />
// //                 </SwiperSlide>
// //                 <SwiperSlide>
// //                     <img src={slide_image_7} alt="slide_image" />
// //                 </SwiperSlide> */}

// //                 <div className="slider-controler">
// //                     <div className="swiper-button-prev slider-arrow">
// //                         <ion-icon name="arrow-back-outline"></ion-icon>
// //                     </div>
// //                     <div className="swiper-button-next slider-arrow">
// //                         <ion-icon name="arrow-forward-outline"></ion-icon>
// //                     </div>
// //                     <div className="swiper-pagination"></div>
// //                 </div>
// //             </Swiper>
// //         </div>
// //     );
// // }

// // export default MyCarousel1;


// import React from 'react';
// import Slider from 'react-slick';
// import img1 from '../../Assets/img1.png';
// import img2 from '../../Assets/img2.png';
// import img3 from '../../Assets/img3.png';
// import img4 from '../../Assets/img4.png';
// import img5 from '../../Assets/img5.png';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';

// const slides = [
//     {
//         key: uuidv4(),
//         content: <img src={img1} alt="1" />
//     },
//     {
//         key: uuidv4(),
//         content: <img src={img2} alt="2" />
//     },
//     {
//         key: uuidv4(),
//         content: <img src={img3} alt="3" />
//     },
//     {
//         key: uuidv4(),
//         content: <img src={img4} alt="4" />
//     },
//     {
//         key: uuidv4(),
//         content: <img src={img5} alt="5" />
//     },
// ]
// function MyCarousel1() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         cssEase: 'linear',
//         centerMode: true,
//         centerPadding: '0',
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     arrows: false,
//                 },
//             },
//         ],
//     };

//     return (
//         <Slider {...settings}>
//             {images.map((image, index) => (
//                 <div key={index}>
//                     <img src={image} alt={`Slide ${index + 1}`} />
//                 </div>
//             ))}
//         </Slider>
//     );
// }

// export default MyCarousel1;



// import React from 'react'

// const MyCarousel1 = () => {
//   return (
//     <div className='container'>
      
//     </div>
//   )
// }

// export default MyCarousel1
