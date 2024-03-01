import Link from 'next/link'
import React from 'react'
import imageCover from "../../../../public/images/about/cover.jpg"
import firstImageAboutUs from "../../../../public/images/about/firstImageAboutUs.jpg"
import secoundImageAboutUs from "../../../../public/images/about/secoundImageAboutUs.jpg"

import Image from 'next/image'
import { getDictionary } from '../dictionaries'
import SwiperAbout from './components/SwiperAbout'

async function page({ params: { lang } }) {
  const language = await getDictionary(lang)
  console.log(language);


  const data = [
    {
      id: 1,
      about: "During a train ride, a moment of inspiration struck Vasily. He wished for a convenient study tool on his phone to help him prepare for the LSAT. However, such an app didn&apos;t exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid LSAT app for over a year.",
      img: firstImageAboutUs
    },
    {
      id: 2,
      about: "During a train ride, a moment of inspiration struck  didn&apos;t exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid LSAT app for over a year.",
      img: secoundImageAboutUs
    },
    {
      id: 3,
      about: "During  ride, a moment of inspiration struck  didn&apos;t exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid LSAT app for over a year.",
      img: imageCover
    },
    {
      id: 4,
      about: "a train ride, a moment of inspiration struck  didn&apos;t exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid LSAT app for over a year.",
      img: firstImageAboutUs
    },
  ]

  const data2 = [
    {
      id: 1,
      title: "san francisco",
      address: "123 main street, suite 200",
      phone: "(555) 123-4567",
      img: firstImageAboutUs
    },
    {
      id: 2,
      title: "new mexico",
      address: "789 canyon road",
      phone: "(555) 555-1234",
      img: secoundImageAboutUs
    },
    {
      id: 3,
      title: "london ",
      address: "789 oak street , 4th floor, suite 402",
      phone: "+44 20 1234 5678",
      img: imageCover
    },
  ]

  return (
    <main className="container mx-auto px-5 my-10">
      <h1 data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000" className='text-white text-xl md:text-5xl text-center md:text-balance leading-8	md:leading-tight'>To revolutionize industries through innovative technology solutions, driving positive change and empowering individuals and businesses</h1>
      <p data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000" className='text-center px-5 text-white mt-4 text-sm font-light xl:px-40'>At FutureSphere our mission is to empower individuals and businesses through innovative technology solutions that enrich lives, foster growth, and drive positive change. We are dedicated to pushing the boundaries of what is possible, creating transformative experiences that make a lasting impact in a rapidly evolving digital landscape.</p>
      <div data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="500" className='flex justify-center items-center mt-5 mb-10'>
        <Link data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000" className='px-4 sm:px-6 py-1.5 text-white rounded-full font-bold capitalize btnOrange' href={"/contactUs"}>contact us</Link>
      </div>
      <div data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500" className='relative w-full h-[250px] sm:h-[400px] overflow-hidden rounded-2xl md:h-[500px]  xl:h-[750px] '>
        <Image priority fill sizes='(max-width:992px) , 100vw' alt='imageCover' src={imageCover} />
      </div>

      <div data-aos="fade-up"
        data-aos-duration="1000" className='bg-white py-10 px-5 my-12 rounded-3xl'>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <span data-aos="fade-up" data-aos-duration="1000" className='btnOrange text-white capitalize font-bold px-6 py-1 rounded-full'>our story</span>
            <p data-aos="fade-up" data-aos-duration="1000" className='mt-5 mb-7 text-sm'>In 2010, our founder, Vasily, faced a daunting challenge - preparing for the Law School Admission Test (LSAT) while juggling an internship and evening classes in different cities. The lack of time and a conducive study environment made it incredibly difficult for him to achieve his dream of becoming a lawyer.</p>
            <p data-aos="fade-up" data-aos-duration="1000" className='text-sm'>During a train ride, a moment of inspiration struck Vasily. He wished for a convenient study tool on his phone to help him prepare for the LSAT. However, such an app didn&apos;t exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid LSAT app for over a year.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-center items-center'>
            <div className='relative h-[300px] xl:h-full w-full xl:w-9/12  overflow-hidden rounded-3xl md:rounded-ss-[170px] md:rounded-ee-[170px]'>
              <Image priority sizes='(max-width:992px) , 100vw' fill src={firstImageAboutUs} alt='firstImageAboutUs' />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-center items-center order-2 md:order-1'>
            <div className='relative h-[300px] xl:h-full w-full xl:w-9/12  overflow-hidden rounded-3xl md:rounded-ss-[170px] md:rounded-ee-[170px]'>
              <Image priority sizes='(min-width:992px) , 100vw' fill src={secoundImageAboutUs} alt='secoundImageAboutUs' />
            </div>
          </div>
          <div  className='order-1 md:order-2'>
            <p data-aos="fade-up" data-aos-duration="1000" className='mt-5 mb-7 text-sm'>This success prompted Vasily to establish FutureSphere, an app development company with a strong focus on creating profitable and impactful applications. Building on their initial achievement, FutureSphere expanded their educational app portfolio to include exams such as SAT, GMAT, MCAT, and more, catering to the needs of a broader audience.</p>
            <p data-aos="fade-up" data-aos-duration="1000" className='text-sm'>As time went on, it became evident that the industry had much more to offer than just exam-focused applications. People began approaching FutureSphere, seeking guidance on how to develop their own apps, what it takes to succeed, and how to navigate the complex world of mobile applications. In response to this growing demand for expertise and support, FutureSphere expanded its services and evolved into a comprehensive resource for aspiring app creators - a company known as FutureSphere.</p>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000">
        <div className='flex justify-center flex-col items-center'>
          <span data-aos="fade-up" data-aos-duration="1000" className='text-white btnOrange capitalize px-6 py-1 font-bold rounded-full'>our values</span>
          <h2 data-aos="fade-up" data-aos-duration="1000" className='capitalize mt-6 text-white text-xl md:text-4xl'>guided by integrity and purpose</h2>
          <p data-aos="fade-up" data-aos-duration="1000" className='text-white text-sm md:text-base mt-5 text-center md:px-10 xl:px-32'>At FutureSphere, we are driven by a strong set of values that shape every aspect of our business, ensuring transparency, ethical practices, and a shared commitment to making a positive impact.</p>
        </div>
        <div className='bg-white p-7 mt-10 rounded-xl'>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-center justify-center my-5'>
              <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M21.307 0.159899C21.1765 0.247789 20.9978 0.426524 20.9099 0.557024C20.7505 0.793555 20.75 0.802133 20.75 3.4989C20.75 6.10369 20.7553 6.21296 20.8954 6.45919C21.1344 6.87945 21.3502 6.99673 21.875 6.9916C22.1307 6.98907 22.475 6.93261 22.6566 6.86335C23.7272 6.45505 24.5869 7.83303 23.7572 8.62742C23.4281 8.94249 23.0247 9.03544 22.6358 8.88582C22.4687 8.82155 22.158 8.75532 21.9453 8.73872C21.4984 8.70378 21.1862 8.86571 20.9099 9.27577C20.7504 9.51237 20.75 9.52018 20.75 12.2344C20.75 14.9486 20.7504 14.9564 20.9099 15.193C20.9978 15.3235 21.1765 15.5022 21.307 15.5901C21.5388 15.7463 21.5863 15.75 23.3971 15.75H25.25V15.9813C25.25 16.6589 25.6648 17.5644 26.2377 18.1373C27.8106 19.7101 30.4618 19.3534 31.5679 17.4203C31.8016 17.0118 32 16.351 32 15.9813V15.75H33.8529C35.6637 15.75 35.7112 15.7463 35.943 15.5901C36.0735 15.5022 36.2522 15.3235 36.3401 15.193L36.5 14.9558V8.93405C36.5 2.30668 36.5103 2.47803 36.0656 1.70073C35.7931 1.22457 35.2181 0.652508 34.7626 0.404586C34.0059 -0.00716374 34.1339 8.12727e-06 27.5659 8.12727e-06H21.5442L21.307 0.159899ZM2.96678 6.86166C2.16458 7.07738 1.35957 7.70759 0.932144 8.45473C0.494308 9.22001 0.500004 9.13402 0.500004 14.9562V20.25H2.74571H4.99135L5.03642 19.916C5.21607 18.5842 6.09238 17.4867 7.30266 17.0776C7.93646 16.8635 8.85784 16.8639 9.45915 17.0786C10.7187 17.5283 11.5289 18.5481 11.7135 19.916L11.7586 20.25H12.8793H14V18.3313C14 16.4814 14.0057 16.4014 14.1582 16.0989C14.2738 15.8697 14.4009 15.7426 14.6301 15.627C15.0211 15.4298 15.2502 15.428 15.6929 15.6184C16.5079 15.969 17.375 15.4679 17.375 14.6462C17.375 13.7874 16.524 13.274 15.6929 13.6316C15.2502 13.822 15.0211 13.8202 14.6301 13.6231C14.4009 13.5075 14.2738 13.3803 14.1582 13.1511C14.0014 12.8402 14 12.8103 14 9.79369V6.75001L8.67383 6.75465C4.2421 6.75851 3.28367 6.77644 2.96678 6.86166ZM7.83985 19.2589C7.30534 19.5848 7.1221 20.2039 7.38156 20.8071C7.57203 21.2498 7.5702 21.4789 7.37305 21.8699C7.25745 22.0991 7.13033 22.2262 6.90111 22.3418C6.59019 22.4986 6.56031 22.5 3.54369 22.5H0.500004V27.7938C0.500004 33.616 0.494308 33.53 0.932144 34.2953C1.20763 34.7768 1.72316 35.2924 2.20473 35.5679C2.97001 36.0057 2.88402 36 8.70617 36H14V33.7543V31.5086L13.666 31.4599C12.6587 31.3131 11.8546 30.8491 11.2987 30.094C10.4475 28.9378 10.4475 27.3122 11.2987 26.156C11.8502 25.4069 12.6965 24.9172 13.666 24.7864L14 24.7414V23.6207V22.5H12.0813C10.2313 22.5 10.1514 22.4943 9.84917 22.3418C9.48987 22.1605 9.2217 21.7541 9.21988 21.388C9.21924 21.2598 9.28611 20.9984 9.36845 20.8071C9.63071 20.1973 9.47595 19.6492 8.9382 19.2832C8.64303 19.0823 8.1474 19.0714 7.83985 19.2589ZM16.25 24.4187C16.25 26.2686 16.2443 26.3486 16.0918 26.6511C15.9762 26.8803 15.8491 27.0075 15.6199 27.123C15.2289 27.3202 14.9998 27.322 14.5571 27.1316C13.7421 26.781 12.875 27.2821 12.875 28.1038C12.875 28.9626 13.726 29.476 14.5571 29.1184C14.9998 28.928 15.2289 28.9298 15.6199 29.127C15.8491 29.2425 15.9762 29.3697 16.0918 29.5989C16.2486 29.9098 16.25 29.9397 16.25 32.9563V36H21.5438C27.366 36 27.28 36.0057 28.0453 35.5679C28.5268 35.2924 29.0424 34.7768 29.3179 34.2953C29.7557 33.53 29.75 33.616 29.75 27.7938V22.5H27.5043H25.2586L25.2135 22.834C24.9751 24.6 23.6632 25.8017 21.9453 25.8273C20.175 25.8538 18.7784 24.6274 18.5364 22.834L18.4913 22.5H17.3707H16.25V24.4187Z" fill="#EF8A08" />
              </svg>
              <span data-aos="fade-up" data-aos-duration="1000" className='mt-3 mb-4 font-bold'>Integrity</span>
              <p data-aos="fade-up" data-aos-duration="1000" className='text-center text-sm md:px-10'>Upholding honesty and ethical conduct in everything we do, building trust with our stakeholders.</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-center justify-center my-5'>
              <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M33.7126 0.0477422C28.7195 0.475102 23.4088 2.6382 19.1031 5.99836C18.0931 6.78656 16.7712 7.98117 16.1651 8.65357L15.6731 9.19934L15.1303 9.24258C11.9802 9.49352 9.8367 10.0735 7.30911 11.3587C5.3753 12.342 2.66012 14.4251 2.39694 15.1272C2.27347 15.4569 2.46753 15.8918 2.79617 16.0219C2.90058 16.0632 4.23589 16.2734 5.76343 16.4889C7.29097 16.7045 8.58387 16.8957 8.63654 16.9139C8.70165 16.9364 8.60462 17.0924 8.33363 17.401C7.88616 17.9107 7.7911 18.2037 7.96611 18.534C8.14983 18.8809 17.8666 28.5323 18.0857 28.5855C18.3914 28.6597 18.5911 28.5737 19.0846 28.155C19.3852 27.8999 19.5558 27.7962 19.5752 27.8566C19.5915 27.9075 19.7825 29.2148 19.9997 30.7617C20.414 33.7136 20.4391 33.8137 20.8171 34.0164C21.1415 34.1904 21.4968 34.0776 21.9166 33.6675C23.078 32.5327 24.3771 30.6913 25.2356 28.9629C26.3866 26.6451 26.9946 24.4481 27.2087 21.832L27.2892 20.8477L28.0801 20.0742C29.4717 18.7132 30.5798 17.383 31.6826 15.75C34.6455 11.3625 36.3337 6.47213 36.4692 1.88395L36.5102 0.498305L36.2611 0.249187L36.0119 0L35.0029 0.0118125C34.4479 0.0183516 33.8673 0.0344531 33.7126 0.0477422ZM27.4729 6.80737C28.0368 7.02162 28.4074 7.26342 28.8393 7.69873C29.5466 8.4117 29.8853 9.25432 29.8853 10.3008C29.8853 11.3598 29.544 12.197 28.8147 12.9262C28.0854 13.6555 27.2483 13.9969 26.1892 13.9969C25.1302 13.9969 24.293 13.6555 23.5637 12.9262C22.8345 12.197 22.4931 11.3598 22.4931 10.3008C22.4931 8.69667 23.4021 7.38042 24.9064 6.80646C25.628 6.53105 26.7468 6.53147 27.4729 6.80737ZM6.92358 24.0806C6.09333 24.2634 5.3315 24.6543 4.7008 25.2212C4.07044 25.7878 3.34784 27.1297 2.43216 29.4344C1.78402 31.0657 0.48999 34.9177 0.48999 35.2158C0.48999 35.6721 0.812795 36 1.26209 36C1.57154 36 5.36848 34.7283 7.02497 34.0699C8.50147 33.483 9.9954 32.7645 10.6175 32.3421C12.0091 31.397 12.7575 29.4915 12.413 27.7702C12.2712 27.0617 11.8682 26.195 11.4451 25.6883C10.346 24.3723 8.53072 23.7268 6.92358 24.0806Z" fill="#EF8A08" />
              </svg>
              <span data-aos="fade-up" data-aos-duration="1000" className='mt-3 mb-4 font-bold'>Innovation</span>
              <p data-aos="fade-up" data-aos-duration="1000" className='text-center text-sm md:px-10'>Embracing a culture of creativity and continuous improvement to drive groundbreaking solutions.</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-center justify-center my-5'>
              <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.7589 0.0750463C16.8015 0.293596 15.7709 1.07175 15.3215 1.91548C14.7794 2.93293 14.7792 4.33415 15.3212 5.35274C15.6887 6.04357 16.5068 6.74622 17.343 7.08931C17.548 7.17347 17.5402 7.17762 17.0658 7.2356C16.4593 7.30976 15.5357 7.62316 15.0026 7.93571C14.7805 8.06596 14.3127 8.45753 13.963 8.80583C13.4508 9.31583 13.2627 9.56421 12.9963 10.0819C12.5211 11.0055 12.3835 11.6519 12.3829 12.9645C12.3824 13.9526 12.3936 14.0439 12.5421 14.2662C12.8826 14.7759 12.5809 14.7513 18.4994 14.7514C23.6636 14.7516 23.8151 14.7478 24.0979 14.6108C24.5881 14.3736 24.696 14.0903 24.696 13.0419C24.696 12.0293 24.5816 11.3347 24.292 10.5889C23.594 8.79127 21.8607 7.44634 19.9713 7.23644L19.5308 7.18747L20.0795 6.91643C21.9169 6.00909 22.6562 3.87651 21.7715 2.03692C21.4923 1.45642 20.9143 0.816116 20.3982 0.515452C19.6152 0.0592145 18.5827 -0.113036 17.7589 0.0750463ZM9.11047 7.44465C8.89262 7.56384 8.12636 8.32701 7.63776 8.91138C6.06204 10.7959 4.85755 13.2207 4.32005 15.5899C4.11965 16.4734 4.11247 16.6569 4.26544 16.9793C4.60319 17.691 5.65942 17.7678 6.0892 17.112C6.15386 17.0133 6.28284 16.608 6.37586 16.2115C6.63501 15.1065 6.93785 14.2433 7.42435 13.2229C8.09745 11.8109 8.82683 10.74 9.8685 9.63408C10.4192 9.04943 10.6233 8.71492 10.6233 8.39695C10.6233 8.11697 10.3223 7.63477 10.0597 7.4939C9.79053 7.34959 9.3281 7.32559 9.11047 7.44465ZM26.9646 7.50375C26.6488 7.69627 26.4557 8.03845 26.4554 8.40588C26.455 8.79682 26.5257 8.92714 27.0161 9.4391C28.7969 11.2982 30.0156 13.5202 30.6151 16.0017C30.8598 17.0142 30.998 17.291 31.3395 17.4531C31.9702 17.7523 32.7101 17.4086 32.8614 16.7462C32.9781 16.235 32.4092 14.1618 31.7348 12.641C31.0113 11.0094 29.9337 9.3966 28.71 8.1138C28.4208 7.81061 28.0975 7.51768 27.9916 7.46294C27.7145 7.31968 27.2352 7.33875 26.9646 7.50375ZM5.86748 21.3294C4.57258 21.6112 3.47364 22.6731 3.12626 23.9784C3.00903 24.4189 2.99616 25.2757 3.09994 25.7263C3.32778 26.7149 4.18052 27.7623 5.08025 28.1586C5.34046 28.2731 5.55415 28.3861 5.55521 28.4097C5.55626 28.4332 5.36269 28.4727 5.12508 28.4976C4.58131 28.5544 3.63801 28.8766 3.1112 29.1855C2.88906 29.3158 2.41924 29.7085 2.067 30.0582C1.52612 30.5954 1.37568 30.7976 1.0988 31.36C0.613363 32.346 0.49086 32.9186 0.491212 34.2008C0.491493 35.4351 0.559746 35.6303 1.07291 35.8632C1.35774 35.9925 1.59585 35.9983 6.6431 35.9998C11.7737 36.0013 11.9236 35.9976 12.2065 35.8606C12.6954 35.624 12.8046 35.339 12.804 34.3031C12.8032 32.8766 12.5997 32.0284 12.0245 31.0544C11.6439 30.4099 10.7999 29.5641 10.1659 29.1919C9.57628 28.8458 8.74662 28.5578 8.16345 28.4968C7.92963 28.4724 7.74014 28.4332 7.74232 28.4097C7.7445 28.3861 7.9741 28.2584 8.25246 28.1258C9.43956 27.5606 10.2694 26.2267 10.2694 24.8839C10.2694 23.2145 9.02702 21.672 7.40556 21.3284C6.82809 21.206 6.43342 21.2063 5.86748 21.3294ZM29.6566 21.3073C28.3505 21.5547 27.1585 22.7157 26.8449 24.0461C26.4592 25.682 27.2732 27.42 28.7556 28.1258C29.0339 28.2584 29.2635 28.3906 29.2657 28.4197C29.2679 28.4487 29.1639 28.4725 29.0346 28.4725C28.3875 28.4725 27.0973 28.9696 26.3821 29.4946C25.7086 29.989 25.0532 30.8045 24.6957 31.593C24.3503 32.3548 24.2651 32.7907 24.224 34.0057C24.1871 35.0982 24.1918 35.1522 24.3482 35.4306C24.4549 35.6206 24.6107 35.7682 24.8015 35.8606C25.0844 35.9976 25.2343 36.0013 30.3649 35.9998C35.4122 35.9983 35.6503 35.9925 35.9351 35.8632C36.1031 35.787 36.2964 35.6267 36.379 35.4953C36.5159 35.2774 36.5233 35.1839 36.4964 34.0312C36.4638 32.6354 36.3759 32.251 35.8613 31.2518C35.5192 30.5875 34.551 29.5691 33.8968 29.1855C33.37 28.8766 32.4267 28.5544 31.8829 28.4976C31.6453 28.4727 31.4518 28.4332 31.4528 28.4097C31.4539 28.3861 31.6676 28.2731 31.9278 28.1586C32.2738 28.0061 32.5344 27.8172 32.8988 27.4549C33.6457 26.712 33.9823 25.9132 33.9823 24.8839C33.9823 23.8758 33.6444 23.0576 32.9328 22.3427C32.0418 21.4476 30.8708 21.0775 29.6566 21.3073ZM13.6137 25.6933C12.6363 26.0391 12.6965 27.3976 13.7038 27.7267C15.1674 28.2048 16.6681 28.4271 18.4336 28.4271C20.1792 28.4272 21.3242 28.2726 22.8842 27.8262C23.5394 27.6388 23.6726 27.5745 23.8793 27.3457C24.2037 26.9866 24.2667 26.6047 24.0679 26.2031C23.7506 25.562 23.3476 25.4747 22.1629 25.7903C20.6739 26.187 20.1587 26.2513 18.4688 26.2513C16.7855 26.2513 16.2666 26.187 14.7958 25.7967C13.8909 25.5565 13.9786 25.5642 13.6137 25.6933Z" fill="#EF8A08" />
              </svg>
              <span data-aos="fade-up" data-aos-duration="1000" className='mt-3 mb-4 font-bold'>Collaboration</span>
              <p data-aos="fade-up" data-aos-duration="1000" className='text-center text-sm md:px-10'>Fostering a collaborative environment that encourages teamwork, diversity, and shared success.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center md:mt-20">
            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-center justify-center my-5'>
              <svg width="43" height="36" viewBox="0 0 43 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.6529 0.0694951C17.6524 0.461881 15.2293 2.6997 14.6275 5.63435C14.1742 7.84424 14.8348 10.1657 16.3797 11.792C17.3356 12.7983 18.3024 13.395 19.6256 13.7955C20.252 13.9851 20.4675 14.0097 21.5 14.0097C22.5325 14.0097 22.7479 13.9851 23.3744 13.7955C24.7001 13.3943 25.6368 12.8212 26.578 11.8354C27.8561 10.4966 28.4997 8.88583 28.4997 7.0256C28.4997 5.10245 27.8143 3.48254 26.4061 2.07753C25.2479 0.92185 23.9198 0.271763 22.3066 0.0706215C21.5533 -0.0232712 21.3632 -0.0234321 20.6529 0.0694951ZM6.69203 5.2175C6.06665 5.3134 5.41294 5.57328 4.84765 5.95078C2.99522 7.1878 2.37482 9.6842 3.42092 11.6921C3.76165 12.346 4.6618 13.2293 5.32822 13.5635C7.07388 14.4391 9.05472 14.1221 10.4337 12.7465C11.0792 12.1026 11.4584 11.4531 11.6408 10.6789C12.0034 9.14072 11.573 7.59378 10.4789 6.50263C9.46617 5.49274 8.04427 5.01016 6.69203 5.2175ZM35.0127 5.2175C34.3873 5.3134 33.7336 5.57328 33.1683 5.95078C31.3159 7.1878 30.6955 9.6842 31.7416 11.6921C32.0823 12.346 32.9825 13.2293 33.6489 13.5635C35.3945 14.4391 37.3754 14.1221 38.7544 12.7465C39.3998 12.1026 39.779 11.4531 39.9615 10.6789C40.3241 9.14072 39.8937 7.59378 38.7995 6.50263C37.7868 5.49274 36.3649 5.01016 35.0127 5.2175ZM5.65004 16.8009C4.96295 16.8929 4.53484 17.0308 3.87405 17.3733C2.45287 18.1101 1.44885 19.3594 1.06178 20.8729C0.912287 21.4574 0.903115 21.7801 0.903115 26.4544C0.903115 32.0176 0.887506 31.8536 1.48256 32.5296C1.66182 32.7333 1.99402 32.9978 2.22075 33.1174L2.63293 33.3348H5.43217H8.23133L8.22722 29.9959C8.22199 25.724 8.32965 24.5195 8.87788 22.7146C9.33044 21.2248 10.1469 19.7812 11.2513 18.5185C11.4894 18.2462 11.6843 18.0061 11.6843 17.9849C11.6843 17.9636 11.451 17.7944 11.1659 17.6086C10.4973 17.173 9.72412 16.9075 8.82357 16.8044C8.01949 16.7122 6.32636 16.7104 5.65004 16.8009ZM19.0596 16.8409C16.604 17.2431 14.6287 18.3102 12.99 20.1196C11.8415 21.3879 11.1459 22.8996 10.791 24.8985C10.5861 26.0528 10.5034 29.5124 10.6162 32.2085L10.6869 33.898L10.9587 34.407C11.2727 34.9951 11.7009 35.399 12.3279 35.6983L12.7704 35.9095L19.1667 35.9667C30.7397 36.0704 31.1885 36.0189 32.0039 34.4922L32.3213 33.898L32.3443 29.766C32.3695 25.2074 32.343 24.8515 31.8733 23.4496C30.7845 20.1997 27.8872 17.5672 24.678 16.912C23.826 16.7381 19.9841 16.6895 19.0596 16.8409ZM34.0688 16.8041C33.2848 16.9026 32.4644 17.1979 31.834 17.6086C31.5489 17.7944 31.3156 17.9636 31.3156 17.9849C31.3156 18.0061 31.5105 18.2462 31.7487 18.5185C33.024 19.9767 33.8518 21.5112 34.291 23.2315C34.6737 24.7306 34.7144 25.2571 34.7661 29.3925L34.8155 33.3348H37.551H40.2865L40.7117 33.1109C41.2872 32.8076 41.7343 32.3263 41.9324 31.7971C42.0914 31.372 42.0968 31.1957 42.0968 26.4254C42.0968 21.7799 42.0876 21.4572 41.9381 20.8729C41.6862 19.888 41.2794 19.1941 40.4916 18.4055C39.7426 17.6557 38.9429 17.1738 38.0338 16.9242C37.4565 16.7657 34.9739 16.6905 34.0688 16.8041Z" fill="#EF8A08" />
              </svg>

              <span data-aos="fade-up" data-aos-duration="1000" className='mt-3 mb-4 font-bold'>Customer-centric</span>
              <p data-aos="fade-up" data-aos-duration="1000" className='text-center text-sm md:px-10'>Putting our customers at the heart of everything we do, delivering exceptional experiences and exceeding their expectations.</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-center justify-center my-5'>
              <svg  width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.4134 0.0612904C16.5867 0.49901 13.135 2.11354 10.5941 4.65453C9.47399 5.77467 8.76652 6.74107 8.76652 7.15106C8.76652 7.67716 8.92497 7.73142 10.462 7.7317C12.7323 7.73216 14.3495 8.0241 16.0749 8.74506C16.9989 9.13111 17.7695 9.57003 19.7118 10.8165C21.3074 11.8405 22.152 12.1775 23.2765 12.2388C23.903 12.273 24.2522 12.2445 24.6631 12.1259C25.2244 11.9638 26.237 11.4688 26.6371 11.1612L26.8602 10.9896L26.6371 10.8741C25.9633 10.5252 17.677 5.6679 17.7061 5.63887C17.7738 5.57111 19.681 5.79796 20.6363 5.98738C21.8771 6.23347 23.0461 6.62191 24.1251 7.14662C26.7064 8.402 28.8971 10.8011 30.0657 13.6524C30.3759 14.4094 30.5262 14.5722 30.9152 14.5722C31.2973 14.5722 31.578 14.2536 31.5072 13.8999C31.3283 13.0053 30.1906 10.9276 29.2085 9.70176L28.5824 8.92043L28.8713 8.07901C29.4418 6.41761 29.3312 4.83101 28.5323 3.21278C27.8054 1.74043 26.4585 0.581378 25.027 0.196351C24.3611 0.0171951 21.5247 -0.0658194 20.4134 0.0612904ZM9.20849 12.9751C8.47348 13.7682 7.39817 15.5769 6.8902 16.8748C6.6993 17.3626 6.50554 17.7881 6.45969 17.8205C6.41384 17.853 6.17866 17.9058 5.9371 17.9378C5.32753 18.0186 4.27109 18.3906 3.64423 18.745C3.35497 18.9087 2.78312 19.3783 2.37359 19.7887C1.17146 20.9933 0.580373 22.3551 0.577415 23.9276C0.575381 24.962 0.712382 25.4956 1.27259 26.6361C2.78626 29.7179 5.2264 32.35 8.1221 34.0248C9.70769 34.942 11.9591 35.7011 13.7893 35.9358C14.5245 36.0301 14.6512 36.0248 14.8552 35.8912C15.2903 35.6061 15.2529 35.3813 14.5875 34.28C13.5674 32.5914 12.9278 30.9353 12.653 29.2708C12.4738 28.1847 12.4567 27.484 12.5438 24.7872C12.6221 22.3622 12.5457 21.763 12.0234 20.702C11.6302 19.9034 10.7872 19.0594 9.93575 18.612C9.57781 18.4239 9.2598 18.27 9.22911 18.27C9.19842 18.27 9.17327 20.6703 9.17327 23.604C9.17327 27.2066 9.14286 28.9075 9.07963 28.8443C8.88679 28.6515 7.96106 26.3698 7.70555 25.4574C7.30212 24.0173 7.19341 23.2452 7.19461 21.8291C7.19711 18.9257 7.90486 16.9742 10.0911 13.8419C10.4226 13.3669 10.4444 13.1625 10.1902 12.9083C9.92179 12.6399 9.49202 12.6691 9.20849 12.9751ZM35.9605 16.3056C35.8821 16.3946 35.7034 16.6961 35.5632 16.9758C34.5457 19.0056 32.7908 21.0339 31.0501 22.1922C30.6254 22.4748 29.5559 23.0846 28.6732 23.5476C26.8371 24.5104 26.4058 24.7835 25.7819 25.378C25.1791 25.9523 24.8343 26.4666 24.5556 27.2071C24.3076 27.8662 24.1693 29.0873 24.2773 29.6637L24.3387 29.991L28.4733 27.6364C30.7472 26.3414 32.8365 25.1513 33.1161 24.9917L33.6246 24.7015L33.4499 24.9756C32.2762 26.8158 30.657 28.4996 28.9682 29.636C28.0782 30.2349 26.5799 30.915 25.6065 31.162C23.9304 31.5871 22.6029 31.6538 20.2095 31.4329C19.6161 31.3782 19.5324 31.3915 19.3544 31.5695C19.1151 31.8088 19.1011 32.1395 19.3189 32.4076C19.5396 32.6792 20.3155 32.7831 22.1616 32.7884C23.4594 32.792 24.7136 32.6922 25.1763 32.5483C25.2769 32.517 25.4558 32.6714 25.7291 33.0256C26.8138 34.4317 28.8129 35.3739 30.7043 35.3706C32.8255 35.367 34.4787 34.4037 35.6735 32.475C36.8464 30.5818 37.7362 28.3916 38.1749 26.3179C38.3967 25.2699 38.4207 24.9638 38.4224 23.1695C38.4241 21.357 38.4022 21.0788 38.1746 20.0103C37.796 18.2335 37.1091 16.4437 36.7272 16.2393C36.4579 16.0952 36.1201 16.1244 35.9605 16.3056Z" fill="#EF8A08" />
              </svg>

              <span data-aos="fade-up" data-aos-duration="1000" className='mt-3 mb-4 font-bold'>Sustainability</span>
              <p data-aos="fade-up" data-aos-duration="1000" className='text-center text-sm md:px-10'>Operating with a focus on environmental and social responsibility, striving for a more sustainable future.</p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-center justify-center my-5'>
              <svg  width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.9917 0.0989994C18.361 0.295688 18.3284 0.350393 15.6224 5.76062C14.2267 8.55103 13.0801 10.8389 13.0745 10.8448C13.0688 10.8507 10.5356 11.2425 7.44511 11.7153C4.35456 12.1883 1.75261 12.6031 1.6629 12.6372C1.38482 12.743 0.952027 13.1717 0.811735 13.4805C0.64534 13.8467 0.637472 14.378 0.792691 14.766C0.882837 14.9912 1.87871 16.0117 5.0022 19.0794C8.56024 22.5737 9.09068 23.1225 9.07105 23.2893C9.05862 23.3947 8.65083 25.8633 8.16488 28.7751C7.18328 34.657 7.17408 34.755 7.55614 35.2992C7.86981 35.7459 8.32003 35.9783 8.87303 35.979C9.31031 35.9795 9.35869 35.9564 14.3568 33.3515C17.1302 31.9061 19.4439 30.7236 19.4984 30.7236C19.5529 30.7236 21.8499 31.8966 24.6028 33.3304C27.6516 34.9182 29.7243 35.9556 29.9053 35.9843C30.4669 36.0735 31.1349 35.7748 31.4631 35.2878C31.8539 34.7078 31.8767 34.95 30.8517 28.7793L29.9115 23.1189L34.0036 19.0686C36.8195 16.2814 38.1308 14.9341 38.2084 14.7484C38.3709 14.3595 38.352 13.775 38.1644 13.3874C37.989 13.0251 37.5518 12.6705 37.1518 12.5661C37.0064 12.5282 34.4224 12.1271 31.4095 11.6747C28.3967 11.2224 25.927 10.8481 25.9214 10.8431C25.9157 10.8382 24.7793 8.56757 23.3962 5.79739C21.5816 2.16324 20.8067 0.683257 20.6136 0.482745C20.4416 0.30407 20.2161 0.166131 19.9822 0.09672C19.5461 -0.0327638 19.4133 -0.0324696 18.9917 0.0989994Z" fill="#EF8A08" />
              </svg>

              <span data-aos="fade-up" data-aos-duration="1000" className='mt-3 mb-4 font-bold'>Excellence</span>
              <p data-aos="fade-up" data-aos-duration="1000" className='text-center text-sm md:px-10'>Pursuing excellence in all aspects of our work, setting high standards and striving for continuous growth and improvement.</p>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" className='my-7'>
        <div className='flex items-center flex-col'>
          <span className='capitalize btnOrange px-7 py-1 rounded-full font-bold text-white'>our team</span>
          <h1 className='text-white mt-5 text-xl md:text-3xl capitalize font-bold'>meet our team</h1>
          <p className='text-white mt-3 text-center text-sm'>Meet our passionate and talented team, committed to delivering exceptional results, driving innovation, and transforming your vision into reality.</p>
        </div>

      </div>

      <SwiperAbout data={data} />
      <div className='my-10'>
        <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-center'>
          <span className='text-white btnOrange rounded-full px-6 py-1 capitalize font-bold mb-7'>our offices</span>
        </div>
        <h1 data-aos="fade-up" data-aos-duration="1000" className='text-xl lg:text-4xl font-bold text-white capitalize text-center'>Discover Our Global Network of Offices</h1>
        <p data-aos="fade-up" data-aos-duration="1000" className='text-center text-white text-xs md:text-sm my-5'>Experience our expansive network of offices across the world, connecting you to our exceptional services wherever you are.</p>
        <div data-aos="fade-up" data-aos-duration="1000" className='bg-white p-7  grid md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-xl'>
          {data2.map((item) => (
            <div data-aos="fade-up" data-aos-duration="1000" key={item.id} className='xl:px-5'>
              <div className='relative overflow-hidden rounded-xl w-full h-[200px] md:h-[250px] lg:h-[300px]'>
                <Image priority fill sizes='(min-width:992px) , 100vw' alt={item.title} src={item.img} />
              </div>
              <span className='mt-5 inline-block capitalize text-amber-600 font-semibold'>{item.title}</span>
              <p className='text-sm mt-2 text-black/85'>{item.address}</p>
              <p className='text-sm md:text-base mt-2 font-semibold'>{item.phone}</p>
            </div>
          ))}
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-center items-center mt-5 mb-10'>
        <Link className='px-4 sm:px-6 py-1.5 text-white rounded-full font-bold capitalize btnOrange' href={"/contactUs"}>contact us</Link>
      </div>
    </main>
  )
}

export default page
