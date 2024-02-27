import Projects from '@/app/shared/projects/Project'
import img from "../../../../public/images/download.jpg"
import img2 from "../../../../public/images/8464a2ee2e9e7405ca2ba0a7f097f92d.jpg"
import img3 from "../../../../public/images/345ba3a36dabf573a2bc6abca60fc5ee.jpg"
import React from 'react'


function page() {

    const data = [
        {
            id: 1,
            title: "vintage platform",
            about: "The Future of AI in Healthcare: Transforming Patient Care",
            img:img
        },
        {
            id: 2,
            title: "shahin application",
            about: "The Future of AI in Healthcare: Transforming Patient Care",
            img:img2
        },
        {
            id: 3,
            title: "megatron web",
            about: "The Future of AI in Healthcare: Transforming Patient Care",
            img:img3
        },
        {
            id: 4,
            title: "vintage platform",
            about: "The Future of AI in Healthcare: Transforming Patient Care",
            img:img
        },
        {
            id: 5,
            title: "shahin application",
            about: "The Future of AI in Healthcare: Transforming Patient Care",
            img:img2
        },
        {
            id: 6,
            title: "megatron web",
            about: "The Future of AI in Healthcare: Transforming Patient Care",
            img:img3
        },
        {
            id: 7,
            title: "vintage platform",
            about: "The Future of AI in Healthcare: Transforming Patient Care",
            img:img
        },
        {
            id: 8,
            title: "shahin application",
            about: "The Future of AI in Healthcare: Transforming Patient Care",
            img:img2
        },
        {
            id: 9,
            title: "megatron web",
            about: "The Future of AI in Healthcare: Transforming Patient Care",
            img:img3
        },
    ]
    return (
        <div className='container mx-auto px-3'>
            <h1 className='text-center text-white text-xl md:text-4xl capitalize mb-3'>discover our projects</h1>
            <p className='text-center text-white text-xs md:text-sm'>explore our captivating blog filled with thought-provoking articles and inspiring content that will ignite your creativity and expand your knowledge.</p>
            <div className='flex justify-center'>
                <div className='flex mt-5 flex-wrap justify-start'>
                    <button className='me-2 text-xs md:text-sm capitalize bg-white text-yellow-700 font-bold px-3 py-1 rounded-full mt-3'>all</button>
                    <button className='me-2 text-xs md:text-sm capitalize bg-white text-yellow-700 font-bold px-3 py-1 rounded-full mt-3'>healthcare</button>
                    <button className='me-2 text-xs md:text-sm capitalize bg-white text-yellow-700 font-bold px-3 py-1 rounded-full mt-3'>business</button>
                    <button className='me-2 text-xs md:text-sm capitalize bg-white text-yellow-700 font-bold px-3 py-1 rounded-full mt-3 '>cloud computing</button>
                </div>
            </div>
            <Projects data={data} title={true}/>
        </div>
    )
}

export default page
