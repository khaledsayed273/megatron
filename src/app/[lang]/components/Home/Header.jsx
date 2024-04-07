import Image from 'next/image'
import React from 'react'
import homeHeader from "../../../../../public/images/homeHeader.png"
import Link from 'next/link'

function Header({ translate }) {
    return (
        <header data-aos-duration="1000" data-aos="fade-up">
            {/* image */}
            <div className='relative w-full h-[388px] rounded-full overflow-hidden border-orange border'>
                <Image priority src={homeHeader} fill alt='HeaderImage' sizes="(max-width: 992px), 100vw " />
            </div>
            {/* center */}
            <div data-aos-duration="1000" data-aos="fade-up">
                <div className='mt-5 text-center text-white p-3'>
                    <h3 className='text-lg sm:text-2xl lg:text-3xl xl:text-4xl '>
                        {translate.home.header.title}
                    </h3>
                    <p className='mt-4 text-xs md:text-sm text-white/70'>
                        {translate.home.header.subTitle}
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-center mt-3'>
                    <Link href={"/contactUs"} className='mx-3 p-2 px-7 md:px-8 rounded-full font-bold capitalize text-sm md:text-base btnOrange text-white'>{translate.navBar.contactUs}</Link>
                </div>
            </div>
            {/* End */}
            <div data-aos-duration="1000" data-aos="fade-up" className='bg-white rounded-3xl grid md:grid-cols-3 py-2 px-10 md:px-5 my-10 lg:mx-16'>
                <div data-aos="fade-up" data-aos-duration="1000" className='text-amber-500 text-center my-7'>
                    <h1 className='text-3xl lg:text-5xl font-bold'>100+</h1>
                    <h5 className='text-lg md:text-xl lg:text-2xl '>{translate.home.cart.newUser} </h5>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className='text-amber-500 text-center my-7'>
                    <h1 className='text-3xl lg:text-5xl font-bold'>90+</h1>
                    <h5 className='text-lg md:text-xl lg:text-2xl '>{translate.home.cart.activeUsers}</h5>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className='text-amber-500 text-center my-7'>
                    <h1 className='text-3xl lg:text-5xl font-bold '>98%</h1>
                    <h5 className='text-lg md:text-xl lg:text-2xl '>{translate.home.cart.satisfiedCustomers} </h5>
                </div>

            </div>

            {/* <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-center'>
                <span className='btnOrange capitalize rounded-full flex mx-auto text-white font-semibold py-2 px-8'>{translate.home.features}</span>
            </div> */}
        </header>
    )
}

export default Header
