import React from 'react'
import img1 from "../../../../../public/images/single-service/1.jpg"
import firstImageAboutUs from "../../../../../public/images/about/firstImageAboutUs.jpg"
import secoundImageAboutUs from "../../../../../public/images/about/secoundImageAboutUs.jpg"
import Image from 'next/image';
import API from '@/api/API';
import { notFound } from 'next/navigation';
import Projects from '@/app/shared/projects/Project';
import CartProjects from '@/app/shared/projects/CartProjects';
import { Pagination } from 'swiper/modules';

async function getData(details, lang) {
    try {
        const res = await API.get(`/services/${details}`, {
            headers: { "X-localization": lang }
        })
        return res.data
    } catch (e) {
        notFound()
    }
}

export const revalidate = +process.env.time;


async function page({ params }) {

    const data = await getData(params.details, params.lang)

    return (
        <main className='container mx-auto mt-10 px-3'>
            {data.status && (
                <>
                    {/* <div className="grid md:grid-cols-2 gap-10">
                        <div data-aos-duration="1000" data-aos="fade-up" className='relative h-[200px] md:h-[300px] w-full xl:w-5/6 mx-auto rounded-ss-[100px]  md:rounded-ss-[200px] rounded-ee-[100px] md:rounded-ee-[200px] overflow-hidden'>
                            <Image priority className='object-none' sizes='(min-width:992px) , 100vw' fill src={img1} alt='img' />
                        </div> 
                    </div> */}
                    <div className='flex justify-center items-center lg:w-9/12 mx-auto'>
                        <div data-aos-duration="1000" data-aos="fade-up">
                            <span className='btnOrange px-5 py-2 text-white capitalize font-bold rounded-full'>{data.data.name}</span>
                            <h3 className='mt-10 lg:text-lg  text-white'>{data.data.short_descrption}</h3>
                        </div>
                    </div>
                    <div data-aos-duration="1000" data-aos="fade-up" className='lg:w-9/12 mb-16 border mx-auto mt-10 p-4 md:p-10 rounded-2xl'>
                        <div dangerouslySetInnerHTML={{ __html: data?.data?.description }} data-aos="fade-up" data-aos-duration="1000" className='text-white'></div>
                    </div>
                    <CartProjects data={data.data.projects} />
                    
                </>
            )}
        </main>
    )
}

export default page
