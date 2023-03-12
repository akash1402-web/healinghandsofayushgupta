import React from 'react';

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
                                <img src={require("../../Assets/Gallery/1.png")} alt="Gallery" className='w-[25%] pl-3 lg:pl-0 lg:w-full' />
                            </div>
                        </div>
                        <div className="flex justify-end gap-3 lg:gap-6 mt-3 lg:mt-6">
                            <div className='w-[25%]'>

                            </div>
                            <div className='w-[25%] flex flex-col justify-end'>
                                <img src={require("../../Assets/Gallery/2.png")} alt="Gallery" className='w-full' />
                            </div>
                            <div className='w-[25%]'>
                                <img src={require("../../Assets/Gallery/3.png")} alt="Gallery" className='w-full h-full' />
                            </div>
                            <div className='w-[25%] flex flex-col justify-between gap-3 lg:gap-6'>
                                <img src={require("../../Assets/Gallery/4.png")} alt="Gallery" className='' />
                                <img src={require("../../Assets/Gallery/5.png")} alt="Gallery" className='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:block'>
                <div className="mx-auto px-[12px] lg:px-[16px]">
                    <div className='lg:px-24'>
                        <div className='flex gap-3 lg:pt-3 lg:gap-6'>
                            <div className="flex w-[50%] gap-3 lg:gap-6">
                                <div className='flex w-[50%]'>
                                    <img src={require("../../Assets/Gallery/6.png")} alt="Gallery" className='w-full' />
                                </div>
                                <div className='flex w-[50%]'>
                                    <img src={require("../../Assets/Gallery/7.png")} alt="Gallery" className='w-full' />
                                </div>
                            </div>
                            <div className='flex w-[50%] gap-'>
                                <img src={require("../../Assets/Gallery/8.png")} alt="Gallery" className='w-full' />
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
                                        <img src={require(`../../Assets/Gallery/R${ind + 1}.png`)} alt="Gallery" className='w-full' />
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
                        <h1 className='text-[24px] lg:text-[36px] text-[#282828] font-semibold pb-6 lg:pb-12'>Neumerology</h1>
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
            </div>
        </section>
    )
}

export default Gallery