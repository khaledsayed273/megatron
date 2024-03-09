import Projects from '@/app/shared/projects/Project'
import React from 'react'
import API from '@/api/API'
import NavProjects from './components/NavProjects'

async function getData(lang, filter, number) {
    const res = await API.get(`projects?filter[service_id]=${filter}&page=${number}`, {
        headers: { "X-localization": lang }
    })
    return res
}

async function getServices(lang) {
    const res = await API.get(`/services`, {
        headers: { "X-localization": lang }
    })
    return res?.data?.data
}

export const revalidate = +process.env.time;

async function page({ params }) {


    const data = await getData(params.lang, params.filter, params.number)
    const services = await getServices(params.lang)

    return (
        <main className='container mx-auto px-3'>
            {data.data.data.data.length > 0 ? (
                <>
                    <h1 data-aos="fade-up" data-aos-duration="1000" className='text-center text-white text-xl md:text-4xl capitalize mb-3'>discover our projects</h1>
                    <p data-aos="fade-up" data-aos-duration="1000" className='text-center text-white text-xs md:text-sm'>explore our captivating blog filled with thought-provoking articles and inspiring content that will ignite your creativity and expand your knowledge.</p>
                    {services && (

                        <NavProjects params={params} services={services} />
                    )}

                    {data.status && (
                        <Projects data={data.data.data} title={true} numberPage={params.number} pagination={true} />
                    )}
                </>
            ) : (
                <div className='inline-flex my-20 w-full justify-center'>
                    <h1 className='text-center text-orange-700 text-xl md:text-2xl xl:text-3xl font-bold capitalize '>sorry there is no data</h1>
                </div>
            )}
        </main>
    )
}

export default page