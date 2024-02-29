import React from 'react'
import background from "../../../../public/images/footer.jpg"
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../../../public/images/logo.png"

function Footer({ lang, navbarTranslate }) {
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

    return (
        <div style={{ backgroundImage: `url(${background.src})` }} className='relative bg-cover bg-center px-5 mt-20 md:px-10 w-full h-[500px] sm:h-[300px]'>
            <div className='absolute w-full h-full left-0 top-0 bg-black opacity-80'>
            </div>
            <div className='z-50 absolute left-0 top-0 right-0 bottom-0 '>
                <div className='container mx-auto h-full flex flex-col justify-center'>
                    <div className='flex items-start flex-col sm:flex-row sm:items-center w-full  sm:mt-28'>
                        <div className='flex items-center flex-col sm:flex-row sm:items-center justify-between w-full sm:border-t sm:border-b'>
                            <div className='mx-auto sm:me-auto sm:ms-0'>
                                <Link href={`/`} className='relative inline-block w-[90px] h-[77px] mt-1'>
                                    <Image priority alt='logo' fill sizes='(min-width:) 992px' src={logo} />
                                </Link>
                            </div>

                            <div className='px-5 sm:px-0'>
                                <ul className='text-white flex flex-col sm:flex-row'>
                                    {nav.map((item) => (
                                        <li className='sm:me-5 text-center my-3' key={item.id}>
                                            <Link className='capitalize font-semibold' href={`${item.path}`}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='text-white mt-10 sm:mt-20 sm:mb-16 flex flex-col sm:flex-row justify-between px-3'>
                        <span className='text-sm text-center sm:text-start'>© 2024 FutureSphere. All rights reserved.</span>
                        <div className='mt-7 sm:mt-0 flex justify-center'>
                            <Link className='mx-3' href={"/"}>
                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.6886 2.72191C18.9643 3.04375 18.1871 3.26098 17.3686 3.3576C18.2025 2.85791 18.8431 2.06652 19.1452 1.12375C18.3637 1.58529 17.5003 1.92375 16.5803 2.10345C15.8431 1.31883 14.7932 0.828369 13.6314 0.828369C11.4 0.828369 9.59262 2.63637 9.59262 4.86714C9.59262 5.18345 9.62769 5.49237 9.69723 5.78775C6.33908 5.61791 3.36308 4.00991 1.37108 1.56683C1.02338 2.16375 0.823385 2.85791 0.823385 3.5976C0.823385 5.00068 1.53723 6.23575 2.62031 6.96068C1.95815 6.93914 1.33538 6.7576 0.790769 6.45606V6.50529C0.790769 8.46345 2.18154 10.0961 4.03015 10.4671C3.69169 10.5594 3.33477 10.6087 2.96554 10.6087C2.70523 10.6087 2.45292 10.5841 2.20677 10.5367C2.72 12.1404 4.21292 13.3084 5.97908 13.3416C4.59754 14.4247 2.856 15.0708 0.963692 15.0708C0.637539 15.0708 0.315692 15.0524 0 15.0154C1.78831 16.1601 3.91139 16.8284 6.19262 16.8284C13.6215 16.8284 17.6849 10.6745 17.6849 5.33606C17.6849 5.16129 17.68 4.98652 17.6726 4.81298C18.4622 4.24375 19.1465 3.53298 19.6886 2.72191Z" fill="white" />
                                </svg>
                            </Link>
                            <Link className='mx-3' target='_blank' href={"https://www.facebook.com/profile.php?id=61556677687858&mibextid=ZbWKwL"}>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.8035 0.828371H1.57348C1.45718 0.828108 1.34198 0.850819 1.23449 0.895201C1.127 0.939583 1.02933 1.00476 0.947101 1.08699C0.864869 1.16923 0.79969 1.26689 0.755308 1.37438C0.710926 1.48188 0.688215 1.59708 0.688479 1.71337V15.9434C0.688479 16.4334 1.08348 16.8284 1.57348 16.8284H9.23248V10.6314H7.14248V8.23137H9.23248V6.44837C9.23248 4.37937 10.5025 3.25937 12.3365 3.25937C13.2115 3.25937 13.9795 3.31237 14.2035 3.35537V5.51037H12.9125C11.9095 5.51037 11.7285 5.97937 11.7285 6.68337V8.23037H14.1075L13.7975 10.6304H11.7285V16.8284H15.8035C16.2935 16.8284 16.6885 16.4334 16.6885 15.9434V1.71337C16.6887 1.59708 16.666 1.48188 16.6216 1.37438C16.5773 1.26689 16.5121 1.16923 16.4299 1.08699C16.3476 1.00476 16.25 0.939583 16.1425 0.895201C16.035 0.850819 15.9198 0.828108 15.8035 0.828371Z" fill="white" />
                                </svg>

                            </Link>
                            <Link className='mx-3' href={"https://www.linkedin.com/company/megatron-soft/"}>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5045 0.828369C16.1545 0.828369 16.6885 1.34037 16.6885 1.98037V15.6764C16.6885 16.3064 16.1555 16.8284 15.5045 16.8284H1.87248C1.22248 16.8284 0.688477 16.3054 0.688477 15.6764V1.98037C0.688477 1.34037 1.22148 0.828369 1.87248 0.828369H15.5045ZM4.25148 5.78837C4.61144 5.77868 4.95341 5.62888 5.20458 5.37086C5.45576 5.11283 5.5963 4.76696 5.5963 4.40687C5.5963 4.04678 5.45576 3.7009 5.20458 3.44288C4.95341 3.18485 4.61144 3.03505 4.25148 3.02537C3.48348 3.02537 2.87548 3.64437 2.87548 4.40137C2.87548 5.16937 3.48348 5.78837 4.25148 5.78837ZM14.3205 10.2784C14.3205 8.22037 13.8835 6.64137 11.4725 6.64137C10.3205 6.64137 9.55248 7.27137 9.23248 7.86837H9.20048V6.82337H6.92848V14.4604H9.29648V10.6844C9.29648 9.69237 9.47748 8.72137 10.7155 8.72137C11.9315 8.72137 11.9525 9.86337 11.9525 10.7484V14.4604H14.3205V10.2784ZM3.05648 14.4614H5.43548V6.82337H3.05648V14.4614Z" fill="white" />
                                </svg>

                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer
