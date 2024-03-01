import React from 'react'
import img1 from "../../../../../public/images/single-service/1.jpg"
import firstImageAboutUs from "../../../../../public/images/about/firstImageAboutUs.jpg"
import secoundImageAboutUs from "../../../../../public/images/about/secoundImageAboutUs.jpg"
import Image from 'next/image';
import API from '@/api/API';

async function getData(details, lang) {
    const res = await API.get(`/services/${details}`, {
        headers: { "X-localization": lang }
    })
    return res
}

async function page({ params }) {


    const data = await getData(params.details, params.lang)

    console.log(data);
    return (
        <div className='container mx-auto mt-10 px-3'>

            {data.status ? (
                <>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div data-aos-duration="1000" data-aos="fade-up" className='relative h-[200px] md:h-[300px] w-full xl:w-5/6 mx-auto rounded-ss-[100px]  md:rounded-ss-[200px] rounded-ee-[100px] md:rounded-ee-[200px] overflow-hidden'>
                            <Image priority className='object-none' sizes='(min-width:992px) , 100vw' fill src={img1} alt='img' />
                        </div>
                        <div data-aos-duration="1000" data-aos="fade-up">
                            <span className='btnOrange px-5 py-2 text-white capitalize font-bold rounded-full'>single service</span>
                            <h3 className='mt-10 text-xl lg:text-3xl text-white'>The Benefits of Email Marketing for Small Businesses</h3>
                            <p className='text-white mt-10 text-xs md:text-sm'>In this article, we discuss how email marketing can help small businesses reach their target audience, increase brand awareness, and drive sales.</p>
                        </div>
                    </div>

                    <div data-aos-duration="1000" data-aos="fade-up" className='lg:w-9/12 border mx-auto mt-10 p-8 md:p-10 rounded-2xl'>
                        <span data-aos-duration="1200" data-aos="fade-up" className='uppercase text-amber-500 font-bold'>our work</span>
                        <p data-aos-duration="1200" data-aos="fade-up" className='text-xs md:text-sm mt-5 text-white'>To excel in the role of Product Manager, the following education and experience are typically required:</p>
                        <ol data-aos-duration="1200" data-aos="fade-up" className='list-disc md:ms-5 mt-3 text-xs md:text-sm'>
                            <li className='text-white mb-1'>Bachelor&apos;s degree in Business Administration, Computer Science, Engineering, or a related field (or equivalent work experience)</li>
                            <li className='text-white mb-1'>Proven experience of at least 3 years in product management or related roles, preferably in the technology industry</li>
                            <li className='text-white mb-1'>Experience with Agile development methodologies and product lifecycle manageme</li>
                        </ol>

                        <span data-aos-duration="1200" data-aos="fade-up" className='capitalize mt-7 inline-block text-amber-600 font-semibold'>technical skills</span>
                        <p data-aos-duration="1200" data-aos="fade-up" className='text-xs md:text-sm mt-5 text-white'>As a Product Manager, you should possess the following technical skills:</p>
                        <ol data-aos-duration="1200" data-aos="fade-up" className='list-disc md:ms-5 mt-3 text-xs md:text-sm'>
                            <li className='text-white mb-1'>Strong understanding of product development processes and principles</li>
                            <li className='text-white mb-1'>Proficiency in using project management tools such as JIRA or Asana</li>
                            <li className='text-white mb-1'>Familiarity with prototyping tools like Sketch, Adobe XD, or InVision</li>
                            <li className='text-white mb-1'>Knowledge of data analysis and visualization tools (e.g., Excel, Tableau, or Google Analytics)</li>
                            <li className='text-white mb-1'>Familiarity with software development languages and frameworks (e.g., HTML, CSS, JavaScript)</li>
                        </ol>

                        <span data-aos-duration="1200" data-aos="fade-up" className='capitalize mt-7 inline-block text-amber-600 font-semibold'>core competencies</span>
                        <p data-aos-duration="1200" data-aos="fade-up" className='text-xs md:text-sm mt-5 text-white'>The successful candidate should demonstrate the following core competencies:</p>
                        <ol data-aos-duration="1200" data-aos="fade-up" className='list-disc md:ms-5 mt-3 text-xs md:text-sm'>
                            <li className='text-white mb-1'>Strategic Thinking: Ability to analyze market trends, customer needs, and business goals to develop a strategic product roadmap</li>
                            <li className='text-white mb-1'>Leadership: Strong leadership skills to guide cross-functional teams and stakeholders in delivering successful products</li>
                            <li className='text-white mb-1'>Communication: Excellent written and verbal communication skills to effectively convey product vision, requirements, and updates to various stakeholders</li>
                            <li className='text-white mb-1'>Problem-Solving: Strong analytical and problem-solving skills to identify challenges, devise solutions, and make data-driven decisions</li>
                            <li className='text-white mb-1'>Collaboration: Proven ability to collaborate with design, engineering, marketing, and sales teams to align product strategy with business objectives</li>
                        </ol>


                    </div>


                    <div data-aos-duration="1000" data-aos="fade-up" className='border text-white py-10 px-5 my-12 rounded-3xl'>
                        <div data-aos-duration="1200" data-aos="fade-up" className="grid md:grid-cols-2 gap-12">
                            <div data-aos-duration="1200" data-aos="fade-up">
                                <span className='btnOrange text-white capitalize font-bold px-6 py-1 rounded-full'>our story</span>
                                <p className='mt-5 mb-7 text-sm'>In 2010, our founder, Vasily, faced a daunting challenge - preparing for the Law School Admission Test (LSAT) while juggling an internship and evening classes in different cities. The lack of time and a conducive study environment made it incredibly difficult for him to achieve his dream of becoming a lawyer.</p>
                                <p className='text-sm'>During a train ride, a moment of inspiration struck Vasily. He wished for a convenient study tool on his phone to help him prepare for the LSAT. However, such an app didn&apos;t exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid LSAT app for over a year.</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='relative h-[300px] xl:h-full w-full xl:w-9/12  overflow-hidden rounded-3xl md:rounded-ss-[170px] md:rounded-ee-[170px]'>
                                    <Image priority sizes='(max-width:992px) , 100vw' fill src={firstImageAboutUs} alt='firstImageAboutUs' />
                                </div>
                            </div>
                        </div>
                        <div data-aos-duration="1200" data-aos="fade-up" className="grid md:grid-cols-2 gap-12 mt-10">
                            <div className='flex justify-center items-center order-2 md:order-1'>
                                <div className='relative h-[300px] xl:h-full w-full xl:w-9/12  overflow-hidden rounded-3xl md:rounded-ss-[170px] md:rounded-ee-[170px]'>
                                    <Image priority sizes='(min-width:992px) , 100vw' fill src={secoundImageAboutUs} alt='secoundImageAboutUs' />
                                </div>
                            </div>
                            <div className='order-1 md:order-2'>
                                <p className='mt-5 mb-7 text-sm'>This success prompted Vasily to establish FutureSphere, an app development company with a strong focus on creating profitable and impactful applications. Building on their initial achievement, FutureSphere expanded their educational app portfolio to include exams such as SAT, GMAT, MCAT, and more, catering to the needs of a broader audience.</p>
                                <p className='text-sm'>As time went on, it became evident that the industry had much more to offer than just exam-focused applications. People began approaching FutureSphere, seeking guidance on how to develop their own apps, what it takes to succeed, and how to navigate the complex world of mobile applications. In response to this growing demand for expertise and support, FutureSphere expanded its services and evolved into a comprehensive resource for aspiring app creators - a company known as FutureSphere.</p>
                            </div>
                        </div>
                    </div>
                </>

            ) :
                <h1 className='text-center mt-16 font-bold text-orange-600'>Something wrong is happend please try again later</h1>
            }


        </div>
    )
}

export default page
