"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProjectsBlogs({data}) {
    return (
        <div className='mt-10'>
            <div className='flex justify-center'>
                <div className='flex mt-5 flex-wrap justify-start'>
                    <button className='me-2 text-xs md:text-sm capitalize bg-white text-yellow-700 font-bold px-3 py-1 rounded-full mt-3'>all</button>
                    <button className='me-2 text-xs md:text-sm capitalize bg-white text-yellow-700 font-bold px-3 py-1 rounded-full mt-3'>healthcare</button>
                    <button className='me-2 text-xs md:text-sm capitalize bg-white text-yellow-700 font-bold px-3 py-1 rounded-full mt-3'>business</button>
                    <button className='me-2 text-xs md:text-sm capitalize bg-white text-yellow-700 font-bold px-3 py-1 rounded-full mt-3 '>cloud computing</button>
                </div>
            </div>

            <div className='grid md:grid-cols-2 mt-16 lg:grid-cols-3 gap-10 mb-16'>
                {data.map((item) => (
                    <div key={item.id} className='bg-white p-5 rounded-xl mx-auto w-11/12 sm:w-2/3 md:w-full'>
                        <div className='relative h-[230px] w-full overflow-hidden rounded-xl mb-7'>
                            <Image sizes='(min-width:992px) , 100vw' fill src={item.img} alt={item.title} />
                        </div>
                        <span className='bg-yellow-600 capitalize text-white p-2 px-3 my-5 rounded-full' >
                            {item.title}
                        </span>
                        <h1 className='mt-7  font-bold lg:text-base'>{item.about}</h1>
                        <p className='mt-5 text-sm'>{item.decribtion}</p>
                        <Link className='flex justify-end underline mt-3 decoration-amber-600 text-amber-600 font-bold capitalize' href={"/blogs/1"}>read more</Link>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ProjectsBlogs
