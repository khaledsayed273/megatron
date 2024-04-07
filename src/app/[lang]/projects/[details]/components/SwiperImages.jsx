"use client"
import React from 'react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import Image from 'next/image';


function SwiperImages({details}) {

    const data = details.images

    return (
        <div className='my-16'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="swiperProjectsImages"
            >
                {data.map((item , index) => (
                    <SwiperSlide key={index}>
                        <Image fill priority sizes='(min-width:991px) , 100vw' src={item.url} alt={`image-${index}`} />
                    </SwiperSlide>
                ))}


            </Swiper>

        </div>
    )
}

export default SwiperImages
