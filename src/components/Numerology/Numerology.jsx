import React, { useState } from 'react';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import headernumero from '../../Assets/numerologyHeader.png';
import numero2 from '../../Assets/numero2.png';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Numerology = () => {
    const [date, setDate] = useState(new Date());
    const color = "white";

    return (
        <div className='w-full  md:px-[40px] px-[20px]'>
            <div className=' mt-[36px]'>
                <h2 className='md:text-4xl font-400 md:leading-[80px] text-2xl leading-[40px]'> Numerology</h2>
                <a className='md:text-sm font-bold text-[#8777D7] underline'>Calculate your Birth Number<HiOutlineArrowSmRight className='inline'></HiOutlineArrowSmRight></a>
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col md:leading-[40px] md:text-xl md:w-[900px]  md:mt-[150px] items-center'>
                    <img src={headernumero} alt="numerology-img" className=' md:mt-[115px] md:hidden w-[181px] h-[253px]' />
                    <p className='md:mt-[0px] mt-[44px] text-center md:text-left'>Numerology’s fundamental belief is that the universe is a system which can be broken down to its most basic elements – numbers. It believes that numbers are a universal language which we can learn to interpret.</p>

                    <p className='md:mt-[50px] text-center md:text-left mt-[30px]'>It is used as a form of divination which studies numbers as connections to personality traits of individuals, their destinies as well as circumstances and events in their lives.</p>

                    <p className='md:mt-[50px] text-center md:text-left mt-[30px]'>There are a total of 11 number vibrations, that is, 1 through 9, 11 and 22. Each of these are associated with specific characteristics and can be used to understand individuals or predict outcomes in their lives.
                    </p>
                </div>
                <img src={headernumero} alt="numerology-img" className='mr-[40px]  md:mt-[115px] md:block hidden' />

            </div>
            <p className='md:leading-[40px] md:text-xl mt-[30px] text-center md:text-left'>
                Understanding each of the 11 number vibrations. Learning this enables you to interpret how each vibration affects us. Make a point to learn each of these numbers as though they were a group of your friends. Each with unique personality traits, quirks, strengths and shortcomings.
                These traits come about as a result of the numbers’ inherent vibration.</p>

            <p className='md:leading-[40px] md:text-xl mt-[50px] text-center md:text-left'>
                Mastery of the basic arithmetic involved. This requires you to add numbers together. If you are not great at mental math, there is no shame in grabbing the nearest calculator.
            </p>

            <div className='md:flex md:flex-row flex-col md:mt-[100px] gap-32'>
                <h4 className='md:text-4xl md:leading-[80px] font-400 md:hidden block text-center mt-[80px] text-2xl font-normal'>Birth number or Root number</h4>
                <img src={numero2} alt="calendar-img" className='md:w-[455px] md:h-[372px] md:mt-[0px] mt-[35px]' />
                <div>
                    <h4 className='md:text-4xl md:leading-[80px] font-400 md:block hidden'>Birth number or Root number</h4>
                    <p className='md:text-xl md:leading-[30px] md:mt-[0px] mt-[60px] text-center md:text-left'>The numerology birthday number is known as the radical number or the root number, psychic number or ruling number and also. This number is extracted from birthday. This is the number of the day, when you were born.
                        According to the name, it has deep meaning, it tells about the psychic stage and behavior. The birthday number explains everything about you</p>
                    <p className='md:text-xl md:leading-[30px] text-center md:text-left'>because it is called the ruling number, which rules you.
                        You can use the above ruling number calculator, which calculates all for you. You can check it manually also. It is important to know there is no importance of the master numbers for the birthday number. For the calculation, reduce your birthday number till the single digit one to nine, if it is not single digit already.</p>
                </div>
            </div>

            <div className='text-center'>
                <h4 className='text-center md:mt-[283px] md:text-4xl md:leading-[46px] mt-[176px]'>Calculate Your Birth Number</h4>
                <h3 className='font-semibold md:text-4xl md:leading-[48px] text-center md:mb-[50px] mb-[40px]'>Such people are courageous and hardworking. Have a struggling career. Have a good firm power and are opportunist.</h3>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker

                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} sx={{
                            svg: { color },
                            input: { color },
                            label: { color }
                        }} />}

                        className='bg-[#8777D7] rounded-lg overflow-hidden ' />
                </LocalizationProvider>
            </div>


        </div >
    )
}

export default Numerology
