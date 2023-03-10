import React from 'react';
import Hero from '../components/Home/Hero';

import Cards from '../components/Home/Cards';
import Service from '../components/Home/Service';
import About from '../components/Home/About';
import Testimonial from '../components/Home/Testimonial';
import Publication from '../components/Home/Publication';
// import MyCarousel1 from '../components/Home/MyCarousel1';
import { MyCarousel } from '../components/Home/Carousel/MyCarousel';
import OldCara from '../components/Home/Carousel/OldCara';


const Home = () => {
    return (
        <>
            <Hero />
            {/* <MyCarousel /> */}
            <OldCara />
            <Cards />
            <Service />
            <About />
            <Testimonial />
            <Publication />
        </>
    )
}

export default Home
