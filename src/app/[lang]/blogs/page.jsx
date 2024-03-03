import Image from 'next/image'
import React from 'react'
import img1 from "../../../../public/images/single-service/1.jpg"
import ProjectsBlogs from './components/ProjectsBlogs'
import API from '@/api/API'

async function getData(lang) {
    const res = await API.get(`/blogs/`, {
        headers: { "X-localization": lang }
    })
    return res
}

export const revalidate = 60; 

async function page({ params }) {

    // const data = [
    //     {
    //         id: 1,
    //         title: "vintage platform",
    //         about: "The Future of AI in Healthcare: Transforming Patient Care",
    //         decribtion: " Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    //         img: img1
    //     },
    //     {
    //         id: 2,
    //         title: "shahin application",
    //         about: "The Future of AI in Healthcare: Transforming Patient Care",
    //         decribtion: " Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    //         img: img1
    //     },
    //     {
    //         id: 3,
    //         title: "megatron web",
    //         about: "The Future of AI in Healthcare: Transforming Patient Care",
    //         decribtion: " Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    //         img: img1
    //     },
    //     {
    //         id: 4,
    //         title: "vintage platform",
    //         about: "The Future of AI in Healthcare: Transforming Patient Care",
    //         decribtion: " Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    //         img: img1
    //     },
    //     {
    //         id: 5,
    //         title: "shahin application",
    //         about: "The Future of AI in Healthcare: Transforming Patient Care",
    //         decribtion: " Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    //         img: img1
    //     },
    //     {
    //         id: 6,
    //         title: "megatron web",
    //         about: "The Future of AI in Healthcare: Transforming Patient Care",
    //         decribtion: " Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    //         img: img1
    //     },
    //     {
    //         id: 7,
    //         title: "vintage platform",
    //         about: "The Future of AI in Healthcare: Transforming Patient Care",
    //         decribtion: " Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    //         img: img1
    //     },
    //     {
    //         id: 8,
    //         title: "shahin application",
    //         about: "The Future of AI in Healthcare: Transforming Patient Care",
    //         decribtion: " Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    //         img: img1
    //     },
    //     {
    //         id: 9,
    //         title: "megatron web",
    //         about: "The Future of AI in Healthcare: Transforming Patient Care",
    //         decribtion: " Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
    //         img: img1
    //     },
    // ]

    const data2 = await getData(params.lang)

    return (
        <main className='container mx-auto px-3'>
            <h1 data-aos="zoom-in" data-aos-duration="1000" className='text-center my-5 text-white text-xl md:text-3xl'>Discover Insights and Inspiration</h1>
            <p data-aos="fade-up" data-aos-duration="1000" className='text-center text-white/70 text-xs md:text-sm mb-10 md:mb-16'>Explore our captivating blog filled with thought-provoking articles and inspiring content that will ignite your creativity and expand your knowledge.</p>
            <div className="grid md:grid-cols-2 gap-10">
                <div data-aos="zoom-in" data-aos-duration="1000" className='relative h-[200px] md:h-[300px] w-full xl:w-5/6 mx-auto rounded-ss-[100px]  md:rounded-ss-[200px] rounded-ee-[100px] md:rounded-ee-[200px] overflow-hidden'>
                    <Image priority className='object-none' sizes='(min-width:992px) , 100vw' fill src={img1} alt='img' />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <span data-aos="fade-up" data-aos-duration="1000" className='btnOrange px-5 py-2 text-white capitalize font-bold rounded-full'>healthcare</span>
                    <h3 data-aos="fade-up" data-aos-duration="1000" className='mt-10 text-xl lg:text-3xl text-white'>The Benefits of Email Marketing for Small Businesses</h3>
                    <p data-aos="fade-up" data-aos-duration="1000" className='text-white mt-10 text-xs md:text-sm'>In this article, we discuss how email marketing can help small businesses reach their target audience, increase brand awareness, and drive sales.</p>
                </div>
            </div>

            {data2.status && (
                <ProjectsBlogs data={data2.data} />
            )}

        </main>
    )
}

export default page
