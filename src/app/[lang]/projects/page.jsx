import Projects from '@/app/shared/projects/Project'
import img from "../../../../public/images/download.jpg"
import img2 from "../../../../public/images/8464a2ee2e9e7405ca2ba0a7f097f92d.jpg"
import img3 from "../../../../public/images/345ba3a36dabf573a2bc6abca60fc5ee.jpg"
import React from 'react'
import API from '@/api/API'


async function getData(lang) {
    const res = await API.get("/projects", {
        headers: { "X-localization": lang }
    })
    return res
}

export const revalidate = +process.env.time; 


async function page({ params: { lang } }) {

    const data = await getData(lang)

    // console.log(data.data);


    
    return (
        <main className='container mx-auto px-3'>
            <h1 data-aos="fade-up" data-aos-duration="1000" className='text-center text-white text-xl md:text-4xl capitalize mb-3'>discover our projects</h1>
            <p data-aos="fade-up" data-aos-duration="1000" className='text-center text-white text-xs md:text-sm'>explore our captivating blog filled with thought-provoking articles and inspiring content that will ignite your creativity and expand your knowledge.</p>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-center'>
                <div className='flex mt-5 flex-wrap justify-start'>
                    <button className='me-2 text-xs md:text-sm capitalize bg-white text-yellow-700 font-bold px-3 py-1 rounded-full mt-3'>all</button>
                    <button className='me-2 text-xs md:text-sm capitalize bg-white text-yellow-700 font-bold px-3 py-1 rounded-full mt-3'>healthcare</button>
                    <button className='me-2 text-xs md:text-sm capitalize bg-white text-yellow-700 font-bold px-3 py-1 rounded-full mt-3'>business</button>
                    <button className='me-2 text-xs md:text-sm capitalize bg-white text-yellow-700 font-bold px-3 py-1 rounded-full mt-3 '>cloud computing</button>
                </div>
            </div>
            {data.status&& (
               

            <Projects data={data.data.data} title={true}/>
            
            )}
        </main>
    )
}

export default page
