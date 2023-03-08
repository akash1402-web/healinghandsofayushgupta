import React from 'react';
import about2 from '../../Assets/about-h2.png';
import about5 from '../../Assets/about3.png';
import about6 from '../../Assets/about4.png';

const Myabout = () => {
    return (
        <>

            <div className='flex items-center md:hidden justify-center md:gap-10 gap-3 mt-[70px]'>
                <div className='md:w-[338px] w-[74px] h-[2px]  bg-[#8777D7]'>

                </div>
                <h2 className='md:text-4xl text-2xl text-[#282828] '>Ayush Gupta</h2>
                <div className='md:w-[338px] w-[74px] h-[2px] bg-[#8777D7]'>

                </div>
            </div>

            <div className='w-full flex justify-between md:px-[40px] px-[20px] md:mt-[100px] mt-[20px]  gap-20'>
                <div className='flex md:hidden'>
                    <img src={about2} alt="about-me" className='w-[270px] h-[209px]' />
                    <div className='flex flex-col justify-start'>
                        <img src={about5} alt="abountimg" className='h-full w-full' />
                        <img src={about6} alt="abountimg" className='h-full w-full' />
                    </div>
                </div>



                <img src={about2} alt="about-me" className='md:w-[493px] md:h-[300px] md:block hidden' />

                <div className='md:flex flex-col gap-5 hidden'>
                    <div className='text-[#8777D7] text-4xl'>
                        Ayush gupta
                    </div>
                    <div className='text-xl'>
                        Started meditation at the age of 7 under guidance of his father Mr. Kashi Prasad Gupta, who later on introduced Ayush to Guru Devank Shukla. He taugh how to channelize universal energies.
                        Family faced diffucult times when mother got diagnosed with throat cancer.
                        Ayush rosed to the ocssion and started Reiki therapy. Everyone was surprised to see his mom fit and healthy within a period of three months.
                        When he realised the potentials and power of Reiki. He thought it would not be fair to keep this to himself and took the inittiative of helping others with Reiki.
                        Been at fore front in educating people about Reiki and its advantages.
                        Played a signifacnt role in bursting myths and breaking rumours about Reiki healing.
                        Done Reiki healing for many other things apart from chronic and acute ailments.
                    </div>
                </div>

            </div>
            <div className='text-sm px-[20px] mt-[20px] md:hidden'>
                Started meditation at the age of 7 under guidance of his father Mr. Kashi Prasad Gupta, who later on introduced Ayush to Guru Devank Shukla. He taugh how to channelize universal energies.
                Family faced diffucult times when mother got diagnosed with throat cancer.
                Ayush rosed to the ocssion and started Reiki therapy. Everyone was surprised to see his mom fit and healthy within a period of three months.
                When he realised the potentials and power of Reiki. He thought it would not be fair to keep this to himself and took the inittiative of helping others with Reiki.
                Been at fore front in educating people about Reiki and its advantages.
                Played a signifacnt role in bursting myths and breaking rumours about Reiki healing.
                Done Reiki healing for many other things apart from chronic and acute ailments.
            </div>

        </>

    )
}

export default Myabout
