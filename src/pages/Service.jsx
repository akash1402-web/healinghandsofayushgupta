import React from 'react';
import ServiceHeader from '../components/OurService/ServiceHeader';
import Numerology from '../components/OurService/Numerology';
import TarrotCard from '../components/OurService/TarrotCard';
import RaikiHeal from '../components/OurService/RaikiHeal';


const Service = () => {
    return (
        <>
            <section className=''>
                <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 ">
                    <ServiceHeader />
                </div>
            </section>
            <section className=''>
                <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 ">
                    <RaikiHeal />
                </div>
            </section>
            <section className='bg-rect bg-cover bg-no-repeat'>
                <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 ">
                    <Numerology />
                </div>
            </section>
            <section className=''>
                <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 ">
                    <TarrotCard />
                </div>
            </section>
        </>
    )
}

export default Service
