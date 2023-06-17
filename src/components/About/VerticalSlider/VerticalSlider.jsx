import React from 'react';
import { useState } from 'react';
import "./VerticalSlider.css";

const VerticalSlider = () => {
    const [current, setCurrent] = useState(0);

    const arr = [
        {
            index: 0,
            title: "How did this journey begin?",
            content:
                "The spiritual journey started at the age of 7 when Ayush Gupta started doing Meditation. In a very short period of time Ayush started feeling a special connection with the energies. By the time he was 12 he started practicing Reiki.",
        },
        {
            index: 1,
            title: "Miracles and divine interventions along the way.",
            content:
                "Ayush and his family realised that his mother had developed throat cancer, and it almost seemed like a divine intervention by the universal energies that Ayush had recently learned Reiki healing therapy through which he completely cured his mother’s cancer.",
        },
        {
            index: 2,
            title: "accomplishments made so far in the voyage.",
            content:
                "In 2021 Ayush along with his Aarvika Gupta founded a spiritual organization through which they have organized “Anannt Oorja Safar”. During the pandemic Ayush provided Reiki healing to as many people as he could help, who were suffering from Covid-19. Now Ayush has implemented meditation curriculum in many schools across across India, Nepal and Dubai.",
        },
        {
            index: 3,
            title: "Our objectives and future vision.",
            content:
                "Ayush Gupta believes in the ancient Indian philosophy of “वसुधैव कुटुंभकम्” which means that the world is our family, and he wants people of the world to be more mindful towards humans, animals and Mother Earth. He wants to propagate the idea of love and inclusiveness in the society so people can live a happier and healthier life where they’re more mindful of their actions. Ayush wants the younger generation to be more involved in spiritual growth so they grow up to be more self aware.",
        },
    ];
    return (
        <>
            <h2 className='text-center lg:hidden block font-[600px] text-2xl mt-[40px] mb-[30px]'>Journey</h2>
            <div className="flex lg:hidden items-center gap-[15px] overflow-x-hidden">
                <div className="left-nav">
                    {arr.map((i, index) => (
                        <span
                            key={index}
                            className={current === i.index ? "circle active" : "circle"}
                            onClick={() => setCurrent(i.index)}
                        ></span>
                    ))}
                </div>
                <div className="right-part w-full">
                    {arr.map((i) => (
                        <div
                            key={i.index}
                            className={current === i.index ? "card active" : "card"}
                        >
                            <h6 className="title">{i.title}</h6>
                            <p className="content">{i.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default VerticalSlider
