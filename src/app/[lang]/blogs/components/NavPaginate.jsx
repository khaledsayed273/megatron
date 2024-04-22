"use client"
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NavPaginate({ category }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const handleParams = (id) => {
        const query = new URLSearchParams(searchParams);
        query.set("category", id)
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
        <div data-aos="fade-up" data-aos-duration="1000">
            <div className="slider-container">
                <Slider {...settings}>
                <button onClick={() => router.push(`${pathname}`)} className={`me-2 text-xs md:text-sm capitalize ${searchParams.get("category") === null ? "bg-amber-700 text-white" : "bg-white text-yellow-700"} font-bold px-3 py-1.5 rounded-full mt-3`}>all</button>
                {category?.data.map((item) => (

                    <button key={item.id} onClick={() => handleParams(item.id)} className={`me-2 text-xs md:text-sm capitalize ${searchParams.get("category") === `${item.id}` ? "bg-amber-700 text-white" : "bg-white text-yellow-700"} font-bold px-3 py-1.5 rounded-full mt-3`}>{item.name}</button>
                ))}
                </Slider>

            </div>
        </div>
    )
}

export default NavPaginate
