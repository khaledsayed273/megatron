import Image from 'next/image'
import React from 'react'
import img from "../../../../../public/images/project-details/7c9a40b581e8bd972897e8352321fe2f.jpg"
import SwiperImages from './components/SwiperImages'
import Link from 'next/link'
import API from '@/api/API'


async function getData(lang, slug) {
    try {
        const res = await API.get(`/projects/${slug}`, {
            headers: { "X-localization": lang }
        })
        return res
    } catch (e) {
        console.log(e);
    }
}

export const revalidate = +process.env.time;

async function page({ params }) {

    const data = await getData(params.lang, params.details)
    const details = await data?.data?.data

    console.log(details);

    return (
        <main className='container mx-auto px-3 mt-10'>
            {data?.data?.status && (
                <>
                    <div className='relative w-full h-[220px] md:h-[300px] xl:h-[370px] overflow-hidden rounded-full'>
                        <Image priority sizes='(min-width:992px) , 100vw' fill src={details.image} alt='img' />
                        <div className='absolute bg-white bottom-0 left-1/2 -translate-x-1/2  px-6 py-2 font-bold md:text-xl rounded-t-xl text-orange-500'>
                            {details.name}
                        </div>
                    </div>
                    <div className=" text-center text-white/80 text-sm mt-10" dangerouslySetInnerHTML={{ __html: details.description }}>

                    </div>
                    <SwiperImages details={details} />
                </>
            )}

            <h3 className='text-center text-white text-xl md:text-4xl capitalize'>discover related projects</h3>
            <p className='text-center text-white mt-5 text-sm'>Experience our expansive network of offices across the world, connecting you to our exceptional services wherever you are.</p>

            <div className="grid md:grid-cols-3 gap-10 my-10">
                <div className='bg-white p-5 mx-auto w-11/12 sm:w-3/4 md:w-full rounded-xl'>
                    <div className='relative w-full h-[200px] overflow-hidden rounded-xl'>
                        <Image sizes='(min-width:992px) , 100vw' alt='image' fill src={img} />
                    </div>
                    <Link href={"/projects/2"} className='capitalize text-amber-600 font-bold mt-5 inline-block'>Vintage web</Link>
                    <p className='mt-3 font-medium capitalize'>art gallery website.</p>
                </div>
                <div className='bg-white p-5 mx-auto w-11/12 sm:w-3/4 md:w-full rounded-xl'>
                    <div className='relative w-full h-[200px] overflow-hidden rounded-xl'>
                        <Image sizes='(min-width:992px) , 100vw' alt='image' fill src={img} />
                    </div>
                    <Link href={"/projects/2"} className='capitalize text-amber-600 font-bold mt-5 inline-block'>Vintage web</Link>
                    <p className='mt-3 font-medium capitalize'>art gallery website.</p>
                </div>
                <div className='bg-white p-5 mx-auto w-11/12 sm:w-3/4 md:w-full rounded-xl'>
                    <div className='relative w-full h-[200px] overflow-hidden rounded-xl'>
                        <Image sizes='(min-width:992px) , 100vw' alt='image' fill src={img} />
                    </div>
                    <Link href={"/projects/2"} className='capitalize text-amber-600 font-bold mt-5 inline-block'>Vintage web</Link>
                    <p className='mt-3 font-medium capitalize'>art gallery website.</p>
                </div>
            </div>
        </main>
    )
}

export default page
