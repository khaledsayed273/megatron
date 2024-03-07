"use client"
import React from 'react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import img1 from "../../../../../../public/images/single-service/1.jpg"
import img2 from "../../../../../../public/images/contact-us/1.jpg"
import img3 from "../../../../../../public/images/contact-us/2.jpg"
import img4 from "../../../../../../public/images/contact-us/3.jpg"
import img5 from "../../../../../../public/images/contact-us/4.jpg"
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
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Image fill priority sizes='(min-width:991px) , 100vw' src={item.url} alt='image' />
                    </SwiperSlide>
                ))}


            </Swiper>

        </div>
    )
}

export default SwiperImages
