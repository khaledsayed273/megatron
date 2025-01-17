import API from '@/api/API'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

async function getData(lang) {
    try{
        const res = await API.get("/services", {
            headers: { "X-localization": lang }
        })
        return res
    }
    catch(e){
        notFound()
    }
}

export const revalidate = +process.env.time; 


async function page({ params: { lang } }) {

    const data = await getData(lang)

    return (
        <main className='container mx-auto px-3'>
            <h1 data-aos-duration="1000" data-aos="fade-up" className='text-center text-white text-xl md:text-4xl capitalize mb-3 mt-7'>Tech Innovation Hub: Transformative Digital Solutions for Your Business</h1>
            <p data-aos-duration="1000" data-aos="fade-up" className='text-center text-white text-xs md:text-sm mt-7'>Empowering businesses with innovative solutions, enhancing online presence, optimizing user experiences, and driving growth through creative digital strategies.</p>
            {data.status ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
                    {data?.data.data.map((item) => (
                        <div data-aos-duration="1000" data-aos="fade-up" key={item.id} className="bg-white p-5 relative rounded-lg">
                            <div className='flex flex-col justify-center items-center'>
                                <Image width={40} height={40} src={item.image} alt={item.name}/>
                                <h2 className='mt-3 font-semibold capitalize'  >{item.name}</h2>
                            </div>
                            <p className='mt-3 mb-7 text-xs md:text-sm text-black/85'>{item.short_descrption}</p>
                            <Link className='flex justify-end underline mt-3 bottom-4 right-4 absolute  decoration-amber-600 text-amber-600 font-bold capitalize' href={`/services/${item.slug}`}>read more</Link>
                        </div>
                    ))}
                </div>
            ) : <h2 className='text-center mt-16 font-bold text-orange-600'>Something wrong is happend please try again later</h2>
            }

        </main>
    )
}

export default page
