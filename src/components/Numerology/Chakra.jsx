import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Chakra = () => {
    const [level, setLevel] = useState(0);
    const chakraLevels = [{
        level: 1,
        title: "Your Base Chakra",
        content: "The first level of your energy anatomy is the base chakra.This chakra is located at the base of your spine and its job is to look after the spine, hips, legs, feet, as well your physical body in general. It makes sure that you receive everything you needs to survive, i.e food, water, shelter.",
    },
    {
        level: 2,
        title: "Your Base Chakra",
        content: "The second level of your energy anatomy is the base chakra.This chakra is located at the base of your spine and its job is to look after the spine, hips, legs, feet, as well your physical body in general. It makes sure that you receive everything you needs to survive, i.e food, water, shelter.",
    },
    {
        level: 3,
        title: "Your Base Chakra",
        content: "The first level of your energy anatomy is the base chakra.This chakra is located at the base of your spine and its job is to look after the spine, hips, legs, feet, as well your physical body in general. It makes sure that you receive everything you needs to survive, i.e food, water, shelter.",
    },
    {
        level: 4,
        title: "Your Base Chakra",
        content: "The first level of your energy anatomy is the base chakra.This chakra is located at the base of your spine and its job is to look after the spine, hips, legs, feet, as well your physical body in general. It makes sure that you receive everything you needs to survive, i.e food, water, shelter.",
    },
    {
        level: 5,
        title: "Your Base Chakra",
        content: "The first level of your energy anatomy is the base chakra.This chakra is located at the base of your spine and its job is to look after the spine, hips, legs, feet, as well your physical body in general. It makes sure that you receive everything you needs to survive, i.e food, water, shelter.",
    },
    {
        level: 6,
        title: "Your Base Chakra",
        content: "The first level of your energy anatomy is the base chakra.This chakra is located at the base of your spine and its job is to look after the spine, hips, legs, feet, as well your physical body in general. It makes sure that you receive everything you needs to survive, i.e food, water, shelter.",
    },
    {
        level: 7,
        title: "Your Base Chakra",
        content: "The first level of your energy anatomy is the base chakra.This chakra is located at the base of your spine and its job is to look after the spine, hips, legs, feet, as well your physical body in general. It makes sure that you receive everything you needs to survive, i.e food, water, shelter.",
    }]
    return (
        <div className='flex md:mt-[70px] w-full items-center'>
            <div className='flex flex-col w-[80%]'>
                <h3 className='text-4xl font-semibold'>Level {chakraLevels[level].level}</h3>
                <h3 className='text-4xl font-semibold'> {chakraLevels[level].title}</h3>
                <div className='flex gap-3 mt-[32px] items-center'>
                    <button className="p-4 bg-[#8777D7] w-max rounded-lg text-white font-bold" onClick={() => setLevel(l => (l - 1) % chakraLevels.length)}><FaArrowLeft size={15} /></button>
                    {level + 1}/{chakraLevels.length}
                    <button className="p-4 bg-[#8777D7] w-max rounded-lg text-white font-bold" onClick={() => setLevel(l => (l + 1) % chakraLevels.length)}><FaArrowRight size={15} /></button>
                </div>
            </div>
            <p className='bg-[#A497C821] text-xl leading-10 p-10'>
                {chakraLevels[level].content}</p>
        </div>
    )
}

export default Chakra
