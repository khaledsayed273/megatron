import Projects from '@/app/shared/projects/Project'
import React from 'react'
import API from '@/api/API'
import NavProjects from './components/NavProjects'

async function getData(lang, category, page) {
    try {
        const res = await API.get(`projects?filter[service_id]=${category ? category : "all"}&page=${page}`, {
            headers: { "X-localization": lang }
        })
        return res
    } catch (e) {
        return e
    }
}

async function getServices(lang) {
    const res = await API.get(`/services`, {
        headers: { "X-localization": lang }
    })
    return res?.data?.data
}

export const revalidate = +process.env.time; 

async function page(params) {

    const data = await getData(params.lang, params.searchParams.category, params.searchParams.page)
    const services = await getServices(params.lang)
    return (
        <main className='container mx-auto px-3'>

            <h1 data-aos="fade-up" data-aos-duration="1000" className='text-center text-white text-xl md:text-4xl capitalize mb-3'>discover our projects</h1>
            <p data-aos="fade-up" data-aos-duration="1000" className='text-center text-white text-xs md:text-sm'>explore our captivating blog filled with thought-provoking articles and inspiring content that will ignite your creativity and expand your knowledge.</p>
            {services && (

                <NavProjects params={params} services={services} />
            )}

            {data.data.data.data.length > 0 ? (
                <Projects data={data.data.data} title={true} numberPage={params?.searchParams.page ? params?.searchParams.page : 1} pagination={true} />

            ) : (
                <div className='inline-flex my-20 w-full justify-center'>
                    <h2 className='text-center text-orange text-xl md:text-2xl xl:text-3xl font-bold capitalize '>sorry there is no data</h2>
                </div>
            )}
        </main>
    )
}

export default page
