"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import Image from 'next/image'
import React, { useCallback, useRef } from 'react'
import img1 from "../../../../../public/images/sdlc/1.jpg"
import img2 from "../../../../../public/images/sdlc/2.jpg"
import img3 from "../../../../../public/images/sdlc/3.jpg"
import img4 from "../../../../../public/images/sdlc/4.jpg"
import img5 from "../../../../../public/images/sdlc/5.jpg"
import img6 from "../../../../../public/images/sdlc/6.jpg"
import img7 from "../../../../../public/images/sdlc/7.jpg"

import Link from "next/link";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

function Services({translate}) {
    const sdlc = translate.home.sdlc
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);


    const nextPrevComponent = (data , index) => {

        return (
            <div data-aos-duration="1000" data-aos="fade-up" className=" mt-7 z-10 flex items-end justify-end gap-5 ">
                <div className={`prev-arrow cursor-pointer ${data.indexOf(index) === 0 && "opacity-50"}`} onClick={handlePrev}>
                    <button aria-label="prev" className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-stroke border-amber-500  text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:drop-shadow-none">
                        <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current text-orange"
                        >
                            <path
                                d="M17.5 9.5H4.15625L9.46875 4.09375C9.75 3.8125 9.75 3.375 9.46875 3.09375C9.1875 2.8125 8.75 2.8125 8.46875 3.09375L2 9.65625C1.71875 9.9375 1.71875 10.375 2 10.6562L8.46875 17.2188C8.59375 17.3438 8.78125 17.4375 8.96875 17.4375C9.15625 17.4375 9.3125 17.375 9.46875 17.25C9.75 16.9687 9.75 16.5313 9.46875 16.25L4.1875 10.9062H17.5C17.875 10.9062 18.1875 10.5937 18.1875 10.2187C18.1875 9.8125 17.875 9.5 17.5 9.5Z"
                                fill=""
                            />
                        </svg>
                    </button>
                </div>
                <div className={`next-arrow cursor-pointer ${data.indexOf(index) === data.length -1&& "opacity-50"}`} onClick={handleNext}>
                    <button aria-label="next" className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-stroke bg-orange   text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:hover:drop-shadow-none">
                        <svg
                            width="20"
                            height="21"
                            viewBox="0 0 20 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current"
                        >
                            <path
                                d="M18 9.6875L11.5312 3.125C11.25 2.84375 10.8125 2.84375 10.5312 3.125C10.25 3.40625 10.25 3.84375 10.5312 4.125L15.7812 9.46875H2.5C2.125 9.46875 1.8125 9.78125 1.8125 10.1562C1.8125 10.5312 2.125 10.875 2.5 10.875H15.8437L10.5312 16.2813C10.25 16.5625 10.25 17 10.5312 17.2813C10.6562 17.4063 10.8437 17.4688 11.0312 17.4688C11.2187 17.4688 11.4062 17.4062 11.5312 17.25L18 10.6875C18.2812 10.4062 18.2812 9.96875 18 9.6875Z"
                                fill=""
                            />
                        </svg>
                    </button>
                </div>
            </div>
        )
    }


    const data = [
        {
            title: sdlc.gatheringTitle,
            image: img1,
            describtion: sdlc.gatheringDescription
        },
        {
            title: sdlc.analysisTitle,
            image: img2,
            describtion: sdlc.analysisDescription
        },
        {
            title: sdlc.designTitle,
            image: img3,
            describtion: sdlc.designDescription
        },
        {
            title: sdlc.implementationTitle,
            image: img4,
            describtion: sdlc.implementationDescription
        },
        {
            title: sdlc.testingTitle,
            image: img5,
            describtion: sdlc.testingDescription
        },
        {
            title: sdlc.integrationTitle,
            image: img6,
            describtion: sdlc.integrationDescription
        },
        {
            title: sdlc.maintenance,
            image: img7,
            describtion: sdlc.maintenanceDescription
        },
        
    ]


    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1000" className='my-10 bg-white p-6 md:p-8 lg:p-10 rounded-3xl'>
                <section className="pb-5 pt-5 dark:bg-dark lg:pb-[20px] lg:pt-[5px]">
                    <div data-aos-duration="1000" data-aos="fade-up" className="mb-5">
                        <Link className="capitalize text-white btnOrange py-2 px-6 rounded-full" href={"/services"}>{sdlc.sdlc}</Link>
                    </div>
                    <div data-aos-duration="1000" data-aos="fade-up" className="container mx-auto">
                        <Swiper className="SwiperSdlc" navigation={true} modules={[Navigation]} slidesPerView={1} ref={sliderRef}>
                            {data.map((item  , index) => (
                                <SwiperSlide key={index}>
                                    <div className='grid md:grid-cols-2 gap-7 lg:gap-10'>
                                        <div className='py-3 flex flex-col justify-between'>
                                            <div className="flex items-center">
                                                <p className="me-2 md:text-3xl font-bold text-orange">{index + 1}-</p>
                                                <h2 className='font-semibold capitalize text-lg lg:text-3xl my-4'>{item.title}</h2>
                                            </div>
                                            <h3 className='text-sm font-medium capitalize  md:leading-6 overflow-y-auto max-h-[140px]'>{item.describtion}</h3>
                                            {nextPrevComponent(data ,item)}
                                        </div>
                                        <div className='relative overflow-hidden mx-auto rounded-xl w-full xl:w-10/12 h-[200px] sm:h-[250px] md:h-[300px]'>
                                            <Image fill sizes='(max-width:992px) , 100vw' src={item.image} alt="image" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Services
