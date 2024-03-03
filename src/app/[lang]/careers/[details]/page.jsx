import React from 'react'
import img1 from "../../../../../public/images/careers/Screenshot 2024-02-29 012445-fotor-bg-remover-2024022913527.png"
import Image from 'next/image'

function page() {
    return (
        <main className='container mx-auto px-3 mt-10'>

            <div className='border px-5 md:px-10 rounded-xl flex flex-col md:flex-row items-center md:items-start justify-between  '>

                <div className='py-7 me-auto md:py-10'>
                    <span className='text-white capitalize btnOrange px-6 py-1.5 rounded-full font-semibold'>design</span>
                    <h1 className='text-xl md:text-4xl mt-5 text-white font-semibold'>UI/UX designer</h1>
                    <h3 className='text-white mt-4 text-lg md:text-2xl'>Full Time - On site</h3>
                    <div className='flex items-center mt-5'>
                        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.41979 0.0674057C6.2841 0.525295 3.72469 2.86059 2.99861 5.92638C2.82434 6.66216 2.7715 7.23811 2.80324 8.05552C2.84802 9.2084 3.07757 10.1107 3.58539 11.1299C3.86408 11.6892 9.78316 20.967 10.0251 21.2238C10.2055 21.4152 10.4587 21.4904 10.702 21.4249C10.7996 21.3986 10.9445 21.3081 11.0241 21.2238C11.2424 20.9924 17.2063 11.6664 17.4635 11.1542C18.2431 9.60144 18.4651 7.71348 18.0694 6.00313C17.8487 5.04933 17.3974 4.05033 16.8174 3.23123C16.4142 2.66198 15.594 1.84181 15.0248 1.43863C14.2547 0.893256 13.286 0.444416 12.3765 0.211533C11.5464 -0.00100103 10.3034 -0.0616247 9.41979 0.0674057ZM11.3558 4.33324C12.5907 4.61882 13.6249 5.65884 13.9318 6.92364C14.0322 7.33769 14.0322 8.12528 13.9318 8.53933C13.6227 9.81355 12.6066 10.8296 11.3324 11.1387C10.9183 11.2392 10.1307 11.2392 9.71668 11.1387C8.44246 10.8296 7.42639 9.81355 7.11727 8.53933C7.01684 8.12528 7.01684 7.33769 7.11727 6.92364C7.37875 5.84578 8.164 4.92456 9.1803 4.50329C9.47409 4.38153 9.63031 4.34144 10.1963 4.24256C10.3868 4.20927 11.041 4.26047 11.3558 4.33324ZM4.31213 16.3335C3.4708 16.5709 2.8798 16.7949 2.20225 17.1332C1.13804 17.6646 0.496494 18.2375 0.152773 18.9634C0.00845753 19.2681 -0.0012947 19.3203 0.000111884 19.7812C0.00189355 20.3798 0.0885389 20.6324 0.458423 21.1174C1.7793 22.8497 5.79635 24 10.5245 24C15.2527 24 19.2698 22.8497 20.5906 21.1174C20.9605 20.6324 21.0472 20.3798 21.0489 19.7812C21.0503 19.3203 21.0406 19.2681 20.8963 18.9634C20.6684 18.4821 20.3192 18.0865 19.732 17.6441C19.3169 17.3315 18.2308 16.8146 17.4402 16.5535C16.7447 16.3237 16.0266 16.1352 15.9952 16.1743C15.9863 16.1854 15.179 17.4483 14.2012 18.9809C13.1812 20.5796 12.3193 21.8804 12.1792 22.0326C11.4735 22.7992 10.272 22.9576 9.32222 22.4092C9.18958 22.3326 8.97222 22.1478 8.8392 21.9985C8.70614 21.8491 7.80096 20.4821 6.82761 18.9607C5.5554 16.9721 5.03215 16.1916 4.96633 16.1846C4.91597 16.1792 4.62157 16.2462 4.31213 16.3335Z" fill="#EF8A08" />
                        </svg>
                        <span className='ms-2 capitalize text-orange-400 font-semibold'>cairo</span>
                    </div>
                    <p className='text-white mt-5 text-sm'>123 Main Street, Suite 200</p>
                    <p className='text-white mt-2 text-sm'>(555) 123-4567</p>
                </div>

                <div className='relative w-full sm:w-[300px] md:w-[400px] h-[300px]  md:h-[350px]'>
                    <Image sizes='(min-width:992px) , 100vw' priority fill src={img1} alt='image1' />
                </div>


            </div>


            <div className='lg:w-9/12 border mx-auto mt-16 p-8 md:p-10 rounded-2xl'>
                <span className='uppercase text-amber-600 font-bold'>Education and Experience</span>
                <p className='text-xs md:text-sm mt-5 text-white'>To excel in the role of Product Manager, the following education and experience are typically required:</p>
                <ol className='list-disc md:ms-5 mt-3 text-xs md:text-sm'>
                    <li className='text-white mb-1'>Bachelor&apos;s degree in Business Administration, Computer Science, Engineering, or a related field (or equivalent work experience)</li>
                    <li className='text-white mb-1'>Proven experience of at least 3 years in product management or related roles, preferably in the technology industry</li>
                    <li className='text-white mb-1'>Experience with Agile development methodologies and product lifecycle manageme</li>
                </ol>

                <span className='capitalize mt-7 inline-block text-amber-600 font-semibold'>technical skills</span>
                <p className='text-xs md:text-sm mt-5 text-white'>As a Product Manager, you should possess the following technical skills:</p>
                <ol className='list-disc md:ms-5 mt-3 text-xs md:text-sm'>
                    <li className='text-white mb-1'>Strong understanding of product development processes and principles</li>
                    <li className='text-white mb-1'>Proficiency in using project management tools such as JIRA or Asana</li>
                    <li className='text-white mb-1'>Familiarity with prototyping tools like Sketch, Adobe XD, or InVision</li>
                    <li className='text-white mb-1'>Knowledge of data analysis and visualization tools (e.g., Excel, Tableau, or Google Analytics)</li>
                    <li className='text-white mb-1'>Familiarity with software development languages and frameworks (e.g., HTML, CSS, JavaScript)</li>
                </ol>

                <span className='capitalize mt-7 inline-block text-amber-600 font-semibold'>core competencies</span>
                <p className='text-xs md:text-sm mt-5 text-white'>The successful candidate should demonstrate the following core competencies:</p>
                <ol className='list-disc md:ms-5 mt-3 text-xs md:text-sm'>
                    <li className='text-white mb-1'>Strategic Thinking: Ability to analyze market trends, customer needs, and business goals to develop a strategic product roadmap</li>
                    <li className='text-white mb-1'>Leadership: Strong leadership skills to guide cross-functional teams and stakeholders in delivering successful products</li>
                    <li className='text-white mb-1'>Communication: Excellent written and verbal communication skills to effectively convey product vision, requirements, and updates to various stakeholders</li>
                    <li className='text-white mb-1'>Problem-Solving: Strong analytical and problem-solving skills to identify challenges, devise solutions, and make data-driven decisions</li>
                    <li className='text-white mb-1'>Collaboration: Proven ability to collaborate with design, engineering, marketing, and sales teams to align product strategy with business objectives</li>
                </ol>

            </div>

        </main>
    )
}

export default page
