"use client"
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

function NavPaginate({ category }) {
    const router = useRouter()
    const {filterBlogs} = useParams()
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-center'>
            <div className='flex mt-5 flex-wrap justify-start'>
                <button onClick={() => router.push(`/blogs/page/all/1`)} className={`me-2 text-xs md:text-sm capitalize ${filterBlogs === "all" ? "bg-amber-700 text-white" : "bg-white text-yellow-700"} font-bold px-3 py-1.5 rounded-full mt-3`}>all</button>
                {category?.data.map((item) => (

                    <button key={item.id} onClick={() => router.push(`/blogs/page/${item.id}/1`)} className={`me-2 text-xs md:text-sm capitalize ${filterBlogs === `${item.id}` ? "bg-amber-700 text-white" : "bg-white text-yellow-700"} font-bold px-3 py-1.5 rounded-full mt-3`}>{item.name}</button>
                ))}
            </div>
        </div>
    )
}

export default NavPaginate
