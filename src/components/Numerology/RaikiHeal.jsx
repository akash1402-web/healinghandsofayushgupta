import React from 'react';
import raikiheal from '../../Assets/raikiheal.png';
import Chakra from './Chakra';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import ReactWhatsapp from 'react-whatsapp';
import RaikiHealTestimonial from './RaikiHealTestimonial';

const RaikiHeal = () => {
    return (
        <section className=''>
            <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 ">
                <div className=''>
                    <div className=' mt-[36px]'>
                        <h2 className='md:text-4xl font-400 md:leading-[80px] text-2xl'>Reiki Healing</h2>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex flex-col md:leading-[40px] md:text-xl md:w-[900px]  md:mt-[150px] items-center'>
                            <img src={raikiheal} alt="numerology-img" className=' md:mt-[115px] md:hidden w-[181px] h-[253px]' />
                            <p className='text-center md:text-left'>You are energetically designed to have a life of magnificence.
                                Within you is a powerful, in-built chakra system, which creates for you a beautiful life, filled with all the things you cherish and adore.
                            </p>

                            <p className='md:mt-[50px] text-center md:text-left mt-[30px]'>Going within and changing your energy, is the only sure fire way to change your life because the state of your energy field determines the state of your life. our energy field, also called your aura, is a magnificent field of pure energy that exists all around you. It not only surrounds your entire body, it also radiates out from beneath your feet, either side of your body and above your head.</p>

                            <p className='md:mt-[50px] text-center md:text-left mt-[30px]'>
                                Your energy field consists of twelve different levels of vibration. These levels of vibration are called ‘chakras‘, and these chakras are found at specific places within your physical body or in your energy field. Six of the twelve chakras are found in the body, and the other six are located above the head.
                            </p>
                        </div>
                        <img src={raikiheal} alt="numerology-img" className='mr-[40px] md:mt-[50px] md:block hidden' />

                    </div>

                    <p className='md:leading-[40px] md:text-xl mt-[30px] text-center md:text-left'>
                        Each one of your chakras energetically fuels and sustains aspects of your life and your body. They do this by receiving energy for your energy field from the universe and then transporting this energy into a certain area of your life and body. Think of the chakras as happy, eager, diligent workers, who spend all day looking after, managing and organizing every aspect of your life.
                        There is a chakra, whose job it is to look after your career, a chakra that looks after your abundance, one who makes sure you rest and enjoy yourself, and one that supports you in discovering and living out your creativity. It’s that amazing! Within you is a marvellous inbuilt system, that creates for you a joyful, creative, abundant, fulfilling and beautiful life.</p>

                    <p className='md:leading-[40px] md:text-xl mt-[50px] text-center md:text-left'>Aren’t we generously crafted and designed!
                        What you need to understand about yourself is this: Every aspect of your life works if the chakras are doing their job properly.
                        This understanding is the key to a magical life. If your chakras are all working properly, your life is magical, beautiful and exciting, full of everything you could ever dream of and desire.</p>

                    <p className='md:leading-[40px] md:text-xl md:mt-[50px] md:block hidden'>If most of your chakras are working, your life is wonderful with a few hiccups here and there.</p>
                    <div className='md:block hidden'>
                        <Chakra />
                    </div>

                    <div className='md:hidden block px-[10px]'>
                        <h1 className='text-center font-[600px] text-2xl mt-[40px] mb-[10px]'>Chakras</h1>
                        <Swiper slidesPerView={1} grabCursor={2} className='mySwiper'
                            loop={true}
                            pagination={{
                                clickable: true,
                                el: ".achivement-dots"
                            }}
                            modules={[
                                Pagination
                            ]
                            }
                        >
                            <SwiperSlide>
                                <div className='flex justify-center bg-[#A497C8]/[0.13]'>
                                    <p className='p-3'>A personalized session where a Reiki Channel works with one Recipent at a time, using a series of Meditative Points to channel Reiki energy to the Recipent. The session typically lasts around 60 to 90 minutes and can be done on a table or in a chair. The goal of the session is to promote balance and healing in all Prospects of Your Life, and You experience sensations such as warmth or tingling during the session. Overall, a Reiki one-on-one session can be a relaxing and rejuvenating experience, and can be beneficial for physical, emotional, or spiritual healing.</p>
                                </div>
                                <h4 className='w-full text-center mt-[28px]'>level 1</h4>
                                <h4 className='w-full text-center'>Reiki one-on-one session</h4>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center bg-[#A497C8]/[0.13]'>
                                    <p className='p-3'>This type of Reiki session focuses on balancing and clearing the body's chakras (energy centers), to promote overall health and well-being.</p>
                                </div>
                                <h4 className='w-full text-center mt-[28px]'>level 2</h4>
                                <h4 className='w-full text-center'>Chakra Balancing Session</h4>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center bg-[#A497C8]/[0.13]'>
                                    <p className='p-3'>In an emotional healing session, the practitioner uses Reiki energy to help the Recipents release negative emotions and traumas, and promote emotional healing.</p>
                                </div>
                                <h4 className='w-full text-center mt-[28px]'>level 3</h4>
                                <h4 className='w-full text-center'>Emotional Healing Session</h4>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center bg-[#A497C8]/[0.13]'>
                                    <p className='p-3'>Reiki can help heal past traumas, release negative emotions, and promote self-love and acceptance, which can lead to a more fulfilling personal and love life. It can also enhance communication and deepen connections with loved ones.</p>
                                </div>
                                <h4 className='w-full text-center mt-[28px]'>level 4</h4>
                                <h4 className='w-full text-center'>Personal Life / Love Life Healing</h4>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center bg-[#A497C8]/[0.13]'>
                                    <p className='p-3'>Reiki can help heal past traumas, release negative emotions, and promote self-love and acceptance, which can lead to a more fulfilling personal and love life. It can also enhance communication and deepen connections with loved ones.</p>
                                </div>
                                <h4 className='w-full text-center mt-[28px]'>level 4</h4>
                                <h4 className='w-full text-center'>Personal Life / Love Life Healing</h4>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center bg-[#A497C8]/[0.13]'>
                                    <p className='p-3'>Reiki can help heal past traumas, release negative emotions, and promote self-love and acceptance, which can lead to a more fulfilling personal and love life. It can also enhance communication and deepen connections with loved ones.</p>
                                </div>
                                <h4 className='w-full text-center mt-[28px]'>level 5</h4>
                                <h4 className='w-full text-center'>Crystal Reiki Session</h4>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center bg-[#A497C8]/[0.13]'>
                                    <p className='p-3'>This type of Reiki session incorporates sound healing techniques, such as singing bowls or tuning forks, to enhance the healing effects of Reiki.</p>
                                </div>
                                <h4 className='w-full text-center mt-[28px]'>level 6</h4>
                                <h4 className='w-full text-center'>Sound Healing Reiki Session</h4>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center bg-[#A497C8]/[0.13]'>
                                    <p className='p-3'>This type of Reiki session focuses on using Reiki energy to manifest desired outcomes, such as abundance or love.</p>
                                </div>
                                <h4 className='w-full text-center mt-[28px]'>level 7</h4>
                                <h4 className='w-full text-center'>Reiki for Manifestation Session</h4>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center bg-[#A497C8]/[0.13]'>
                                    <p className='p-3'>In a Reiki for spiritual growth session, the practitioner uses Reiki energy to promote spiritual growth, awareness, and connection to the divine.</p>
                                </div>
                                <h4 className='w-full text-center mt-[28px]'>level 8</h4>
                                <h4 className='w-full text-center'>Reiki for Spiritual Growth Session</h4>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center bg-[#A497C8]/[0.13]'>
                                    <p className='p-3'>An intuitive Reiki session involves the practitioner using their intuition to guide the session, based on the Recipents needs and energy.</p>
                                </div>
                                <h4 className='w-full text-center mt-[28px]'>level 9</h4>
                                <h4 className='w-full text-center'>Intuitive Reiki Session</h4>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center bg-[#A497C8]/[0.13]'>
                                    <p className='p-3'>This type of Reiki session is used to provide healing and relaxation to animals from any illness, desease or Imbalances, and can be done in person or remotely.</p>
                                </div>
                                <h4 className='w-full text-center mt-[28px]'>level 10</h4>
                                <h4 className='w-full text-center'>Animal Reiki Session</h4>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center bg-[#A497C8]/[0.13]'>
                                    <p className='p-3'>This type of Reiki session is done remotely, where the practitioner channels Reiki energy to the Recipents, who may be in another location.</p>
                                </div>
                                <h4 className='w-full text-center mt-[28px]'>level 11</h4>
                                <h4 className='w-full text-center'>Distance Reiki Session</h4>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex justify-center bg-[#A497C8]/[0.13]'>
                                    <p className='p-3'>In a group Reiki session, several Recipents receive Reiki simultaneously, either in the same room or remotely. Anannt Oorja Safar Organize Group Reiki Sessions.</p>
                                </div>
                                <h4 className='w-full text-center mt-[28px]'>level 12</h4>
                                <h4 className='w-full text-center'>Group Reiki Session</h4>
                            </SwiperSlide>


                        </Swiper>
                        <div className='achivement-dots mt-[10px] text-center'></div>
                    </div>

                    <div className='flex flex-col  items-center'>

                        <ReactWhatsapp number="+91 9987560606"><button className='px-[40px] py-[13px] mt-[60px] bg-[#8777D7] w-max rounded-lg text-white font-bold'>Book an Appointment</button></ReactWhatsapp>
                    </div>
                    <RaikiHealTestimonial />
                </div >
            </div>
        </section>
    )
}

export default RaikiHeal
