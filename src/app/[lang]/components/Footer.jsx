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
        <div data-aos="fade-down" style={{ backgroundImage: `url(${background.src})` }} className='relative bg-cover bg-center px-5 mt-20 md:px-10 w-full h-[500px] sm:h-[300px]'>
            <div className='absolute w-full h-full left-0 top-0 bg-black opacity-80'>
            </div>
            <div className='z-50 absolute left-0 top-0 right-0 bottom-0 '>
                <div className='container mx-auto h-full flex flex-col justify-center'>
                    <div data-aos-duration="1000" data-aos="fade-right" className='flex items-start flex-col sm:flex-row sm:items-center w-full  sm:mt-28'>
                        <div className='flex items-center flex-col sm:flex-row sm:items-center justify-between w-full sm:border-t sm:border-b'>
                            <div className='mx-auto sm:me-auto sm:ms-0'>
                                <Link href={`/`} className='relative inline-block w-[90px] h-[77px] mt-1'>
                                    <Image priority alt='logo' fill sizes='(min-width:) 992px' src={logo} />
                                </Link>
                            </div>

                            <div  className='px-5 sm:px-0'>
                                <ul  className='text-white flex flex-col sm:flex-row'>
                                    {nav.map((item) => (
                                        <li  className='sm:me-5 text-center my-3' key={item.id}>
                                            <Link className='capitalize font-semibold' href={`${item.path}`}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div  className='text-white mt-10 sm:mt-20 sm:mb-16 flex flex-col sm:flex-row justify-between px-3'>
                        <span className='text-sm text-center sm:text-start'>© 2024 Megatron. All rights reserved.</span>
                        <div className='mt-7 sm:mt-0 flex justify-center'>
                            <Link className='mx-3' target='_blank' href={"https://wa.me/+201208799985"}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="19" height="19" viewBox="0,0,256,256">
                                    <g fill="#fffbfb" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10"><g transform="scale(5.12,5.12)"><path d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.023,7.854 2.963,11.29l-2.926,10.44c-0.096,0.343 -0.003,0.711 0.245,0.966c0.191,0.197 0.451,0.304 0.718,0.304c0.08,0 0.161,-0.01 0.24,-0.029l10.896,-2.699c3.327,1.786 7.074,2.728 10.864,2.728c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM36.57,33.116c-0.492,1.362 -2.852,2.605 -3.986,2.772c-1.018,0.149 -2.306,0.213 -3.72,-0.231c-0.857,-0.27 -1.957,-0.628 -3.366,-1.229c-5.923,-2.526 -9.791,-8.415 -10.087,-8.804c-0.295,-0.389 -2.411,-3.161 -2.411,-6.03c0,-2.869 1.525,-4.28 2.067,-4.864c0.542,-0.584 1.181,-0.73 1.575,-0.73c0.394,0 0.787,0.005 1.132,0.021c0.363,0.018 0.85,-0.137 1.329,1.001c0.492,1.168 1.673,4.037 1.819,4.33c0.148,0.292 0.246,0.633 0.05,1.022c-0.196,0.389 -0.294,0.632 -0.59,0.973c-0.296,0.341 -0.62,0.76 -0.886,1.022c-0.296,0.291 -0.603,0.606 -0.259,1.19c0.344,0.584 1.529,2.493 3.285,4.039c2.255,1.986 4.158,2.602 4.748,2.894c0.59,0.292 0.935,0.243 1.279,-0.146c0.344,-0.39 1.476,-1.703 1.869,-2.286c0.393,-0.583 0.787,-0.487 1.329,-0.292c0.542,0.194 3.445,1.604 4.035,1.896c0.59,0.292 0.984,0.438 1.132,0.681c0.148,0.242 0.148,1.41 -0.344,2.771z"></path></g></g>
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
