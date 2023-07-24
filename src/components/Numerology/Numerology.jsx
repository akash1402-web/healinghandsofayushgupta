import React, { useState } from 'react';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import headernumero from '../../Assets/numerologyHeader.png';
import numero2 from '../../Assets/numero2.png';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers';
import CalendarTodayIcon from '@mui/icons-material/Cake';
import { InputAdornment, IconButton } from '@material-ui/core';

const Numerology = () => {
    // const [date, setDate] = useState(new Date());
    const color = "white";
    // const [date, setDate] = useState(null);
    // const [rootNumber, setRootNumber] = useState(null);
    // const rootNumber = date.getDate() % 9;
    // const rootNumberText = `Root Number ${rootNumber + 1}`;
    // const handleDateChange = (date) => {
    //     setDate(date);

    //     // Calculate root number
    //     let dob = date.format("DDMMYYYY");
    //     let sum = 0;
    //     for (let i = 0; i < dob.length; i++) {
    //         sum += parseInt(dob.charAt(i));
    //     }
    //     while (sum > 9) {
    //         sum = parseInt(sum / 10) + (sum % 10);
    //     }
    //     setRootNumber(sum);
    // };
    const [date, setDate] = useState(null);
    const [rootNumberText, setRootNumberText] = useState('Get Your Root Number By Selecting your BirthDate');
    const [rootNumber, setRootNumber] = useState(null);

    const [destinyNumberText, setDestinyNumberText] = useState('Get Your Destiny Number By Selecting your BirthDate');
    const [destinyNumber, setDestinyNumber] = useState(null);

    function sumDigits(num) {
        let sum = 0;
        while (num) {
            console.log(num);
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        console.log(sum);
        return sum;
    }
    const handleDateChange = (date) => {
        if (!date) {
            setRootNumberText('');
            setDestinyNumberText('');
            return;
        }

        // const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        // const dateString = date.toLocaleDateString('en-US', options).replace(/\//g, '-');
        const dateString = date.toISOString().slice(0, 10);
        console.log(dateString);
        const dateNumbers = dateString.split('-').map(Number);
        console.log(dateNumbers[2] + 1);
        console.log(dateNumbers.length);
        var result = sumDigits(dateNumbers[2] + 1);
        var tempsum = 0
        for (let i = 0; i < dateNumbers.length; i++) {
            tempsum += dateNumbers[i];
        }
        tempsum = tempsum + 1;
        var destinyResult = sumDigits(tempsum);
        setRootNumber(result);

        while (destinyResult > 9) {
            destinyResult = sumDigits(destinyResult);
        }
        setDestinyNumber(destinyResult);
        switch (result) {
            case 1:
                setRootNumberText('Are authoritative, creative, strong individuals. Stick on their principles. Such people are brave and achievers in life.');
                break;
            case 2:
                setRootNumberText('Are emotional, sensitive, caring and loving. Feels good in helping people and are good listeners. Are very cooperative and trustworthy in nature.');
                break;
            case 3:
                setRootNumberText('Have confidence, energy and commitment towards their work. Have good communication skills. Such people are quite inquisitive. Have a good convincing power.');
                break;
            case 4:
                setRootNumberText('Such people are well aware of their strengths and weaknesses. Find logistic reasons behind every conversation. Are well aware of their capabilities.');
                break;
            case 5:
                setRootNumberText('Have inconsistent mental thoughts. Love making people happy. Achieve great success in their life. Such people are very knowledgeable.');
                break;
            case 6:
                setRootNumberText('Such people are artistic and love their art. Have a very impactful personality. Are financially unstable.');
                break;
            case 7:
                setRootNumberText('Are very smart. Have an impactful presence and are very prosperous. Have a very impactful personality.');
                break;
            case 8:
                setRootNumberText('Believe in hardworking and achieving goals. Are unlucky sometimes. Are serious for their career. Run a good business.');
                break;
            case 9:
                setRootNumberText('Such people are courageous and hardworking. Have a struggling career. Have a good firm power and are opportunist.');
                break;
            default:
                setRootNumberText('hello world');
        }

        switch (destinyResult) {
            case 1:
                setDestinyNumberText('Are authoritative, creative, strong individuals. Stick on their principles. Such people are brave and achievers in life.');
                break;
            case 2:
                setDestinyNumberText('Are emotional, sensitive, caring and loving. Feels good in helping people and are good listeners. Are very cooperative and trustworthy in nature.');
                break;
            case 3:
                setDestinyNumberText('Have confidence, energy and commitment towards their work. Have good communication skills. Such people are quite inquisitive. Have a good convincing power.');
                break;
            case 4:
                setDestinyNumberText('Such people are well aware of their strengths and weaknesses. Find logistic reasons behind every conversation. Are well aware of their capabilities.');
                break;
            case 5:
                setDestinyNumberText('Have inconsistent mental thoughts. Love making people happy. Achieve great success in their life. Such people are very knowledgeable.');
                break;
            case 6:
                setDestinyNumberText('Such people are artistic and love their art. Have a very impactful personality. Are financially unstable.');
                break;
            case 7:
                setDestinyNumberText('Are very smart. Have an impactful presence and are very prosperous. Have a very impactful personality.');
                break;
            case 8:
                setDestinyNumberText('Believe in hardworking and achieving goals. Are unlucky sometimes. Are serious for their career. Run a good business.');
                break;
            case 9:
                setDestinyNumberText('Such people are courageous and hardworking. Have a struggling career. Have a good firm power and are opportunist.');
                break;
            default:
                setDestinyNumberText('hello world');
        }
    };

    return (
        <section className='bg-rect bg-cover bg-no-repeat'>
            <div className="container mx-auto px-3 sm:px-6 md:px-12 lg:px-16 ">
                <div className=''>
                    <div className=' mt-[36px]'>
                        <h2 className='md:text-4xl font-400 md:leading-[80px] text-2xl leading-[40px]'> Numerology</h2>
                        {/* <a href='/' className='md:text-sm font-bold text-[#8777D7] underline'>Calculate your Birth Number<HiOutlineArrowSmRight className='inline'></HiOutlineArrowSmRight></a> */}
                    </div>
                    <div className='text-center'>
                        <div className='flex lg:justify-around lg:flex-row flex-col lg:gap-10'>
                            <div>
                                <p className='text-center lg:mt-[193px] md:text-3xl md:leading-[46px] md:mt-[176px] mt-[90px]'>Calculate Your Birth Number</p>
                                <p className='font-semibold md:text-lg md:leading-[48px] text-center md:mb-[50px] mb-[40px] max-w-3xl'>{rootNumber && <p>Root Number: {rootNumber}</p>}</p>
                                <p className='font-semibold md:text-lg md:leading-[48px] text-center md:mb-[50px] mb-[40px] max-w-3xl'>{rootNumberText}</p>
                            </div>

                            <div className='lg:block hidden'>
                                <p className='text-center lg:mt-[193px] md:text-3xl md:leading-[46px]'>Calculate Your Destiny Number</p>
                                <p className='font-semibold md:text-lg md:leading-[48px]  md:mb-[50px] mb-[40px] max-w-3xl'>{destinyNumber && <p>Destiny Number: {destinyNumber}</p>}</p>
                                <p className='font-semibold md:text-lg md:leading-[48px]  md:mb-[50px] mb-[40px] max-w-3xl'>{destinyNumberText}</p>

                            </div>
                        </div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MobileDatePicker
                                inputFormat="DD/MM/YYYY"
                                value={date}
                                onChange={(newValue) => {
                                    setDate(newValue);
                                    handleDateChange(newValue);
                                }}
                                renderInput={(params) => <TextField {...params}

                                    placeholder="dd/mm/yyyy"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton>
                                                    <CalendarTodayIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{
                                        svg: { color },
                                        input: { color },
                                        label: { color }
                                    }} />}

                                className='bg-[#8777D7] rounded-lg overflow-hidden ' />
                        </LocalizationProvider>
                        <div className='mt-[80px] lg:hidden block'>
                            <p className='text-center lg:mt-[193px] md:text-4xl md:leading-[46px]'>Calculate Your Destiny Number</p>
                            <p className='font-semibold md:text-lg md:leading-[48px]  md:mb-[50px] mb-[40px] max-w-3xl'>{destinyNumber && <p>Destiny Number: {destinyNumber}</p>}</p>
                            <p className='font-semibold md:text-lg md:leading-[48px]  md:mb-[50px] mb-[40px] max-w-3xl'>{destinyNumberText}</p>

                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex flex-col md:leading-[40px] md:text-xl md:w-[900px]  lg:mt-[150px] items-center'>
                            <img src={headernumero} alt="numerology-img" className=' md:mt-[115px] lg:hidden xs:w-[181px] xs:h-[253px] md:w-[300px] md:h-[400px]' />
                            <p className='md:mt-[0px] mt-[44px] text-center md:text-left'>Numerology’s fundamental belief is that the universe is a system which can be broken down to its most basic elements – numbers. It believes that numbers are a universal language which we can learn to interpret.</p>

                            <p className='md:mt-[50px] text-center md:text-left mt-[30px]'>It is used as a form of divination which studies numbers as connections to personality traits of individuals, their destinies as well as circumstances and events in their lives.</p>

                            <p className='md:mt-[50px] text-center md:text-left mt-[30px]'>There are a total of 11 number vibrations, that is, 1 through 9, 11 and 22. Each of these are associated with specific characteristics and can be used to understand individuals or predict outcomes in their lives.
                            </p>
                        </div>
                        <img src={headernumero} alt="numerology-img" className='mr-[40px]  md:mt-[115px] lg:block hidden' />

                    </div>
                    <p className='md:leading-[40px] md:text-xl mt-[30px] text-center md:text-left'>
                        Understanding each of the 11 number vibrations. Learning this enables you to interpret how each vibration affects us. Make a point to learn each of these numbers as though they were a group of your friends. Each with unique personality traits, quirks, strengths and shortcomings.
                        These traits come about as a result of the numbers’ inherent vibration.</p>

                    <p className='md:leading-[40px] md:text-xl mt-[50px] text-center md:text-left'>
                        Mastery of the basic arithmetic involved. This requires you to add numbers together. If you are not great at mental math, there is no shame in grabbing the nearest calculator.
                    </p>

                    <div className='lg:flex lg:flex-row flex-col lg:mt-[100px] gap-32'>
                        <h4 className='md:text-4xl md:leading-[80px] font-400 lg:hidden block text-center mt-[80px] text-2xl font-normal'>Birth number or Root number</h4>
                        <img src={numero2} alt="calendar-img" className='lg:w-[455px] lg:h-[372px] lg:mt-[0px] mt-[35px] w-full flex justify-center' />
                        <div>
                            <h4 className='md:text-4xl md:leading-[80px] font-400 lg:block hidden'>Birth number or Root number</h4>
                            <p className='md:text-xl md:leading-[30px] md:mt-[0px] mt-[60px] text-center md:text-left'>The numerology birthday number is known as the radical number or the root number, psychic number or ruling number and also. This number is extracted from birthday. This is the number of the day, when you were born.
                                According to the name, it has deep meaning, it tells about the psychic stage and behavior. The birthday number explains everything about you</p>
                            <p className='md:text-xl md:leading-[30px] text-center md:text-left'>because it is called the ruling number, which rules you.
                                You can use the above ruling number calculator, which calculates all for you. You can check it manually also. It is important to know there is no importance of the master numbers for the birthday number. For the calculation, reduce your birthday number till the single digit one to nine, if it is not single digit already.</p>
                        </div>
                    </div>


                </div >
            </div>
        </section>
    )
}

export default Numerology
