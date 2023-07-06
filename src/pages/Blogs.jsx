import React from 'react';
import Cards from '../components/Blogs/Cards';
import Appointment from '../components/Blogs/Appointment';

const Blogs = () => {
    return (
        <>
            <h3 className='text-center md:text-4xl text-2xl font-semibold py-16 text-[#282828]'>Blogs & Articles</h3>
            <section className=''>
                <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 ">
                    <Cards />
                </div>
            </section>
            <section className=''>
                <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 ">
                    <Appointment />
                </div>
            </section>
        </>
    )
}

export default Blogs