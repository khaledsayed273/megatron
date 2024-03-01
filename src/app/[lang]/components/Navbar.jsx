"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from "../../../../public/images/logo.png"

function Navbar({ lang, navbarTranslate }) {

    const nav = [
        {
            id: 1,
            name: navbarTranslate.home,
            path: `/${lang}`,
        },
        {
            id: 2,
            name: navbarTranslate.service,
            path: `/${lang}/service`,
        },
        {
            id: 3,
            name: navbarTranslate.about,
            path: `/${lang}/about`,
        },
        {
            id: 4,
            name: navbarTranslate.blogs,
            path: `/${lang}/blogs`,
        },
        // {
        //     id: 5,
        //     name: navbarTranslate.careers,
        //     path: `/${lang}/careers`,
        // },
        {
            id: 6,
            name: navbarTranslate.projects,
            path: `/${lang}/projects`,
        }
    ]

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <nav data-aos="fade-right" data-aos-duration="1000" className='container mx-auto my-4 p-2 px-4  '>
            <div className={`border border-gray-400 rounded-2xl w-full ${show ? "pb-3 md:pb-0" : "pb-0"}  px-4 flex flex-col md:flex-row items-center`}>
                <div className='flex  justify-between items-center w-full md:w-auto'>
                    <Link href={`/${lang}`} className='relative w-[90px] h-[77px]'>
                        <Image priority alt='logo' fill sizes='(min-width:) 992px' src={logo} />
                    </Link>
                    <div className='block md:hidden'>
                        <button onClick={handleShow} className='border p-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`flex flex-col md:flex-row items-center md:grow-[1]  ${show ? "h-full " : "h-0 md:h-auto overflow-hidden md:overflow-visible"}`}>
                    <div className='flex justify-center grow'>
                        <ul className='flex flex-col md:flex-row mt-5 md:mt-0 items-center'>
                            {nav.map((item) => (
                                <li className='mx-3 my-3 md:my-0 font-semibold text-white capitalize' key={item.id}>
                                    <Link onClick={() => setShow(false)} href={`${item.path}`}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='my-2 md:my-1'>
                        <Link href={"/contactUs"} className='text-white btnOrange px-6 py-1.5 rounded-2xl md:text-lg capitalize font-semibold'>{navbarTranslate.contactUs}</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
