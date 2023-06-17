import React from 'react';
import journey from '../../Assets/journey.png';
import journeyAyush from '../../Assets/AboutImages/Journey.JPG';
import VerticalSlider from './VerticalSlider/VerticalSlider';

const Journey = () => {
    return (
        <div className='w-full lg:px-[40px] lg:mt-[80px] px-[20px] mt-[40px]'>
            <VerticalSlider className="flex lg:hidden" />
            <div className='w-full lg:flex hidden justify-between'>
                <div className='flex flex-col gap-16'>
                    <div className='text-4xl mt-[95px]'>Journey</div>
                    <div className='flex flex-col gap-20'>
                        <div className='flex flex-col gap-4 w-[670px] h-[96px]'>
                            <div className='font-[600px] text-2xl'>How did this journey begin?
                            </div>
                            <div className='leading-[24px] text-md'>Aayush Gupta was born in Barhi, a small village in Madhya Pradesh in a middle class household. His upbringing was very simple and just like his father he was a great devotee of Krishna. The spiritual journey started at the age of 7 when Ayush Gupta started doing Meditation. In a very short period of time Ayush started feeling a special connection with the energies. By the time he was 12 he started practicing Reiki.
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 w-[670px] h-[96px]'>
                            <div className='font-[600px] text-2xl'>Miracles and divine interventions along the way.</div>
                            <div className='leading-[24px] text-md'>It had just been 4 months since Ayush started doing  Reiki when Ayush and his family realised that his mother had developed throat cancer, and it almost seemed like a divine intervention by the universal energies that Ayush had recently learned Reiki healing therapy through which he completely cured his mother’s cancer.
                            </div>
                        </div>

                        <div className='flex flex-col gap-4 w-[670px] h-[96px]'>
                            <div className='font-[600px] text-2xl'>Accomplishments made so far in the voyage.
                            </div>
                            <div className='text-md'>After Ayush understood the power Reiki healing therapy he has helped over 700+ people to experience Reiki, Numerous Tarot & Numerology Sessions for People and also have a positive and healthy outlook towards their life. In 2021 Ayush along with his Aarvika Gupta founded a spiritual organization through which they have organized “Anannt Oorja Safar” in many schools across the world, Central Jail, CISF camp and other countries. During the pandemic Ayush provided Reiki healing to as many people as he could help, who were suffering from Covid-19, after which he had to go on silent meditation for a month. Now Ayush has implemented meditation and mindfulness in the school curriculum in many schools across across India, Nepal and Dubai.
                            </div>
                        </div>
                    </div>



                </div>

                <div>
                    {/* <img src={journey} alt="journey" className='mr-[160px] w-[431px] h-[550px]' /> */}
                    <img src={journeyAyush} alt="journey" className='mr-[160px] w-[431px] h-[550px]' />
                    <div className='flex flex-col gap-4 w-[600px] h-[96px]'>
                        <div className='font-[600px] text-2xl'>Our objectives and future vision.</div>
                        <div className='leading-[24px]'>Ayush Gupta believes in the ancient Indian philosophy of “वसुधैव कुटुंभकम्” which means that the world is our family, and he wants people of the world to be more mindful towards humans, animals and Mother Earth. He wants to propagate the idea of love and inclusiveness in the society so people can live a happier and healthier life where they’re more mindful of their actions. Ayush wants the younger generation to be more involved in spiritual growth so they grow up to be more self aware.</div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Journey
