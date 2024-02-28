import Image from 'next/image'
import React from 'react'
import img from "../../../../../public/images/project-details/7c9a40b581e8bd972897e8352321fe2f.jpg"
import SwiperImages from './components/SwiperImages'
import Link from 'next/link'

function page({ params }) {
    return (
        <div className='container mx-auto px-3 mt-10'>
            <div className='relative w-full h-[220px] md:h-[300px] xl:h-[370px] overflow-hidden rounded-full'>
                <Image priority sizes='(min-width:992px) , 100vw' fill src={img} alt='img' />
                <div className='absolute bg-white bottom-0 left-1/2 -translate-x-1/2  px-6 py-2 font-bold md:text-xl rounded-t-xl text-orange-500'>
                    Megatron web
                </div>
            </div>
            <p className='text-center text-white/80 text-sm mt-10'>In 2010, our founder, Vasily, faced a daunting challenge - preparing for the Law School Admission Test (LSAT) while juggling an internship and evening classes in different cities. The lack of time and a conducive study environment made it incredibly difficult for him to achieve his dream of becoming a lawyer.</p>
            <p className='text-center text-white/80 text-sm mt-7'>During a train ride, a moment of inspiration struck Vasily. He wished for a convenient study tool on his phone to help him prepare for the LSAT. However, such an app didn&apos;t exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid LSAT app for over a year.</p>
            <SwiperImages />

            <h3 className='text-center text-white text-xl md:text-4xl capitalize'>discover related projects</h3>
            <p className='text-center text-white mt-5 text-sm'>Experience our expansive network of offices across the world, connecting you to our exceptional services wherever you are.</p>

            <div className="grid md:grid-cols-3 gap-10 my-10">
                <div className='bg-white p-5 mx-auto w-11/12 sm:w-3/4 md:w-full rounded-xl'>
                    <div className='relative w-full h-[200px] overflow-hidden rounded-xl'>
                        <Image sizes='(min-width:992px) , 100vw' alt='image' fill src={img} />
                    </div>
                    <Link href={"/projects/2"} className='capitalize text-amber-600 font-bold mt-5 inline-block'>Vintage web</Link>
                    <p className='mt-3 font-medium capitalize'>art gallery website.</p>
                </div>
                <div className='bg-white p-5 mx-auto w-11/12 sm:w-3/4 md:w-full rounded-xl'>
                    <div className='relative w-full h-[200px] overflow-hidden rounded-xl'>
                        <Image sizes='(min-width:992px) , 100vw' alt='image' fill src={img} />
                    </div>
                    <Link href={"/projects/2"} className='capitalize text-amber-600 font-bold mt-5 inline-block'>Vintage web</Link>
                    <p className='mt-3 font-medium capitalize'>art gallery website.</p>
                </div>
                <div className='bg-white p-5 mx-auto w-11/12 sm:w-3/4 md:w-full rounded-xl'>
                    <div className='relative w-full h-[200px] overflow-hidden rounded-xl'>
                        <Image sizes='(min-width:992px) , 100vw' alt='image' fill src={img} />
                    </div>
                    <Link href={"/projects/2"} className='capitalize text-amber-600 font-bold mt-5 inline-block'>Vintage web</Link>
                    <p className='mt-3 font-medium capitalize'>art gallery website.</p>
                </div>

            </div>

        </div>
    )
}

export default page
