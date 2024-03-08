import Image from 'next/image'
import React from 'react'
import ProjectsBlogs from '../components/ProjectsBlogs'
import Link from 'next/link'
import API from '@/api/API'
import styles from './styles.module.css'

async function getData(lang) {
    const res = await API.get(`/blogs/`, {
        headers: { "X-localization": lang }
    })
    return res
}

async function getData2(details, lang) {
    const res = await API.get(`/blogs/${details}`, {
        headers: { "X-localization": lang }
    })

    return res
}

export const revalidate = +process.env.time;


async function page({ params }) {

    const data = await getData(params.lang)
    const data2 = await getData2(params.details, params.lang)
    const dataDetails = await data2.data


    return (
        dataDetails.status ? (
            <main className='container mx-auto px-3 mt-7'>
                <div className="grid md:grid-cols-2 gap-10">
                    <div data-aos="zoom-in" data-aos-duration="1000" className='relative h-[200px] md:h-[300px] w-full xl:w-5/6 mx-auto rounded-ss-[100px]  md:rounded-ss-[200px] rounded-ee-[100px] md:rounded-ee-[200px] overflow-hidden'>
                        <Image priority className='object-none' sizes='(min-width:992px) , 100vw' fill src={dataDetails?.data?.image} alt={dataDetails.data.title} />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <span data-aos="fade-up" data-aos-duration="1000" className='btnOrange px-5 py-2 text-white capitalize font-bold rounded-full'>{dataDetails.data.category.name}</span>
                        <h3 data-aos="fade-up" data-aos-duration="1000" className='mt-10 text-xl lg:text-3xl text-white'>{dataDetails.data.title}</h3>
                        <p data-aos="fade-up" data-aos-duration="1000" className='text-white mt-10 text-xs md:text-sm'>{dataDetails.data.short_description}</p>
                    </div>
                </div>

                <div dangerouslySetInnerHTML={{ __html: dataDetails?.data?.description }} data-aos="fade-up" data-aos-duration="1000" className={`lg:w-9/12 border mx-auto mt-10 px-8 md:px-10 pb-8 md:pb-10 pt-0 rounded-2xl ${styles.description}`}>

                </div>
                {data.status && (
                    <ProjectsBlogs data={data?.data} />
                )}

                <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-center items-center mb-10'>
                    <Link className='text-white px-6 py-1.5 capitalize btnOrange font-bold rounded-full me-5' href={"/contactUs"}>contact us</Link>
                    <Link className='text-white capitalize font-bold flex items-center' href={"/blogs"}>
                        <span className='me-5'>view all</span>
                        <svg width="9" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.94737 7.85645C10.2403 8.14936 10.2403 8.62416 9.94737 8.91706L2.30087 16.5635C2.00797 16.8564 1.53317 16.8564 1.24027 16.5635L0.886667 16.21C0.593767 15.9171 0.593767 15.4422 0.886667 15.1493L7.64927 8.38676L0.886667 1.62416C0.593767 1.33125 0.593767 0.856455 0.886667 0.563555L1.24027 0.209955C1.53317 -0.0829449 2.00797 -0.0829449 2.30087 0.209955L9.94737 7.85645Z" fill="white" />
                        </svg>
                    </Link>

                </div>

            </main>
        ) : (
            <div>
                <h1 className='text-center text-orange-600 capitalize font-bold my-20 text-xl md:text-3xl'>sorry something went wrong </h1>
            </div>
        )
    )
}

export default page
