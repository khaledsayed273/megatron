import Image from 'next/image'
import React from 'react'
import SwiperImages from './components/SwiperImages'
import Link from 'next/link'
import API from '@/api/API'
import Projects from '@/app/shared/projects/Project'
import { notFound } from 'next/navigation'
async function getData(lang, slug) {
    try {
        const res = await API.get(`/projects/${slug}`, {
            headers: { "X-localization": lang }
        })
        return res
    } catch (e) {
        notFound()
    }
}

async function getRelatedProjects(lang) {
    try {
        const res = await API.get(`/projects/latest/project`, {
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
    const relatedProjects = await getRelatedProjects(params.lang, params.details)
    const details = await data?.data?.data

    return (
        <main className='container mx-auto px-3 mt-10'>
            {data?.data?.status && (
                <>
                    <div className='relative w-full h-[220px] md:h-[300px] xl:h-[370px] overflow-hidden rounded-full'>
                        <Image priority sizes='(max-width:992px) , 100vw' fill src={details.image} alt='img' />
                        <div className='absolute bg-white bottom-0 left-1/2 -translate-x-1/2  px-6 py-2 font-bold md:text-xl rounded-t-xl text-orange-500'>
                            {details.name}
                        </div>
                    </div>
                    <div className=" text-center text-white/80 text-sm mt-10" dangerouslySetInnerHTML={{ __html: details.description }}>

                    </div>
                    <SwiperImages details={details} />
                    <div className='flex justify-center mb-16 mt-5'>
                        <Link className=' text-white btnOrange py-1.5 px-6 rounded-xl font-bold capitalize' target='_blank' href={`${details.link}`}>visit website</Link>
                    </div>
                </>

            )}
            <h3 className='text-center text-white text-xl md:text-4xl capitalize'>discover related projects</h3>
            <p className='text-center text-white mt-5 text-sm mb-10'>Experience our expansive network of offices across the world, connecting you to our exceptional services wherever you are.</p>
            {relatedProjects.status && (

                <Projects data={relatedProjects?.data} />
            )}
        </main>
    )
}

export default page
