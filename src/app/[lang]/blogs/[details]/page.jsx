import Image from 'next/image'
import React from 'react'
import ProjectsBlogs from '../components/ProjectsBlogs'
import Link from 'next/link'
import API from '@/api/API'
import styles from './styles.module.css'
import Related from './components/Related'
import { notFound } from 'next/navigation'


async function getDetails(details, lang) {
    try{

        const res = await API.get(`/blogs/${details}`, {
            headers: { "X-localization": lang }
        })
        
        return res
    }catch(e){
        notFound()

    }
}

export const revalidate = +process.env.time;


async function page({ params }) {

    const details = await getDetails(params.details, params.lang)
    const dataDetails = await details.data


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

                <div dangerouslySetInnerHTML={{ __html: dataDetails?.data?.description }} data-aos="fade-up" data-aos-duration="1000" className={`lg:w-9/12 border mx-auto mt-10 px-8 md:px-10 py-8 md:pb-10  rounded-2xl ${styles.description}`}>

                </div>
                {details.status && (
                    <Related related={details?.data?.data?.related}  />
                )}


            </main>
        ) : (
            <div>
                <h1 className='text-center text-orange-600 capitalize font-bold my-20 text-xl md:text-3xl'>sorry something went wrong </h1>
            </div>
        )
    )
}

export default page
