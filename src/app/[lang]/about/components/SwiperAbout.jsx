"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

function SwiperAbout({ data }) {

    const [k, setK] = useState("")

    useEffect(() => {
        setK(document.querySelector(".swiper-slide-active"))
    }, [])

    const handleChange = () => {
        setK(document.querySelector(".swiper-slide-active"))
    }
    
    return (
        <>
            <div className='bg-white md:w-3/4 mx-auto p-10 rounded-xl relative mt-10'>
                <p className='text-sm text-center font-semibold'>{data[k?.id - 1]?.about}</p>
                <p className='text-center mt-7 font-bold'>John Wick</p>
                <div className='flex justify-center mt-5'>
                    <Link className='mx-2' href={"/"}>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.8444 1.89354C19.1201 2.21538 18.3428 2.43262 17.5244 2.52923C18.3582 2.02954 18.9988 1.23815 19.301 0.295385C18.5195 0.756923 17.6561 1.09538 16.7361 1.27508C15.9988 0.490462 14.949 0 13.7871 0C11.5558 0 9.74838 1.808 9.74838 4.03877C9.74838 4.35508 9.78345 4.664 9.85299 4.95938C6.49484 4.78954 3.51884 3.18154 1.52684 0.738461C1.17915 1.33538 0.979146 2.02954 0.979146 2.76923C0.979146 4.17231 1.69299 5.40738 2.77607 6.13231C2.11392 6.11077 1.49115 5.92923 0.946531 5.62769V5.67692C0.946531 7.63508 2.3373 9.26769 4.18592 9.63877C3.84745 9.73108 3.49053 9.78031 3.1213 9.78031C2.86099 9.78031 2.60868 9.75569 2.36253 9.70831C2.87576 11.312 4.36869 12.48 6.13484 12.5132C4.7533 13.5963 3.01176 14.2425 1.11945 14.2425C0.7933 14.2425 0.471454 14.224 0.155762 14.1871C1.94407 15.3317 4.06715 16 6.34838 16C13.7773 16 17.8407 9.84615 17.8407 4.50769C17.8407 4.33292 17.8358 4.15815 17.8284 3.98462C18.6179 3.41538 19.3022 2.70462 19.8444 1.89354Z" fill="#0F1428" />
                        </svg>
                    </Link>
                    <Link className='mx-2' href={"/"}>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.9595 2.27036e-06H1.72948C1.61319 -0.000261436 1.49799 0.0224498 1.3905 0.0668318C1.28301 0.111214 1.18534 0.176392 1.10311 0.258625C1.02087 0.340857 0.955696 0.438523 0.911314 0.546016C0.866932 0.653508 0.844221 0.768708 0.844485 0.885002V15.115C0.844485 15.605 1.23948 16 1.72948 16H9.38848V9.803H7.29848V7.403H9.38848V5.62C9.38848 3.551 10.6585 2.431 12.4925 2.431C13.3675 2.431 14.1355 2.484 14.3595 2.527V4.682H13.0685C12.0655 4.682 11.8845 5.151 11.8845 5.855V7.402H14.2635L13.9535 9.802H11.8845V16H15.9595C16.4495 16 16.8445 15.605 16.8445 15.115V0.885002C16.8447 0.768708 16.822 0.653508 16.7777 0.546016C16.7333 0.438523 16.6681 0.340857 16.5859 0.258625C16.5036 0.176392 16.406 0.111214 16.2985 0.0668318C16.191 0.0224498 16.0758 -0.000261436 15.9595 2.27036e-06Z" fill="#0F1428" />
                        </svg>
                    </Link>
                    <Link className='mx-2' href={"/"}>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.6605 0C16.3105 0 16.8445 0.512 16.8445 1.152V14.848C16.8445 15.478 16.3115 16 15.6605 16H2.02848C1.37848 16 0.844482 15.477 0.844482 14.848V1.152C0.844482 0.512 1.37748 0 2.02848 0H15.6605ZM4.40748 4.96C4.76744 4.95031 5.10941 4.80051 5.36059 4.54249C5.61176 4.28446 5.75231 3.93859 5.75231 3.5785C5.75231 3.21841 5.61176 2.87254 5.36059 2.61451C5.10941 2.35648 4.76744 2.20669 4.40748 2.197C3.63948 2.197 3.03148 2.816 3.03148 3.573C3.03148 4.341 3.63948 4.96 4.40748 4.96ZM14.4765 9.45C14.4765 7.392 14.0395 5.813 11.6285 5.813C10.4765 5.813 9.70848 6.443 9.38848 7.04H9.35648V5.995H7.08448V13.632H9.45248V9.856C9.45248 8.864 9.63348 7.893 10.8715 7.893C12.0875 7.893 12.1085 9.035 12.1085 9.92V13.632H14.4765V9.45ZM3.21248 13.633H5.59148V5.995H3.21248V13.633Z" fill="#0F1428" />
                        </svg>
                    </Link>
                </div>
                <div className='absolute border-t-transparent border-l-transparent border-b-white border-r-white -bottom-6 border-[30px] w-[70px] h-[70px] rotate-45 left-1/2 right-1/2 -translate-x-1/2 '>
                </div>
            </div>


            <Swiper
                onSlideChange={handleChange}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 20,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                navigation={true}
                modules={[EffectCoverflow, Navigation]}
                className="mySwiperAbout"
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} id={item.id} className='relative'>
                        <Image priority sizes='(min-width:992px) , 100vw' fill src={item.img} alt={item.img} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default SwiperAbout
