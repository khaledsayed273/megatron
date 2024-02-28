import Image from 'next/image'
import React from 'react'
import img1 from "../../../../../public/images/single-service/1.jpg"
import ProjectsBlogs from '../components/ProjectsBlogs'
import Link from 'next/link'

function page({ params }) {
    const data = [
        {
            id: 1,
            title: "vintage platform",
            about: "The Future of AI in Healthcare: Transforming Patient Care",
            decribtion: " Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
            img: img1
        },
        {
            id: 2,
            title: "shahin application",
            about: "The Future of AI in Healthcare: Transforming Patient Care",
            decribtion: " Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
            img: img1
        },
        {
            id: 3,
            title: "megatron web",
            about: "The Future of AI in Healthcare: Transforming Patient Care",
            decribtion: " Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.",
            img: img1
        }

    ]

    return (
        <div className='container mx-auto px-3 mt-7'>
            <div className="grid md:grid-cols-2 gap-10">
                <div className='relative h-[200px] md:h-[300px] w-full xl:w-5/6 mx-auto rounded-ss-[100px]  md:rounded-ss-[200px] rounded-ee-[100px] md:rounded-ee-[200px] overflow-hidden'>
                    <Image priority className='object-none' sizes='(min-width:992px) , 100vw' fill src={img1} alt='img' />
                </div>
                <div>
                    <span className='btnOrange px-5 py-2 text-white capitalize font-bold rounded-full'>healthcare</span>
                    <h3 className='mt-10 text-xl lg:text-3xl text-white'>The Benefits of Email Marketing for Small Businesses</h3>
                    <p className='text-white mt-10 text-xs md:text-sm'>In this article, we discuss how email marketing can help small businesses reach their target audience, increase brand awareness, and drive sales.</p>
                </div>
            </div>

            <div className='lg:w-9/12 border mx-auto mt-10 p-8 md:p-10 rounded-2xl'>
                <span className='uppercase text-amber-600 font-bold'>Maximizing Product Success: Key Strategies for Product Managers</span>
                <p className='text-xs md:text-sm mt-5 text-white'>To excel in the role of Product Manager, the following education and experience are typically required:</p>
                <ol className='list-disc md:ms-5 mt-3 text-xs md:text-sm'>
                    <li className='text-white mb-1'>Bachelor&apos;s degree in Business Administration, Computer Science, Engineering, or a related field (or equivalent work experience)</li>
                    <li className='text-white mb-1'>Proven experience of at least 3 years in product management or related roles, preferably in the technology industry</li>
                    <li className='text-white mb-1'>Experience with Agile development methodologies and product lifecycle manageme</li>
                </ol>

                <span className='capitalize mt-7 inline-block text-amber-600 font-semibold'>Develop a Strategic Product Roadmap: Guiding Your Product&apos;s Journey</span>
                <p className='text-xs md:text-sm mt-5 text-white'>As a Product Manager, you should possess the following technical skills:</p>
                <ol className='list-disc md:ms-5 mt-3 text-xs md:text-sm'>
                    <li className='text-white mb-1'>Strong understanding of product development processes and principles</li>
                    <li className='text-white mb-1'>Proficiency in using project management tools such as JIRA or Asana</li>
                    <li className='text-white mb-1'>Familiarity with prototyping tools like Sketch, Adobe XD, or InVision</li>
                    <li className='text-white mb-1'>Knowledge of data analysis and visualization tools (e.g., Excel, Tableau, or Google Analytics)</li>
                    <li className='text-white mb-1'>Familiarity with software development languages and frameworks (e.g., HTML, CSS, JavaScript)</li>
                </ol>




            </div>

            <ProjectsBlogs data={data} />

            <div className='flex justify-center items-center mb-10'>
                <Link className='text-white px-6 py-1.5 capitalize btnOrange font-bold rounded-full me-5' href={"/contactUs"}>contact us</Link>
                <Link className='text-white capitalize font-bold flex items-center' href={"/blogs"}>
                    <span className='me-5'>view all</span>
                    <svg width="9" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.94737 7.85645C10.2403 8.14936 10.2403 8.62416 9.94737 8.91706L2.30087 16.5635C2.00797 16.8564 1.53317 16.8564 1.24027 16.5635L0.886667 16.21C0.593767 15.9171 0.593767 15.4422 0.886667 15.1493L7.64927 8.38676L0.886667 1.62416C0.593767 1.33125 0.593767 0.856455 0.886667 0.563555L1.24027 0.209955C1.53317 -0.0829449 2.00797 -0.0829449 2.30087 0.209955L9.94737 7.85645Z" fill="white" />
                    </svg>
                </Link>

            </div>

        </div>
    )
}

export default page
