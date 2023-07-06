import React from 'react';
import VideoGallery from './VideoGallery';
import thumbnail1 from '../../Assets/thumbnails/aboutChakraThumbnail.jpg';
import thumbnail2 from '../../Assets/thumbnails/noMedicationThumbnail.jpg';
import thumbnail3 from '../../Assets/thumbnails/raikiHealThumbnail.jpg';
import thumbnail4 from '../../Assets/thumbnails/selfRaikiHealThumbnail.jpg';
import thumbnail5 from '../../Assets/thumbnails/taroCard2Thumbnail.jpg';
import thumbnail6 from '../../Assets/thumbnails/taroCardThumbnail.jpg';

const HoverComp = () => {
    return (
        <div className='absolute right-2 top-2 z-10  rounded-md flex items-center p-2 transition-all duration-500 group-hover:right-0 group-hover:top-1 group-hover:scale-110'>
        </div>
    )
}

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
            {/* <div className='lg:block'>
                <div className="mx-auto px-[12px] lg:px-[16px]">
                    <div className='lg:px-24'>
                        <div className='flex gap-3 lg:pt-3 lg:gap-6'>
                            <div className="flex w-[50%] gap-3 lg:gap-6">
                                <div className='flex w-[50%]'>
                                    <img src={require("../../Assets/Gall2/G6.jpg")} alt="Gallery" className='w-full' />
                                </div>
                                <div className='flex w-[50%]'>
                                    <img src={require("../../Assets/Gall2/G7.JPG")} alt="Gallery" className='w-full' />
                                </div>
                            </div>
                            <div className='flex w-[50%] gap-'>
                                <img src={require("../../Assets/Gall2/G8.jpg")} alt="Gallery" className='w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='mx-auto px-[8px] sm:px-[16px] pt-[32px] lg:px-[16px]'>
                    <div className='lg:px-24'>
                        <h1 className='text-[24px] lg:text-[36px] text-[#282828] font-semibold pb-6 lg:pb-12'>Reiki</h1>
                        <div className='flex flex-wrap'>
                            {
                                reikiImages.map((val, ind) => (
                                    <div className='w-[25%]' key={ind}>
                                        <img src={require(`../../Assets/Gall2/RG${ind + 1}.png`)} alt="Gallery" className='w-full' />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='mx-auto px-[8px] sm:px-[16px] pt-[32px] lg:px-[16px]'>
                    <div className='lg:px-24 py-6'>
                        <h1 className='text-[24px] lg:text-[36px] text-[#282828] font-semibold pb-6 lg:pb-12'>Numerology</h1>
                        <div className='flex gap-3 lg:gap-6'>
                            {
                                neumeroImages.map((val, ind) => (
                                    <div className='w-[25%]' key={ind}>
                                        <img src={require(`../../Assets/Gallery/N${ind + 1}.png`)} alt="Gallery" className='w-full h-full max-h-[524px]' />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='mx-auto px-[8px] sm:px-[16px] pt-[32px] lg:px-[16px]'>
                    <div className='lg:px-24 py-6'>
                        <h1 className='text-[24px] lg:text-[36px] text-[#282828] font-semibold pb-6 lg:pb-12'>Tarot Card Reading</h1>
                        <div className='flex gap-3 lg:gap-6'>
                            <div className="flex flex-col w-[50%]">
                                <div className='flex'>
                                    <img src={require(`../../Assets/Gallery/TCR1.png`)} alt="Gallery" className='w-full' />
                                </div>
                                <div className=''>
                                    <div className="flex pt-3 lg:pt-6 gap-3 lg:gap-6">
                                        {
                                            tcrImages.map((val, ind) => (
                                                <div className='w-[50%]' key={ind}>
                                                    <img src={require(`../../Assets/Gallery/TCR${ind + 2}.png`)} alt="Gallery" className='w-full h-full max-h-[524px]' />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="flex pt-3 lg:pt-6 gap-3 lg:gap-6">
                                        {
                                            tcrImages.map((val, ind) => (
                                                <div className='w-[50%]' key={ind}>
                                                    <img src={require(`../../Assets/Gallery/TCR${ind + 4}.png`)} alt="Gallery" className='w-full h-full max-h-[524px]' />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-[50%] gap-3 lg:gap-6">
                                <div className='flex gap-3 lg:gap-6'>
                                    <div className="flex w-[50%]">
                                        <img src={require(`../../Assets/Gallery/TCR6.png`)} alt="Gallery" className='w-full' />
                                    </div>
                                    <div className="flex flex-col justify-between w-[50%] gap-3 lg:gap-6">
                                        <img src={require(`../../Assets/Gallery/TCR7.png`)} alt="Gallery" className='w-full' />
                                        <img src={require(`../../Assets/Gallery/TCR8.png`)} alt="Gallery" className='w-full' />
                                    </div>
                                </div>
                                <div className="flex flex-1">
                                    <img src={require(`../../Assets/Gallery/TCR9.png`)} alt="Gallery" className='w-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='px-[8px] sm:px-[16px] lg:px-24 py-3 pt-[32px] lg:pt-24'>
                <h1 className='text-[24px] lg:text-[36px] text-[#282828] font-semibold'>Watch my session</h1>
                {/* <VideoGallery /> */}
                <div className='flex flex-wrap justify-center xl:justify-between md:gap-y-16'>
                    <div className='flex md:flex-col md:w-[440px] gap-3 md:gap-0'>
                        <a href='https://www.youtube.com/watch?v=h_v9Nhypir0' target='_blank' rel='noopener noreferrer'>
                            <img src={thumbnail1} alt="card-img" className='md:w-full md:h-[330px] object-cover w-[142px] h-[127px]' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                        </a>
                        <a href='https://www.youtube.com/watch?v=h_v9Nhypir0' className='md:mt-[20px] md:text-lg  text-[#282828] gap-3' style={{ color: 'blue', textDecoration: 'underline' }} target='_blank' rel='noopener noreferrer'>
                            https://www.youtube.com/watch?v=h_v9Nhypir0
                        </a>
                    </div>
                    <div className='flex md:flex-col md:w-[440px] gap-3 md:gap-0'>
                        <a href='https://www.youtube.com/watch?v=Wg2sVkcRJFo' target='_blank' rel='noopener noreferrer'>
                            <img src={thumbnail2} alt="card-img" className='md:w-full md:h-[330px] object-cover w-[142px] h-[127px]' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                        </a>
                        <a href='https://www.youtube.com/watch?v=Wg2sVkcRJFo' className='md:mt-[20px] md:text-lg  text-[#282828] gap-3' style={{ color: 'blue', textDecoration: 'underline' }} target='_blank' rel='noopener noreferrer'>
                            https://www.youtube.com/watch?v=Wg2sVkcRJFo
                        </a>

                    </div>
                    <div className='flex md:flex-col md:w-[440px] gap-3 md:gap-0'>
                        <a href='https://www.youtube.com/watch?v=BNkianbQzuk' target='_blank' rel='noopener noreferrer'>
                            <img src={thumbnail3} alt="card-img" className='md:w-full md:h-[330px] object-cover w-[142px] h-[127px]' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                        </a>
                        <a href='https://www.youtube.com/watch?v=BNkianbQzuk' className='md:mt-[20px] md:text-lg  text-[#282828] gap-3' style={{ color: 'blue', textDecoration: 'underline' }} target='_blank' rel='noopener noreferrer'>
                            https://www.youtube.com/watch?v=BNkianbQzuk
                        </a>
                    </div>
                    <div className='flex md:flex-col md:w-[440px] gap-3 md:gap-0'>
                        <a href='https://www.youtube.com/watch?v=QI5pbyfpF44' target='_blank' rel='noopener noreferrer'>
                            <img src={thumbnail4} alt="card-img" className='md:w-full md:h-[330px] object-cover w-[142px] h-[127px]' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                        </a>
                        <a href='https://www.youtube.com/watch?v=QI5pbyfpF44' className='md:mt-[20px] md:text-lg  text-[#282828] gap-3' style={{ color: 'blue', textDecoration: 'underline' }} target='_blank' rel='noopener noreferrer'>
                            https://www.youtube.com/watch?v=QI5pbyfpF44
                        </a>
                    </div>
                    <div className='flex md:flex-col md:w-[440px] gap-3 md:gap-0'>
                        <a href='https://www.youtube.com/watch?v=7lkA1cIJOtw' target='_blank' rel='noopener noreferrer'>
                            <img src={thumbnail5} alt="card-img" className='md:w-full md:h-[330px] object-cover w-[142px] h-[127px]' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                        </a>
                        <a href='https://www.youtube.com/watch?v=7lkA1cIJOtw' className='md:mt-[20px] md:text-lg  text-[#282828] gap-3' style={{ color: 'blue', textDecoration: 'underline' }} target='_blank' rel='noopener noreferrer'>
                            https://www.youtube.com/watch?v=7lkA1cIJOtw
                        </a>
                    </div>
                    <div className='flex md:flex-col md:w-[440px] gap-3 md:gap-0'>
                        <a href='https://www.youtube.com/watch?v=wYXwl1WTCmc' target='_blank' rel='noopener noreferrer'>
                            <img src={thumbnail6} alt="card-img" className='md:w-full md:h-[330px] object-cover w-[142px] h-[127px]' style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                        </a>
                        <a href='https://www.youtube.com/watch?v=wYXwl1WTCmc' className='md:mt-[20px] md:text-lg  text-[#282828] gap-3' style={{ color: 'blue', textDecoration: 'underline' }} target='_blank' rel='noopener noreferrer'>
                            https://www.youtube.com/watch?v=wYXwl1WTCmc
                        </a>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Gallery