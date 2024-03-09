import Image from 'next/image'
import React from 'react'
import img from "../../../../../public/images/header-img.jpeg"
import Link from 'next/link'

function Discover({ translate }) {
    return (
        <div data-aos-duration="1000" data-aos="fade-up" className='my-10'>
            <h1 className='text-center text-white text-lg sm:text-2xl md:text-4xl font-semibold'>
                {translate.home.discover.title}
            </h1>
            <p className='text-center text-white/60 my-5 text-sm'>
                {translate.home.discover.subTitle}
            </p>
            {/* discover card */}
            <div data-aos-duration="1000" data-aos="fade-up" className='bg-white rounded-2xl p-16 my-10'>
                <div className='grid grid-cols-1  lg:grid-cols-3  lg:grid-flow-col gap-10 '>
                    <div data-aos-duration="1200" data-aos="fade-up" className='flex flex-col items-center'>
                        <svg width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.1028 0.143182C17.0791 0.221891 16.9124 0.909573 16.7323 1.67122C16.5522 2.43286 16.3574 3.10295 16.2995 3.16023C16.2415 3.21758 15.8267 3.34383 15.3778 3.4407C14.9289 3.53765 14.248 3.72355 13.8648 3.85388C13.4816 3.9843 13.106 4.09091 13.0303 4.09091C12.9546 4.09091 12.3849 3.55885 11.7643 2.90864L10.636 1.72636L10.1832 1.98368C9.9341 2.12523 9.41325 2.42714 9.02576 2.65459L8.32106 3.06818L8.75895 4.54091C8.99982 5.35091 9.19725 6.07565 9.19774 6.15142C9.19848 6.27709 6.79834 8.75389 6.67463 8.75504C6.64526 8.75536 5.9287 8.54894 5.08221 8.29636C4.2358 8.04379 3.53314 7.85029 3.52087 7.86633C3.42015 7.99773 2.24402 10.0878 2.24402 10.1354C2.24402 10.1693 2.75947 10.6854 3.38947 11.2822C4.22426 12.0731 4.53492 12.4191 4.53492 12.5581C4.53492 12.6631 4.42758 13.0773 4.29642 13.4787C4.16527 13.8801 3.9946 14.5276 3.91712 14.9175C3.83972 15.3074 3.72926 15.691 3.67166 15.77C3.59966 15.8688 3.08625 16.0292 2.02597 16.284L0.484924 16.6545V18V19.3455L2.01746 19.716C2.86035 19.9197 3.60097 20.1416 3.66323 20.2091C3.7255 20.2766 3.8398 20.6602 3.9172 21.0616C3.9946 21.463 4.16527 22.1199 4.29642 22.5213C4.42758 22.9227 4.53492 23.3369 4.53492 23.4419C4.53492 23.5809 4.22426 23.9269 3.38947 24.7178C2.75947 25.3146 2.24402 25.8307 2.24402 25.8646C2.24402 25.9127 3.42261 28.0065 3.52185 28.1347C3.53462 28.1512 4.2205 27.9579 5.04588 27.7051C5.87134 27.4523 6.58701 27.2455 6.63618 27.2455C6.77617 27.2455 9.19856 29.6879 9.19856 29.829C9.19856 29.8982 8.99721 30.6227 8.7511 31.439C8.50507 32.2554 8.31173 32.9283 8.32155 32.9344C9.03075 33.374 10.5577 34.2008 10.6278 34.1833C10.6812 34.17 11.175 33.6805 11.7253 33.0955C12.2756 32.5105 12.7977 31.9984 12.8855 31.9577C12.9989 31.9051 13.2889 31.9583 13.8836 32.141C14.3448 32.2825 15.0454 32.4691 15.4407 32.5554C15.836 32.6418 16.2107 32.755 16.2735 32.8071C16.3361 32.8592 16.5208 33.4608 16.6838 34.144C16.8468 34.8273 17.0164 35.5245 17.0606 35.6932L17.1412 36H17.9972H18.8531V32.4907V28.9813L18.0145 28.9241C16.3403 28.8099 14.9166 28.4387 13.5851 27.7691C10.4655 26.2002 8.27802 23.2419 7.67568 19.7774C7.57602 19.2042 7.5541 18.6883 7.58445 17.6318C7.61898 16.4288 7.6576 16.1138 7.87065 15.3C8.36655 13.4048 9.26974 11.8015 10.6323 10.3973C12.6088 8.36035 15.0611 7.24205 17.9339 7.06762L18.8531 7.01174V3.50591V0H17.9995C17.2576 0 17.1403 0.0187364 17.1028 0.143182ZM29.4895 0.661173C28.6921 1.02215 28.3079 1.61845 28.3079 2.49545C28.3079 3.16882 28.491 3.58846 28.9673 4.00664C29.3846 4.37302 29.7252 4.5 30.2904 4.5C31.5907 4.5 32.5698 3.28958 32.2723 2.04963C31.9802 0.831927 30.6159 0.151282 29.4895 0.661173ZM19.7531 2.49545V3.02727H23.5576H27.3622V2.49545V1.96364H23.5576H19.7531V2.49545ZM35.3657 6.7383C34.1291 7.08128 33.5079 8.45885 34.0804 9.5886C34.7602 10.93 36.6359 11.0905 37.5113 9.88192C38.6245 8.34521 37.1836 6.23405 35.3657 6.7383ZM17.5849 7.99364C13.38 8.37564 9.85564 11.3791 8.72369 15.5455C8.5288 16.2628 8.51252 16.4522 8.51252 18C8.51252 19.5478 8.5288 19.7372 8.72369 20.4545C9.74813 24.2251 12.7113 27.0532 16.4395 27.8186C19.6555 28.4789 22.9103 27.5515 25.3394 25.283C29.794 21.123 29.482 13.9618 24.6795 10.1335C22.7054 8.55974 20.0776 7.76716 17.5849 7.99364ZM23.4349 8.21168C23.4349 8.22813 23.7265 8.41099 24.083 8.61807C24.4394 8.82524 24.7546 9.03265 24.7833 9.07912C24.8181 9.13541 26.1932 9.16364 28.9011 9.16364H32.9667V8.67273V8.18182H28.2008C25.5795 8.18182 23.4349 8.19524 23.4349 8.21168ZM20.2602 10.9543C24.0235 11.9348 26.3503 15.6587 25.5682 19.449C24.993 22.2361 22.8654 24.4019 20.0283 25.0885C19.1927 25.2907 17.6958 25.2728 16.783 25.0498C14.0334 24.3779 11.9415 22.215 11.3508 19.4332C11.1952 18.7003 11.2495 16.7937 11.4465 16.0773C11.6574 15.3099 12.2574 14.1466 12.7839 13.484C13.9089 12.0683 15.3909 11.1878 17.2447 10.8336C18.0245 10.6846 19.4429 10.7413 20.2602 10.9543ZM17.583 11.6937C14.3944 12.2037 12.144 14.8129 12.144 18C12.144 20.9221 14.0035 23.3445 16.8657 24.151C17.6705 24.3777 19.1 24.3961 19.9428 24.1904C21.6958 23.7627 23.2541 22.5412 24.0828 20.9455C24.6392 19.874 24.7838 19.2668 24.7838 18C24.7838 17.0714 24.7533 16.7983 24.5927 16.2853C24.1908 15.0012 23.484 13.909 22.5493 13.1274C21.9106 12.5932 20.754 12.0035 19.9986 11.827C19.3394 11.6729 18.1302 11.6062 17.583 11.6937ZM38.735 13.6693C38.004 13.9766 37.7021 14.8549 38.09 15.5451C38.5393 16.3445 39.6819 16.4185 40.2417 15.6845C40.8639 14.8687 40.3401 13.6845 39.3247 13.6111C39.1128 13.5958 38.8474 13.622 38.735 13.6693ZM28.8349 14.4488C28.8349 14.4756 28.8928 14.6965 28.9635 14.9397L29.092 15.3818H33.0544H37.0167V14.8909V14.4H32.9258C30.6758 14.4 28.8349 14.4219 28.8349 14.4488ZM38.5649 19.9861C38.1408 20.2718 37.9167 20.6601 37.9167 21.1091C37.9167 22.0881 38.996 22.7213 39.8395 22.2372C40.2743 21.9876 40.5594 21.447 40.5094 20.9664C40.468 20.5676 40.1538 20.1064 39.7984 19.9226C39.4414 19.7381 38.8909 19.7664 38.5649 19.9861ZM28.9726 21.0549C28.8969 21.2951 28.8349 21.5161 28.8349 21.5458C28.8349 21.5756 30.6758 21.6 32.9258 21.6H37.0167V21.1091V20.6182H33.0635H29.1102L28.9726 21.0549ZM34.985 25.4948C33.7182 26.1261 33.4835 27.8779 34.5413 28.8066C34.9548 29.1697 35.2943 29.2912 35.8891 29.2891C36.5467 29.2868 36.9674 29.0969 37.3977 28.6081C38.5481 27.301 37.6224 25.2906 35.8669 25.2836C35.5388 25.2823 35.2937 25.341 34.985 25.4948ZM24.7833 26.9209C24.7546 26.9674 24.4321 27.179 24.0666 27.3913L23.4023 27.7773L25.7914 27.799C27.1053 27.8109 29.2514 27.8109 30.5603 27.799L32.9402 27.7773L32.9536 27.3068L32.9669 26.8364H28.9012C26.1932 26.8364 24.8181 26.8646 24.7833 26.9209ZM29.4257 31.6779C28.6317 32.0629 28.1542 33.0204 28.3313 33.8727C28.7564 35.9178 31.579 36.0791 32.2377 34.096C32.5576 33.1333 32.0323 32.0133 31.0731 31.6125C30.6675 31.4431 29.8426 31.4758 29.4257 31.6779ZM19.7531 33.5045V34.0364H23.5576H27.3622V33.5045V32.9727H23.5576H19.7531V33.5045Z" fill="#F6AE5A" />
                        </svg>
                        <h2 className='mb-3 mt-5 text-md md:text-2xl font-semibold text-center'>
                            {translate.home.discover.cart.titleCuttingEdge}
                        </h2>
                        <p className='text-center text-sm md:text-md'>{translate.home.discover.cart.subTitleCuttingEdge}</p>
                    </div>
                    <div data-aos-duration="1200" data-aos="fade-up" className='flex flex-col items-center'>
                        <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.0698 0.09547C15.8776 0.595521 14.1735 1.95702 13.2263 3.96519C12.8357 4.79322 12.6627 5.46422 12.5984 6.39963L12.5466 7.153L11.8879 7.53683C7.59308 10.0398 4.77109 14.4277 4.30213 19.3323L4.24393 19.9411L3.70958 20.219C2.15175 21.0292 0.921196 22.5578 0.346925 24.396C0.173284 24.9518 0.144012 25.2268 0.144012 26.3013C0.144012 27.3758 0.173284 27.6509 0.346925 28.2066C1.08107 30.5566 2.77374 32.2493 5.12374 32.9834C5.68615 33.1591 5.9476 33.186 7.07233 33.1836C8.29769 33.181 8.41556 33.1656 9.15022 32.9115L9.92905 32.6422L10.2328 32.8815C11.3936 33.7963 13.2149 34.754 14.7485 35.2564C17.2171 36.0651 20.1089 36.2222 22.6942 35.6882C24.7046 35.273 27.19 34.1243 28.7672 32.8815L29.0709 32.6422L29.8498 32.9115C30.5844 33.1656 30.7023 33.181 31.9277 33.1836C33.0534 33.186 33.313 33.1592 33.8732 32.9833C36.2669 32.2317 37.9013 30.5972 38.653 28.2036C38.8269 27.6498 38.856 27.3769 38.856 26.3013C38.856 25.2268 38.8267 24.9518 38.6531 24.396C38.0788 22.5578 36.8482 21.0292 35.2904 20.219L34.7561 19.9411L34.6979 19.3323C34.2357 14.4983 31.4706 10.1374 27.2849 7.64093L26.4527 7.14451L26.405 6.3449C26.309 4.73519 25.6033 3.20836 24.3986 2.00327C23.577 1.18157 22.7818 0.690699 21.6522 0.308256C20.9391 0.0668908 20.7079 0.0306905 19.7165 0.00540215C18.9747 -0.0134775 18.413 0.0172666 18.0698 0.09547ZM13.5115 10.4032C14.0448 11.4085 15.1307 12.4384 16.2956 13.0437C17.4535 13.6454 18.0644 13.787 19.5 13.787C20.9356 13.787 21.5465 13.6454 22.7043 13.0437C23.8693 12.4384 24.9552 11.4085 25.4885 10.4032C25.6004 10.1923 25.7234 10.0198 25.7617 10.0198C25.8002 10.0198 26.0731 10.1819 26.3681 10.3799C28.5553 11.8483 30.244 13.9758 31.1662 16.4246C31.3752 16.9798 31.7397 18.4258 31.8276 19.0482C31.8718 19.3611 31.864 19.373 31.6155 19.373C31.1858 19.373 30.0568 19.6332 29.4594 19.8698C27.4193 20.678 25.9596 22.2634 25.2889 24.3991C25.115 24.9528 25.086 25.2257 25.086 26.3013C25.086 27.3766 25.1151 27.6499 25.2888 28.2029C25.5378 28.9958 25.967 29.8614 26.3784 30.4004C26.5488 30.6236 26.6878 30.8351 26.6873 30.8704C26.685 31.0734 24.7083 32.1152 23.5499 32.524C21.051 33.4057 17.956 33.406 15.4501 32.5248C14.3919 32.1528 12.9003 31.3888 12.3202 30.9217C12.301 30.9062 12.4421 30.6689 12.6339 30.3945C13.1021 29.7244 13.4657 28.9848 13.711 28.2036C13.8849 27.6498 13.914 27.3769 13.914 26.3013C13.914 24.9164 13.7782 24.2918 13.2462 23.2299C12.1682 21.0784 10.0379 19.5946 7.74923 19.4011C7.16681 19.3519 7.12143 19.3339 7.15538 19.1656C7.17556 19.0653 7.23843 18.7105 7.29516 18.377C7.52535 17.023 8.3099 15.1005 9.1329 13.8736C9.73159 12.9812 10.6424 11.9537 11.3832 11.3352C12.1493 10.6954 13.0806 10.0313 13.2214 10.0242C13.2691 10.0218 13.3996 10.1923 13.5115 10.4032Z" fill="#F6AE5A" />
                        </svg>
                        <h2 className='mb-3 mt-5 text-md md:text-2xl font-semibold text-center'>{translate.home.discover.cart.titleSeamlessConnectivity}</h2>
                        <p className='text-center text-sm md:text-md'>{translate.home.discover.cart.subTitleSeamlessConnectivity}</p>
                    </div>
                    <div data-aos-duration="1200" data-aos="fade-up" className='flex flex-col items-center'>
                        <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.28832 0.117046C1.58721 0.359871 1.0253 0.876683 0.703412 1.5747C0.546758 1.91446 0.543804 1.96785 0.543804 4.48832V7.05585L0.732886 7.45934C0.974515 7.97481 1.52411 8.5244 2.03958 8.76603L2.44307 8.95512H18.5165H34.59L34.9934 8.76603C35.5089 8.5244 36.0585 7.97481 36.3001 7.45934L36.4892 7.05585V4.48832V1.92079L36.3001 1.5173C36.0585 1.00182 35.5089 0.452231 34.9934 0.210602L34.59 0.0215193L18.622 0.00590313C3.40059 -0.0089393 2.63701 -0.00373389 2.28832 0.117046ZM3.92113 13.6058C3.1356 13.7957 2.49998 14.169 1.84262 14.8262C0.914442 15.7545 0.510742 16.7148 0.510742 17.9942C0.510742 19.2738 0.914513 20.2342 1.84262 21.1619C2.76735 22.0862 3.73739 22.4941 5.0106 22.4941C6.29008 22.4941 7.25033 22.0904 8.17858 21.1622C9.10676 20.234 9.51046 19.2737 9.51046 17.9942C9.51046 16.721 9.10254 15.751 8.1783 14.8262C7.51053 14.1582 6.8811 13.7934 6.06575 13.6018C5.49928 13.4687 4.4805 13.4706 3.92113 13.6058ZM14.218 13.6574C13.2746 14.0466 12.6922 14.7597 12.5354 15.7176C12.4448 16.2707 12.4448 33.2236 12.5354 33.7767C12.6748 34.628 13.2138 35.3491 14.0001 35.7361L14.4688 35.9669H24.5294H34.59L34.9934 35.7779C35.5089 35.5362 36.0585 34.9866 36.3001 34.4712L36.4892 34.0677V24.7472V15.4267L36.3001 15.0232C36.0585 14.5077 35.5089 13.9581 34.9934 13.7165L34.59 13.5274L24.6012 13.511L14.6125 13.4946L14.218 13.6574ZM3.92113 27.1117C3.1356 27.3016 2.49998 27.6749 1.84262 28.3322C0.914442 29.2604 0.510742 30.2207 0.510742 31.5001C0.510742 32.7798 0.914513 33.7401 1.84262 34.6678C2.76735 35.5921 3.73739 36 5.0106 36C6.29008 36 7.25033 35.5963 8.17858 34.6681C9.10676 33.7399 9.51046 32.7796 9.51046 31.5001C9.51046 30.2269 9.10254 29.2569 8.1783 28.3322C7.51053 27.6641 6.8811 27.2993 6.06575 27.1077C5.49928 26.9746 4.4805 26.9765 3.92113 27.1117Z" fill="#F6AE5A" />
                        </svg>
                        <h2 className='mb-3 mt-5 text-md md:text-2xl font-semibold text-center'>{translate.home.discover.cart.titleIntuitiveUserInterface} </h2>
                        <p className='text-center text-sm md:text-md'>{translate.home.discover.cart.subTitleIntuitiveUserInterface}</p>
                    </div>
                </div>
            </div>
            {/* contact btns */}
            <div data-aos-duration="1000" data-aos="fade-up" className='flex items-center justify-center'>
                <Link href={"/contactUs"} className='btnOrange text-sm md:text-base text-white font-semibold capitalize px-6 py-2 rounded-full'>{translate.navBar.contactUs}</Link>
                <Link href={"/services"} className='ms-4 flex items-center text-sm md:text-base text-white capitalize font-semibold'>{translate.viewAll}
                    <svg className='ms-4' width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.96028 6.14234C7.17996 6.36202 7.17996 6.71812 6.96028 6.93779L1.22541 12.6727C1.00573 12.8923 0.649631 12.8923 0.429956 12.6727L0.164756 12.4075C-0.0549187 12.1878 -0.0549187 11.8317 0.164756 11.612L5.23671 6.54007L0.164756 1.46812C-0.0549186 1.24844 -0.0549186 0.892341 0.164756 0.672667L0.429956 0.407467C0.649631 0.187792 1.00573 0.187792 1.22541 0.407467L6.96028 6.14234Z" fill="white" />
                    </svg>
                </Link>
            </div>
            {/* contact card */}
            <div data-aos-duration="1000" data-aos="fade-up" className="bg-white px-7 py-12 rounded-3xl mt-10">
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-col gap-5'>
                    <div className='lg:mt-16 order-2 lg:order-1' data-aos-duration="1000" data-aos="fade-up" >
                        <h4 className='text-amber-600 capitalize ms-10'>our mission statement</h4>
                        <h1 className='font-medium sm:text-xl lg:text-4xl my-5'>Empowering the world through transformative technology solutions</h1>
                        <p className='font-medium'>We are dedicated to empowering individuals,
                            businesses, and communities by providing innovative and cutting-edge
                            technology solutions that unlock new possibilities and drive positive change. Our mission is to make technology accessible, reliable, and impactful, enabling our customers to
                            thrive in the digital era and shape a better future for all.
                        </p>
                        <div className='flex items-center justify-start mt-7 '>
                            <Link href={"/contactUs"} className='btnOrange text-sm md:text-base text-white font-semibold capitalize px-6 py-2 rounded-full'>{translate.navBar.contactUs}</Link>
                        </div>
                    </div>
                    <div data-aos-duration="1000" data-aos="fade-up" className='relative overflow-hidden mx-auto lg:ms-auto lg:mx-0 order-1 lg:order-2  rounded-3xl h-[220px] w-full sm:w-3/4 lg:h-[420px] lg:w-[440px] xl:h-[447px] xl:w-[600px]'>
                        <Image priority sizes="(max-width: 768px) 100vw " src={img} fill alt='img' />
                    </div>
                </div>
            </div>

            {/* <div data-aos-duration="1000" data-aos="fade-up" className='flex justify-center'>
                <span className='btnOrange my-10 text-sm md:text-base text-white font-semibold capitalize px-6 py-2 rounded-full flex  mx-auto'>our clients</span>
            </div> */}
        </div>
    )
}

export default Discover
