"use client"
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import React from 'react'

function NavPaginate({ category }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const handleParams = (id) => {
        const query = new URLSearchParams(searchParams);
        query.set("category", id)
        router.push(`?category=${query.get("category")}`)
    }

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-center'>
            <div className='flex mt-5 flex-wrap justify-start'>
                <button onClick={() => router.push(`${pathname}`)} className={`me-2 text-xs md:text-sm capitalize ${searchParams.get("category") === null ? "bg-amber-700 text-white" : "bg-white text-yellow-700"} font-bold px-3 py-1.5 rounded-full mt-3`}>all</button>
                {category?.data.map((item) => (

                    <button key={item.id} onClick={() => handleParams(item.id)} className={`me-2 text-xs md:text-sm capitalize ${searchParams.get("category") === `${item.id}` ? "bg-amber-700 text-white" : "bg-white text-yellow-700"} font-bold px-3 py-1.5 rounded-full mt-3`}>{item.name}</button>
                ))}
            </div>
        </div>
    )
}

export default NavPaginate
