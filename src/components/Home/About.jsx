import React from 'react';
import homeabout from '../../Assets/homeabout.png';
import a1 from '../../Assets/a1.png';

const About = () => {
    return (
        // <div className='w-full md:px-[82px] px-[20px] md:gap-40 justify-between flex flex-col md:flex-row items-center md:mt-20 bg-rect bg-no-repeat bg-cover '>
        //     <div className='flex flex-col md:gap-2 max-w-[600px] mt-20 md:mt-0 md:text-left text-center items-center md:items-start'>
        //         <img src={homeabout} alt="about-logo" className='md:mr-20 md:block hidden ' />
        //     </div>
        //     <div className='flex flex-col gap-10 justify-center md:flex-1 md:mt-0 mt-5'>
        //         <h1 className='text-center md:text-4xl font-[600px] text-2xl md:font-normal'>About</h1>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum augue sed tempor facilisis. Vestibulum tristique dolor non fermentum facilisis. Ut id velit eu magna aliquam feugiat vel non purus. Nunc placerat quam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum augue sed tempor facilisis. Vestibulum tristique dolor non fermentum facilisis. </p>
        //         <div className='flex justify-center'>
        //             <img src={homeabout} alt="about-logo" className='md:mr-20 md:hidden block w-[194px] h-[225px]' />
        //         </div>
        //         <div className='flex items-center md:justify-between justify-around'>
        //             <div className='flex items-center md:gap-3'>
        //                 <img className='h-[40px] w-[40px]' src={a1} alt="about-card-img"></img>
        //                 <div className='flex md:flex-row flex-col'>
        //                     <h3 className="md:text-4xl text-xl text-[#6F9FC2] font-bold">25+</h3>
        //                     <p className='text-[#565A5C]'>Years Experience</p>
        //                 </div>

        //             </div>
        //             <div className='flex items-center md:gap-3'>
        //                 <img className='h-[40px] w-[40px]' src={a1} alt="about-card-img"></img>
        //                 <div className='flex md:flex-row flex-col'>
        //                     <h3 className="md:text-4xl text-xl text-[#6F9FC2] font-bold">25+</h3>
        //                     <p className='text-[#565A5C]'>Years Experience</p>
        //                 </div>

        //             </div>
        //         </div>
        //         <div className='flex items-center md:justify-between justify-around'>
        //             <div className='flex items-center md:gap-3'>
        //                 <img className='h-[40px] w-[40px]' src={a1} alt="about-card-img"></img>
        //                 <div className='flex md:flex-row flex-col'>
        //                     <h3 className="md:text-4xl text-xl text-[#6F9FC2] font-bold">25+</h3>
        //                     <p className='text-[#565A5C]'>Years Experience</p>
        //                 </div>

        //             </div>
        //             <div className='flex items-center md:gap-3'>
        //                 <img className='h-[40px] w-[40px]' src={a1} alt="about-card-img"></img>
        //                 <div className='flex md:flex-row flex-col'>
        //                     <h3 className="md:text-4xl text-xl text-[#6F9FC2] font-bold">25+</h3>
        //                     <p className='text-[#565A5C]'>Years Experience</p>
        //                 </div>

        //             </div>
        //         </div>
        //         <div className='flex justify-center'>
        //             <a className="md:block hidden"><button className='rounded-lg text-[#6F9FC2] bg-white  border-2 px-[20px] py-[9px] border-[#6F9FC2]'>Know more</button></a>
        //         </div>

        //         <a className="md:hidden block"><button className='rounded-md text-white bg-[#6F9FC2]  border-2  py-[9px] border-[#6F9FC2] w-[100%]'>Know more</button></a>



        //     </div>

        // </div>

        <div className='w-full md:px-[82px] px-[20px] md:gap-40 md:justify-between xl:justify-center flex flex-col lg:flex-row items-center md:mt-20 bg-rect bg-no-repeat bg-cover '>
            <div className='flex flex-col md:gap-2 max-w-[600px] mt-20 md:mt-0 md:text-left text-center items-center md:items-start'>
                <img src={homeabout} alt="about-logo" className='md:mr-20 md:block hidden ' />
            </div>
            <div className='flex flex-col gap-10 justify-center md:flex-1 md:mt-0 mt-5'>
                <h1 className='text-center md:text-4xl font-[600px] text-2xl md:font-normal'>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum augue sed tempor facilisis. Vestibulum tristique dolor non fermentum facilisis. Ut id velit eu magna aliquam feugiat vel non purus. Nunc placerat quam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum augue sed tempor facilisis. Vestibulum tristique dolor non fermentum facilisis. </p>
                <div className='flex justify-center'>
                    <img src={homeabout} alt="about-logo" className='md:mr-20 md:hidden block w-[194px] h-[225px]' />
                </div>
                <div className='flex items-center md:justify-between justify-around xl:justify-around'>
                    <div className='flex items-center md:gap-3'>
                        <img className='h-[40px] w-[40px]' src={a1} alt="about-card-img"></img>
                        <div className='flex md:flex-row flex-col'>
                            <h3 className="md:text-4xl text-xl text-[#6F9FC2] font-bold">25+</h3>
                            <p className='text-[#565A5C]'>Years Experience</p>
                        </div>

                    </div>
                    <div className='flex items-center md:gap-3'>
                        <img className='h-[40px] w-[40px]' src={a1} alt="about-card-img"></img>
                        <div className='flex md:flex-row flex-col'>
                            <h3 className="md:text-4xl text-xl text-[#6F9FC2] font-bold">25+</h3>
                            <p className='text-[#565A5C]'>Years Experience</p>
                        </div>

                    </div>
                </div>
                <div className='flex items-center md:justify-between justify-around'>
                    <div className='flex items-center md:gap-3'>
                        <img className='h-[40px] w-[40px]' src={a1} alt="about-card-img"></img>
                        <div className='flex md:flex-row flex-col'>
                            <h3 className="md:text-4xl text-xl text-[#6F9FC2] font-bold">25+</h3>
                            <p className='text-[#565A5C]'>Years Experience</p>
                        </div>

                    </div>
                    <div className='flex items-center md:gap-3'>
                        <img className='h-[40px] w-[40px]' src={a1} alt="about-card-img"></img>
                        <div className='flex md:flex-row flex-col'>
                            <h3 className="md:text-4xl text-xl text-[#6F9FC2] font-bold">25+</h3>
                            <p className='text-[#565A5C]'>Years Experience</p>
                        </div>

                    </div>
                </div>
                <div className='flex justify-center'>
                    <a className="md:block hidden"><button className='rounded-lg text-[#6F9FC2] bg-white  border-2 px-[20px] py-[9px] border-[#6F9FC2]'>Know more</button></a>
                </div>

                <a className="md:hidden block"><button className='rounded-md text-white bg-[#6F9FC2]  border-2  py-[9px] border-[#6F9FC2] w-[100%]'>Know more</button></a>



            </div>

        </div>
    )
}

export default About
