// import React, { useState } from 'react';
import img1 from '../Assets/img1.png';
import img2 from '../Assets/img2.png';
import img3 from '../Assets/img3.png';
import img4 from '../Assets/img4.png';
import img5 from '../Assets/img5.png';
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
// const MyCarousel = () => {
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

// export default MyCarousel


import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

SwiperCore.use(
    [Navigation]
)

export default class MyCarousel extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 2,
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
                        // showNavigation={this.state.showNavigation}
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
                 block '>
                    <h1 className='text-center font-[600px] text-2xl mt-[60px] mb-[32px]'>Customer Stories</h1>
                    <Swiper spaceBetween={20} slidesPerView={2} grabCursor={2} className='mySwiper'
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
                        // pagination={{
                        //     clickable: true,
                        // }}
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
                            <img src={img1} className='w-[244px] h-[226px]  rounded-lg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img2} className='w-[244px] h-[226px] rounded-lg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img3} className='w-[244px] h-[226px] rounded-lg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img4} className='w-[244px] h-[226px] rounded-lg' />
                        </SwiperSlide>

                    </Swiper>
                </div>




            </>


        );
    }
}
