import React, { useState } from 'react';
import VideoGallery from './VideoGallery';
import thumbnail1 from '../../Assets/thumbnails/aboutChakraThumbnail.jpg';
import thumbnail2 from '../../Assets/thumbnails/noMedicationThumbnail.jpg';
import thumbnail3 from '../../Assets/thumbnails/raikiHealThumbnail.jpg';
import thumbnail4 from '../../Assets/thumbnails/selfRaikiHealThumbnail.jpg';
import thumbnail5 from '../../Assets/thumbnails/taroCard2Thumbnail.jpg';
import thumbnail6 from '../../Assets/thumbnails/taroCardThumbnail.jpg';
import ytlogo from '../../Assets/yt-logo.png';

const HoverComp = ({ isVisible }) => {
    return (
        <div className={`absolute inset-0 z-10 rounded-md flex items-center justify-center transition-opacity pointer-events-none ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <img src={ytlogo} alt="YouTube Logo" className="w-80 h-80" />
        </div>
    )
}
const Thumbnail = ({ href, src }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`flex md:flex-col md:w-[440px] gap-5 md:gap-0 ${isHovered ? 'hover:scale-105' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ margin: '20px' }}
        >
            <a href={href} target='_blank' rel='noopener noreferrer' style={{ position: 'relative', zIndex: 1 }}>
                <img
                    src={src}
                    alt="card-img"
                    className='md:w-full md:h-[310px] w-full h-auto object-cover transition-all duration-500'
                    style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
                />
            </a>
            <HoverComp isVisible={isHovered} />
        </div>
    );
};
const Gallery = () => {
    const reikiImages = new Array(8).fill(0);
    const neumeroImages = new Array(4).fill(0);
    const tcrImages = new Array(2).fill(0);

    return (
        <section>
            <div className='lg:bg-rect bg-cover bg-no-repeat'>
                <div className='mx-auto lg:px-[16px]'>
                    <div className='px-[8px] sm:px-[16px] lg:px-24 py-3 pt-[32px] lg:pt-24'>
                        <div className="flex flex-col lg:flex-row lg:justify-between gap-3 lg:gap-6">
                            <div className='w-full lg:w-[45%] pb-10'>
                                <h1 className='text-[24px] lg:text-[36px] text-[#282828] font-semibold pb-12'>Gallery</h1>
                                <p className='text-[#636363] text-[20px]'>Keep Your mind calm and let </p>
                                <p className='text-[#636363] text-[20px]'>the energy float inside...</p>
                            </div>
                            <div className='hidden lg:block lg:w-[15%]' />
                            <div className='hidden lg:block lg:w-[15%]' />
                            <div className='w-full lg:w-[25%] flex justify-end'>
                                <img src={require("../../Assets/Gall2/G1.JPG")} alt="Gallery" className='w-[25%] pl-3 lg:pl-0 lg:w-full' />
                            </div>
                        </div>
                        <div className="flex justify-end gap-3 lg:gap-6 mt-3 lg:mt-6">
                            <div className='w-[25%]'>

                            </div>
                            <div className='w-[25%] flex flex-col justify-end'>
                                <img src={require("../../Assets/Gall2/G2.JPG")} alt="Gallery" className='w-full' />
                            </div>
                            <div className='w-[25%]'>
                                <img src={require("../../Assets/Gall2/G3.jpg")} alt="Gallery" className='w-full h-full' />
                            </div>
                            <div className='w-[25%] flex flex-col justify-between gap-3 lg:gap-6'>
                                <img src={require("../../Assets/Gall2/G4.JPG")} alt="Gallery" className='' />
                                <img src={require("../../Assets/Gall2/G5.JPG")} alt="Gallery" className='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[8px] sm:px-[16px] lg:px-24 py-3 pt-[32px] lg:pt-24'>
                <h1 className='text-[24px] lg:text-[36px] text-[#282828] font-semibold'>Watch my session</h1>
                {/* <VideoGallery /> */}
                {/* <div className='flex flex-wrap justify-center xl:justify-between md:gap-y-16'>
                    <div className='flex md:flex-col md:w-[440px] gap-3 md:gap-0'>
                        <a href='https://www.youtube.com/watch?v=h_v9Nhypir0' target='_blank' rel='noopener noreferrer'>
                            <img src={thumbnail1} alt="card-img" className='md:w-full md:h-[330px] object-cover w-[142px] h-[127px] transition-all duration-500 hover:scale-105' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                        </a>
                    </div>
                    <div className='flex md:flex-col md:w-[440px] gap-3 md:gap-0'>
                        <a href='https://www.youtube.com/watch?v=Wg2sVkcRJFo' target='_blank' rel='noopener noreferrer'>
                            <img src={thumbnail2} alt="card-img" className='md:w-full md:h-[330px] object-cover w-[142px] h-[127px]' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                        </a>
                    </div>
                    <div className='flex md:flex-col md:w-[440px] gap-3 md:gap-0'>
                        <a href='https://www.youtube.com/watch?v=BNkianbQzuk' target='_blank' rel='noopener noreferrer'>
                            <img src={thumbnail3} alt="card-img" className='md:w-full md:h-[330px] object-cover w-[142px] h-[127px]' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                        </a>
                    </div>
                    <div className='flex md:flex-col md:w-[440px] gap-3 md:gap-0'>
                        <a href='https://www.youtube.com/watch?v=QI5pbyfpF44' target='_blank' rel='noopener noreferrer'>
                            <img src={thumbnail4} alt="card-img" className='md:w-full md:h-[330px] object-cover w-[142px] h-[127px]' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                        </a>
                    </div>
                    <div className='flex md:flex-col md:w-[440px] gap-3 md:gap-0'>
                        <a href='https://www.youtube.com/watch?v=7lkA1cIJOtw' target='_blank' rel='noopener noreferrer'>
                            <img src={thumbnail5} alt="card-img" className='md:w-full md:h-[330px] object-cover w-[142px] h-[127px]' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                        </a>
                    </div>
                    <div className='flex md:flex-col md:w-[440px] gap-3 md:gap-0'>
                        <a href='https://www.youtube.com/watch?v=wYXwl1WTCmc' target='_blank' rel='noopener noreferrer'>
                            <img src={thumbnail6} alt="card-img" className='md:w-full md:h-[330px] object-cover w-[142px] h-[127px]' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                        </a>
                    </div>

                </div> */}
                <div className='flex flex-wrap justify-center xl:justify-between md:gap-y-16'>
                    <div className='w-full sm:w-[320px] md:w-[440px]'>
                        <Thumbnail href='https://www.youtube.com/watch?v=h_v9Nhypir0' src={thumbnail1} />
                    </div>
                    <div className='w-full sm:w-[320px] md:w-[440px]'>
                        <Thumbnail href='https://www.youtube.com/watch?v=Wg2sVkcRJFo' src={thumbnail2} />
                    </div>
                    <div className='w-full sm:w-[320px] md:w-[440px]'>
                        <Thumbnail href='https://www.youtube.com/watch?v=BNkianbQzuk' src={thumbnail3} />
                    </div>
                    <div className='w-full sm:w-[320px] md:w-[440px]'>
                        <Thumbnail href='https://www.youtube.com/watch?v=QI5pbyfpF44' src={thumbnail4} />
                    </div>
                    <div className='w-full sm:w-[320px] md:w-[440px]'>
                        <Thumbnail href='https://www.youtube.com/watch?v=7lkA1cIJOtw' src={thumbnail5} />
                    </div>
                    <div className='w-full sm:w-[320px] md:w-[440px]'>
                        <Thumbnail href='https://www.youtube.com/watch?v=wYXwl1WTCmc' src={thumbnail6} />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Gallery
