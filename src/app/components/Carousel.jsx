"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import cake1 from "../../../public/images/cake.jpg";
import cake2 from "../../../public/images/cake2.jpg";
import cake3 from "../../../public/images/cake3.jpg";
import cake4 from "../../../public/images/cake4.jpg";
import cake5 from "../../../public/images/cake5.jpg";
import cake6 from "../../../public/images/cake5.jpg";
const CarouselData = [
    {
        image: cake1,
        heading: "Blueteck Computers",
    },
    {
        image: cake2,
        heading: "Blueteck Computers",
    },
    {
        image: cake3,
        heading: "Blueteck Computers",
    },
    {
        image: cake4,
        heading: "Blueteck Computers",
    },
    {
        image: cake5,
        heading: "Blueteck Computers",
    },
    {
        image: cake6,
        heading: "Blueteck Computers",
    },
];

const slidesCount = CarouselData.length - 1;

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === slidesCount ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className='w-screen'>
            <div className='w-full h-unit-9xl relative flex overflow-hidden'>
                {CarouselData.map((slide, index) => (
                    <div
                        key={index}
                        className={`w-full h-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 ease-out`}
                        style={{
                            transform: `translateX(-${activeIndex * 100}%)`,
                        }}>
                        <main className='w-full flex justify-center' id='main'>
                            <div className='w-full h-full'>
                                <Image
                                    alt='lap'
                                    src={slide.image}
                                    placeholder='blur'
                                    quality={100}
                                    fill
                                    sizes='50vw'
                                    className='-z-10 object-contain'
                                />
                                {/* <div className='w-full'>
                                    <h1 className='font-bold text-4xl pb-4 text-blue-600'>
                                        {slide.heading}{" "}
                                    </h1>
                                </div> */}
                            </div>
                        </main>
                    </div>
                ))}
                <div className=''>
                    <button
                        className='bg-blue-900 text-white p-2 opacity-0 hover:opacity-80 absolute -translate-y-1/2 left-0 top-1/2 z-20'
                        onClick={() => {
                            setActiveIndex(
                                activeIndex < 1 ? slidesCount : activeIndex - 1
                            );
                        }}>
                        prev
                    </button>
                    <button
                        className='bg-blue-900 text-white p-2 opacity-0 hover:opacity-80 absolute -translate-y-1/2 right-0 top-1/2 z-20'
                        onClick={() => {
                            setActiveIndex(
                                activeIndex === slidesCount
                                    ? 0
                                    : activeIndex + 1
                            );
                        }}>
                        next
                    </button>
                </div>
                <div className='flex z-30 absolute bottom-6 left-1/2'>
                    <div className='relative'>
                        <div className='absolute -translate-x-1/2 flex'>
                            {CarouselData.map((slide, index) => (
                                <span
                                    key={index}
                                    className={`w-8 h-1 mr-2 rounded-full cursor-pointer ${
                                        index === activeIndex
                                            ? "bg-skyBlue"
                                            : "bg-skyBlue opacity-50"
                                    }`}
                                    onClick={() =>
                                        setActiveIndex(index)
                                    }></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
