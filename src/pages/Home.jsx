import React from 'react';
import Hero from '../components/Home/Hero';

import Cards from '../components/Home/Cards';
import Service from '../components/Home/Service';
import About from '../components/Home/About';
import Testimonial from '../components/Home/Testimonial';
import Publication from '../components/Home/Publication';
import OldCara from '../components/Home/Carousel/OldCara';
import Banner from '../components/Home/Banner';

const Home = () => {
    return (
        <>
            <section className='bg-rect bg-cover'>
                <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 ">
                    <Hero />
                </div>
            </section>
            <section>
                {/* <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16">
                    <OldCara />
                </div> */}
                <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16">
                    <Banner />
                </div>
            </section>
            <section>
                <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16">
                    <Cards />
                </div>
            </section>
            <section>
                <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16">
                    <Service />
                </div>
            </section>
            <section className='lg:bg-home-about-desktop bg-home-about-mobile bg-cover'>
                <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16">
                    <About />
                </div>
            </section>
            <section>
                <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16">
                    <Testimonial />
                </div>
            </section>
            <section>
                <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16">
                    <Publication />
                </div>
            </section>
        </>
    )
}

export default Home