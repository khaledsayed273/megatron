import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CartProjects({ data }) {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16'>
            {data.map((item) => (
                <div data-aos-duration="1000" data-aos="zoom-in" key={item.id} className='bg-white p-5 rounded-xl mx-auto w-11/12 sm:w-2/3 md:w-full'>
                    <div className='relative h-[220px] w-full overflow-hidden rounded-xl mb-7'>
                        <Image sizes='(min-width:992px) , 100vw' fill src={item.img} alt={item.title} />
                    </div>
                    <Link className='bg-yellow-600 text-white p-2 px-3 my-5 rounded-full' href={"/projects/1"}>
                        {item.title}
                    </Link>
                    <h1 className='mt-7  font-bold lg:text-base'>{item.about}</h1>
                </div>
            ))}
        </div>
    )
}

export default CartProjects
