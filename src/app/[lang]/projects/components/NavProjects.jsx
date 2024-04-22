"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NavProjects({ services }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const handleParams = (name) => {
        const query = new URLSearchParams(searchParams);
        query.set("category", name)
        router.push(`?category=${query.get("category")}`)
    }



    const settings = {
        className: "center",
        centerPadding: 100,
        infinite: false,
        speed: 500,
        variableWidth: true,
        slidesToShow: 7,
        responsive: [

            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 772,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className=' mt-5  py-7'>
            <div className="slider-container">
                <Slider {...settings}>
                    <button onClick={() => router.push(`${pathname}`)} className={`me-2  text-xs md:text-sm capitalize ${searchParams.get("category") === null ? "bg-amber-700 text-white" : "bg-white text-yellow-700"} py-1.5  font-bold px-3  rounded-full mt-3`}>all</button>
                    {services.map((item) => (
                        <button onClick={() => handleParams(item.slug)} key={item.id} className={`me-2 whitespace-nowrap text-xs md:text-sm capitalize ${searchParams.get("category") === `${item.slug}` ? "bg-amber-700 text-white" : "bg-white text-yellow-700"}  font-bold px-3 py-1.5 rounded-full mt-3`}>{item.name}</button>
                    ))}

                </Slider>

            </div>
        </div>
    )
}

export default NavProjects
