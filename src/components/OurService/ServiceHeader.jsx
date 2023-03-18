import React from 'react';
import service1 from '../../Assets/service-h1.png';
import service2 from '../../Assets/service-h2.png';
import service3 from '../../Assets/service-h3.png';
import service4 from '../../Assets/service-h4.png';
import service5 from '../../Assets/service-h5.png';

const ServiceHeader = () => {
    return (
        <div className='w-full lg:mt-[100px] mt-[50px]'>
            <div className='text-center lg:text-6xl text-3xl lg:w-[600px] sm:w-[300px] md:w-[500px] mx-auto font-bold'>
                Mindfulness is the foundation of Peace and harmony
            </div>
            <div className='flex justify-center md:mt-[70px] mt-[35px]'>
                <img src={service5} alt="servicecard" className='lg:h-[243px] h-[96px] lg:w-[194px] w-[70px] sm:w-[18%] sm:h-[30%]' />
                <img src={service4} alt="servicecard" className='lg:h-[261px] h-[103px] lg:w-[208px] w-[78px] sm:w-[20%] sm:h-[40%]' />
                <img src={service3} alt="servicecard" className='lg:h-[275px]  h-[108px] lg:w-[220px] w-[86px] sm:w-[22%] sm:h-[50%]' />
                <img src={service2} alt="servicecard" className='lg:h-[261px] h-[103px] lg:w-[208px] w-[78px] sm:w-[20%] sm:h-[40%]' />
                <img src={service1} alt="servicecard" className='lg:h-[243px] h-[96px] lg:w-[194px] w-[70px] sm:w-[18%] sm:h-[30%]' />
            </div>
        </div>
    )
}

export default ServiceHeader
