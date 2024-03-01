import Image from 'next/image'
import React from 'react'
import headerImg from "../../../../../public/images/header-img.jpeg"
import Link from 'next/link'

function Header() {
    return (
        <header data-aos-duration="1000" data-aos="fade-right">
            {/* image */}
            <div  className='relative w-full h-[388px] rounded-full overflow-hidden'>
                <Image priority src={headerImg} fill alt='HeaderImage' sizes="(max-width: 768px) 100vw " />
            </div>
            {/* center */}
            <div data-aos-duration="1000" data-aos="fade-right">
                <div className='mt-5 text-center text-white  p-3'>
                    <h3 className='text-lg sm:text-2xl lg:text-3xl xl:text-4xl '>
                        Innovation in Cutting-Edge Technology: Revolutionising the Future
                    </h3>
                    <p className='mt-4 text-xs md:text-sm text-white/70'>
                        Empowering Innovation for a Digital Tomorrow
                    </p>
                </div>
                <div className='flex justify-center mt-3'>
                    <Link href={"/contactUs"} className='mx-3 p-2 px-7 md:px-8 rounded-full font-bold capitalize text-sm md:text-base btnOrange text-white'> contact us</Link>
                </div>
            </div>
            {/* End */}
            <div data-aos-duration="1000" data-aos="fade-right" className='bg-white rounded-3xl flex justify-between items-center flex-col md:flex-row flex-wrap py-2 px-10 my-10 lg:mx-16'>
                <div className='text-amber-500 text-center my-7'>
                    <h1 className='text-3xl lg:text-5xl font-bold'>50K</h1>
                    <h5 className='text-lg md:text-xl lg:text-2xl '>New users per month</h5>
                </div>
                <div className='text-amber-500 text-center my-7'>
                    <h1 className='text-3xl lg:text-5xl font-bold'>150K</h1>
                    <h5 className='text-lg md:text-xl lg:text-2xl '>Active Users</h5>
                </div>
                <div className='text-amber-500 text-center my-7'>
                    <h1 className='text-3xl lg:text-5xl font-bold '>98%</h1>
                    <h5 className='text-lg md:text-xl lg:text-2xl '>Satisfied Customers</h5>
                </div>
            </div>

            <div className='flex justify-center'>
                <span className='btnOrange capitalize rounded-full flex mx-auto text-white font-semibold py-2 px-8'>features</span>
            </div>
        </header>
    )
}

export default Header
