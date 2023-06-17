import React from 'react';
import tarrotheader from '../../Assets/tarrot-card-header.png';
import ReactWhatsapp from 'react-whatsapp';
import TarrotCardTestimonial from './TarrotCardTestimonial';

const TarrotCard = () => {
    return (
        <section className=''>
            <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 ">
                <div className=''>
                    <div className='flex justify-between'>
                        <div className='flex flex-col'>
                            <h2 className='md:text-4xl font-400 md:leading-[80px] md:mt-[45px] text-2xl mt-[58px]'>Tarrot Card Reading</h2>
                            <div className='flex justify-center md:hidden'>
                                <img src={tarrotheader} alt="numerology-img" className='mt-[36px] h-[385px] w-[244px]' />
                            </div>
                            <div className='md:leading-[40px] md:text-xl md:w-[900px] md:text-left text-center'>
                                <p className=' md:mt-[147px] mt-[30px]'>You are energetically designed to have a life of magnificence.
                                    Within you is a powerful, in-built chakra system, which creates for you a beautiful life, filled with all the things you cherish and adore.
                                </p>

                                <p className='md:mt-[50px] mt-[30px]'>Going within and changing your energy, is the only sure fire way to change your life because the state of your energy field determines the state of your life. our energy field, also called your aura, is a magnificent field of pure energy that exists all around you. It not only surrounds your entire body, it also radiates out from beneath your feet, either side of your body and above your head.</p>

                                <p className='md:mt-[50px] mt-[30px]'>Your energy field consists of twelve different levels of vibration. These levels of vibration are called ‘chakras‘, and these chakras are found at specific places within your physical body or in your energy field. Six of the twelve chakras are found in the body, and the other six are located above the head..
                                </p>
                            </div>

                        </div>
                        <img src={tarrotheader} alt="numerology-img" className='mr-[40px] md:mt-[36px] md:h-[617px] md:block hidden' />

                    </div>
                    <p className='md:leading-[40px] md:text-xl mt-[30px] md:text-left text-center'>
                        Each one of your chakras energetically fuels and sustains aspects of your life and your body. They do this by receiving energy for your energy field from the universe and then transporting this energy into a certain area of your life and body. Think of the chakras as happy, eager, diligent workers, who spend all day looking after, managing and organizing every aspect of your life.</p>
                    <p className='md:leading-[40px] md:text-xl md:block hidden'>There is a chakra, whose job it is to look after your career, a chakra that looks after your abundance, one who makes sure you rest and enjoy yourself, and one that supports you in discovering and living out your creativity. It’s that amazing! Within you is a marvellous inbuilt system, that creates for you a joyful, creative, abundant, fulfilling and beautiful life.</p>

                    <p className='md:leading-[40px] md:text-xl md:mt-[50px] md:block hidden'>Aren’t we generously crafted and designed!
                        What you need to understand about yourself is this: Every aspect of your life works if the chakras are doing their job properly.
                        This understanding is the key to a magical life. If your chakras are all working properly, your life is magical, beautiful and exciting, full of everything you could ever dream of and desire.</p>

                    <p className='md:leading-[40px] md:text-xl md-mt-[50px] md:block hidden'>If most of your chakras are working, your life is wonderful with a few hiccups here and there.
                    </p>
                    <div className='flex flex-col  items-center'>
                        <ReactWhatsapp number="+91 9987560606"><button className='px-[40px] py-[13px] mt-[60px] bg-[#8777D7] w-max rounded-lg text-white font-bold'>Book an Appointment</button></ReactWhatsapp>
                    </div>
                    <TarrotCardTestimonial />
                </div>
            </div>

        </section>
    )
}

export default TarrotCard