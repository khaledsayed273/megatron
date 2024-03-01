"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavPaginate from './NavPaginate'

function ProjectsBlogs({ data }) {
    
    const dataMaping = data?.data?.data
    

    return (
        <div className='mt-10'>
            <NavPaginate />
            

            <div className='grid md:grid-cols-2 mt-16 lg:grid-cols-3 gap-10 mb-16'>
                {dataMaping?.map((item) => (
                    <div data-aos="fade-right" data-aos-duration="1000" key={item.id} className='bg-white relative p-5 rounded-xl mx-auto w-11/12 sm:w-2/3 md:w-full'>
                        <div data-aos="zoom-in" data-aos-duration="1000" className='relative h-[230px] w-full overflow-hidden rounded-xl mb-7'>
                            <Image sizes='(min-width:992px) , 100vw' fill src={item.image} alt={item.title} />
                        </div>
                        <span data-aos="fade-right" data-aos-duration="1000" className='bg-yellow-600 capitalize text-white p-2 px-3 my-5 rounded-full' >
                            {item.category.name}
                        </span>
                        <h1 data-aos="fade-right" data-aos-duration="1000" className='mt-7  font-bold lg:text-base '>{item.title}</h1>
                        <p data-aos="fade-right" data-aos-duration="1000" className='mt-5 text-sm overflow-auto max-h-[130px] mb-10'>{item.short_description}</p>
                        <Link data-aos="fade-right" data-aos-duration="1000" className='flex justify-end underline mt-3 bottom-4 right-4 absolute  decoration-amber-600 text-amber-600 font-bold capitalize' href={`/blogs/${item.slug}`}>read more</Link>
                    
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ProjectsBlogs
