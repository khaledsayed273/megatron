import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CartProjects({ data }) {


    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16'>
            {data.map((item) => (
                <div data-aos-duration="1000" data-aos="zoom-in" key={item.id} className='bg-white p-5 rounded-xl mx-auto w-11/12 sm:w-2/3 md:w-full'>
                    <div data-aos="zoom-in" data-aos-duration="1000" className='relative h-[220px] w-full overflow-hidden rounded-xl mb-7'>
                        <Image sizes='(min-width:992px) , 100vw' fill src={item.image} alt={item.name} />
                    </div>
                    <Link data-aos="fade-up" data-aos-duration="1000" className='bg-yellow-600 text-white p-2 px-3 my-5 rounded-full capitalize' href={`/projects/${item.slug}`}>
                        {item.name}
                    </Link>

                    <h1 data-aos="fade-up" data-aos-duration="1000" className='mt-7  font-bold lg:text-base'>{item.services[0].short_descrption}</h1>
                </div>
            ))}
        </div>
    )
}

export default CartProjects
