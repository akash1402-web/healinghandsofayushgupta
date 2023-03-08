import React from 'react';
import journey from '../../Assets/journey.png';
import VerticalSlider from './VerticalSlider/VerticalSlider';

const Journey = () => {
    return (
        <div className='w-full md:px-[40px] md:mt-[80px] px-[20px] mt-[40px]'>
            <VerticalSlider className="flex md:hidden " />
            <div className='w-full md:flex hidden justify-between'>
                <div className='flex flex-col gap-16'>
                    <div className='text-4xl mt-[95px]'>Journey</div>
                    <div className='flex flex-col gap-20'>
                        <div className='flex flex-col gap-4 w-[670px] h-[96px]'>
                            <div className='font-[600px] text-2xl'>How We Started?</div>
                            <div className='leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada, ex vel mattis ullamcorper, ex lectus condimentum nisl, ut auctor nisi dui et ligula. Nam luctus libero vitae nisl rutrum accumsan. Ut scelerisque, eros a tempus dictum, nisl ipsum volutpat nisl, nec aliquet elit urna eu nisi. Suspendisse at imperdiet lacus.</div>
                        </div>
                        <div className='flex flex-col gap-4 w-[670px] h-[96px]'>
                            <div className='font-[600px] text-2xl'>How We Started?</div>
                            <div className='leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada, ex vel mattis ullamcorper, ex lectus condimentum nisl, ut auctor nisi dui et ligula. Nam luctus libero vitae nisl rutrum accumsan. Ut scelerisque, eros a tempus dictum, nisl ipsum volutpat nisl, nec aliquet elit urna eu nisi. Suspendisse at imperdiet lacus.</div>
                        </div>

                        <div className='flex flex-col gap-4 w-[670px] h-[96px]'>
                            <div className='font-[600px] text-2xl'>How We Started?</div>
                            <div className='leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada, ex vel mattis ullamcorper, ex lectus condimentum nisl, ut auctor nisi dui et ligula. Nam luctus libero vitae nisl rutrum accumsan. Ut scelerisque, eros a tempus dictum, nisl ipsum volutpat nisl, nec aliquet elit urna eu nisi. Suspendisse at imperdiet lacus.</div>
                        </div>
                    </div>



                </div>

                <div>
                    <img src={journey} alt="journey" className='mr-[160px] w-[431px] h-[550px]' />
                    <div className='flex flex-col gap-4 w-[670px] h-[96px]'>
                        <div className='font-[600px] text-2xl'>How We Started?</div>
                        <div className='leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada, ex vel mattis ullamcorper, ex lectus condimentum nisl, ut auctor nisi dui et ligula. Nam luctus libero vitae nisl rutrum accumsan. Ut scelerisque, eros a tempus dictum, nisl ipsum volutpat nisl, nec aliquet elit urna eu nisi. Suspendisse at imperdiet lacus.</div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Journey
