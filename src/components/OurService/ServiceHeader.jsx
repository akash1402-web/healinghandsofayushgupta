import React from 'react';
import service1 from '../../Assets/service-h1.png';
import service2 from '../../Assets/service-h2.png';
import service3 from '../../Assets/service-h3.png';
import service4 from '../../Assets/service-h4.png';
import service5 from '../../Assets/service-h5.png';

const ServiceHeader = () => {
    return (
        <div className='w-full md:mt-[100px] mt-[50px]'>
            <div className='text-center md:text-6xl text-3xl md:w-[600px] w-[300px] mx-auto font-bold'>
                Watch your breath
                Relax your mind
            </div>
            <div className='flex justify-center md:mt-[70px] mt-[35px]'>
                <img src={service5} alt="servicecard" className='md:h-[243px] h-[96px] md:w-[194px] w-[70px]' />
                <img src={service4} alt="servicecard" className='md:h-[261px] h-[103px] md:w-[208px] w-[78px]' />
                <img src={service3} alt="servicecard" className='md:h-[275px]  h-[108px] md:w-[220px] w-[86px]' />
                <img src={service2} alt="servicecard" className='md:h-[261px] h-[103px] md:w-[208px] w-[78px]' />
                <img src={service1} alt="servicecard" className='md:h-[243px] h-[96px] md:w-[194px] w-[70px]' />
            </div>
        </div>


    )
}

export default ServiceHeader
