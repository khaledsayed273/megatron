"use client"
import {  usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'


function NavProjects({ services }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const handleParams = (name) => {
        const query = new URLSearchParams(searchParams);
        query.set("category", name)
        router.push(`?category=${query.get("category")}`)
    }

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-start mt-5 overflow-auto scroll-smooth py-7'>
            <div className='flex justify-start w-full  items-center '>
                <button onClick={() => router.push(`${pathname}`)} className={`me-2  text-xs md:text-sm capitalize ${searchParams.get("category") === null ? "bg-amber-700 text-white" : "bg-white text-yellow-700"} py-1.5  font-bold px-3  rounded-full mt-3`}>all</button>
                {services.map((item) => (
                    <button onClick={() => handleParams(item.slug)} key={item.id} className={`me-2 whitespace-nowrap text-xs md:text-sm capitalize ${searchParams.get("category") === `${item.slug}` ? "bg-amber-700 text-white" : "bg-white text-yellow-700"}  font-bold px-3 py-1.5 rounded-full mt-3`}>{item.name}</button>
                ))}
            </div>
        </div>
    )
}

export default NavProjects
