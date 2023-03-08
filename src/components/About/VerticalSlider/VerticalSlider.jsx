import React from 'react';
import { useState } from 'react';
import "./VerticalSlider.css";

const VerticalSlider = () => {
    const [current, setCurrent] = useState(0);

    const arr = [
        {
            index: 0,
            title: "How we started? 0",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quo nemo! Rerum quae fuga ipsum voluptate doloremque nostrum corrupti perspiciatis?",
        },
        {
            index: 1,
            title: "How we started? 1",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quo nemo! Rerum quae fuga ipsum voluptate doloremque nostrum corrupti perspiciatis?",
        },
        {
            index: 2,
            title: "How we started? 2",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quo nemo! Rerum quae fuga ipsum voluptate doloremque nostrum corrupti perspiciatis?",
        },
        {
            index: 3,
            title: "How we started? 3",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quo nemo! Rerum quae fuga ipsum voluptate doloremque nostrum corrupti perspiciatis?",
        },
    ];
    return (
        <>
            <h2 className='text-center md:hidden block font-[600px] text-2xl mt-[40px] mb-[30px]'>Journey</h2>
            <div className="flex md:hidden items-center gap-[15px] overflow-x-hidden">
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
