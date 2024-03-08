import Projects from '@/app/shared/projects/Project'
import React from 'react'
import API from '@/api/API'

async function getData(lang, number) {
    const res = await API.get(`/projects?page=${number}`, {
        headers: { "X-localization": lang }
    })
    return res
}

export const revalidate = +process.env.time;

async function page({ params: { lang, number } }) {

    const data = await getData(lang, number)

    return (
        <main className='container mx-auto px-3'>
            {data.data.data.data.length > 0 ? (
                <>
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
                    {data.status && (
                        <Projects data={data.data.data} title={true} numberPage={number} pagination={true} />
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
