import React from 'react'
import Hero from '../components/About/Hero'
import Myabout from '../components/About/Myabout'
import Journey from '../components/About/Journey'
import Achievment from '../components/About/Achievment'
import Statement from '../components/About/Statement'

const About = () => {
    return (
        <>
            <section className='bg-rect bg-cover bg-no-repeat'>
                <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 ">
                    <Hero />
                </div>
            </section>
            <section className=''>
                <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 ">
                    <Myabout />
                </div>
            </section>
            <section className='lg:bg-about-journey-desktop bg-cover bg-no-repeat'>
                <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 ">
                    <Journey />
                </div>
            </section>
            <section className=''>
                <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 ">
                    <Achievment />
                </div>
            </section>
            <section className=''>
                <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 ">
                    <Statement />
                </div>
            </section>
        </>
    )
}

export default About