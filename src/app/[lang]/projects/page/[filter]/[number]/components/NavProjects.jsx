"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


function NavProjects({ services }) {
    const router = useRouter()
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-center'>
            <div className='flex mt-5 flex-wrap justify-start'>
                <button onClick={() => router.push(`/projects/page/all/1`)} className='me-2 text-xs md:text-sm capitalize bg-white text-yellow-700 font-bold px-3 py-1 rounded-full mt-3'>all</button>
                {services.map((item) => (
                    <button onClick={() => router.push(`/projects/page/${item.slug}/1`)} key={item.id} className='me-2 text-xs md:text-sm capitalize bg-white text-yellow-700 font-bold px-3 py-1 rounded-full mt-3'>{item.name}</button>
                ))}
            </div>
        </div>
    )
}

export default NavProjects