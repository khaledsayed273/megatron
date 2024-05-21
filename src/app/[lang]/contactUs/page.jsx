import Image from 'next/image'
import React from 'react'
import img1 from "../../../../public/images/contact-us/1.jpg"
import img2 from "../../../../public/images/contact-us/2.jpg"
import img3 from "../../../../public/images/contact-us/3.jpg"
import img4 from "../../../../public/images/contact-us/4.jpg"
import img5 from "../../../../public/images/contact-us/5.jpg"
import img6 from "../../../../public/images/contact-us/6.jpg"
import imageCover from "../../../../public/images/about/cover.jpg"
import firstImageAboutUs from "../../../../public/images/about/firstImageAboutUs.jpg"
import secoundImageAboutUs from "../../../../public/images/about/secoundImageAboutUs.jpg"
import Form from './components/Form'

function page() {

  const baseUrl = process.env.baseUrl

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

  const styleImage = "relative -rotate-45 w-[70px] lg:w-[90px] h-[70px] lg:h-[90px] hover:scale-110 duration-300"


  return (

    <main  className='container mx-auto mt-5 px-3'>

      <h1 data-aos="fade-up" data-aos-duration="1000"  className='text-center text-white text-xl md:text-4xl capitalize mb-3'>contact us</h1>
      <p data-aos="fade-up" data-aos-duration="1000" className='text-center text-white text-xs md:text-sm'>At FutureSphere our mission is to empower individuals and businesses through innovative technology solutions that enrich lives, foster growth, and drive positive change.</p>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 mt-10 gap-3">
        <div className='xl:col-span-2  '>
          <Form baseUrl={baseUrl} />
          <div  data-aos="fade-up" className='bg-white rounded-xl   my-7'>
            <div className="grid lg:grid-cols-3 p-5  gap-7">
              <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-center justify-center'>
                <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.5541 0.0878996C17.8055 0.209272 17.0553 0.620871 16.4763 1.22782C15.6263 2.11904 15.355 2.97292 15.3537 4.76202L15.353 5.66845L9.95129 5.69939C3.93549 5.73389 4.23808 5.70473 2.94904 6.3749C1.71878 7.01457 0.610603 8.48233 0.333358 9.83975C0.277696 10.1122 0.237061 11.3688 0.237061 12.8187V15.3266L11.5077 19.0831C17.7066 21.1492 22.8781 22.8396 22.9999 22.8396C23.1218 22.8396 28.2933 21.1492 34.4922 19.0831L45.7628 15.3266V12.8187C45.7628 11.3688 45.7222 10.1122 45.6665 9.83975C45.3873 8.47282 44.2909 7.02071 43.0508 6.37525C41.7625 5.70473 42.0648 5.73389 36.0486 5.69939L30.6468 5.66845L30.6461 4.76202C30.6449 2.97292 30.3736 2.11904 29.5235 1.22782C28.9232 0.598464 28.1916 0.210784 27.3569 0.0798081C26.6494 -0.0312498 19.2466 -0.0244032 18.5541 0.0878996ZM26.7345 4.78932V5.6785H22.9999H19.2654V4.78932V3.90015H22.9999H26.7345V4.78932ZM0.237061 25.8584C0.237061 30.929 0.268715 33.5669 0.333358 33.8832C0.386264 34.1423 0.592819 34.6892 0.792439 35.0983C1.43096 36.4076 2.60209 37.3756 4.10497 37.8364C4.61562 37.993 5.42442 38 22.9999 38C40.5755 38 41.3842 37.993 41.8949 37.8364C43.3367 37.3943 44.5542 36.4102 45.1625 35.1954C45.7859 33.9502 45.7628 34.3089 45.7628 25.8886C45.7628 21.7174 45.7333 18.3048 45.6972 18.3048C45.6611 18.3048 40.7085 19.9453 34.6915 21.9504L23.7515 25.596H22.9999H22.2484L11.3084 21.9504C5.2914 19.9453 0.338782 18.3048 0.302682 18.3048C0.266581 18.3048 0.237061 21.7039 0.237061 25.8584Z" fill="#EF8A08" />
                </svg>
                <h4 className='mt-3 font-semibold text-sm xl:text-base'>Sales and Business</h4>
                <p className='text-sm mt-1'>ayaalaa74@gmail.com</p>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-center justify-center'>
                <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M33.2803 1.45658L30.7555 2.91351L28.3105 2.01L25.8655 1.10658L24.8097 1.10297C24.0029 1.10033 23.6398 1.13825 23.27 1.2638C23.0038 1.35416 21.0242 2.43971 18.8708 3.67606C15.6112 5.5474 14.8728 6.0072 14.4618 6.42134C13.8017 7.08641 13.5626 7.68999 13.5551 8.71007C13.5503 9.37365 13.5812 9.52463 13.829 10.0496C14.1628 10.7568 14.7271 11.3344 15.4107 11.6689C16.0574 11.9853 17.1433 12.0616 17.8253 11.8384C18.0756 11.7566 20.1057 10.6343 22.3368 9.34444C24.5679 8.05459 26.5914 6.93015 26.8333 6.84569C27.3652 6.66004 27.8619 6.64667 28.3811 6.8039C28.5944 6.86857 32.3844 9.01107 36.8032 11.5651L44.8375 16.2087L45.0601 16.0007C45.3844 15.6978 45.5299 15.3684 45.5299 14.9371C45.5299 14.5938 45.133 13.8801 41.4782 7.65206C39.2497 3.85458 37.367 0.656538 37.2942 0.545326C37.0819 0.220928 36.6402 0.000352515 36.2022 5.78509e-07C35.8485 -0.000351358 35.5279 0.159515 33.2803 1.45658ZM8.62361 2.13071C8.29578 2.3212 8.03869 2.77308 4.37987 9.59106C0.178898 17.4194 0.275768 17.2062 0.61829 17.8686C0.742788 18.1094 1.59051 18.7403 1.78953 18.7403C1.83581 18.7403 2.18423 18.2027 2.56362 17.5455C2.94309 16.8885 3.41196 16.1634 3.60553 15.9342C5.60752 13.5643 9.10532 13.2515 11.4825 15.2299L12.0157 15.6736L12.5673 15.5353C12.8708 15.4592 13.4729 15.3975 13.9053 15.3982C16.464 15.4024 18.5004 16.9177 19.2616 19.3836L19.4466 19.9829L20.0165 20.1755C20.8592 20.4601 21.3888 20.8034 22.1342 21.5483C22.8549 22.2685 23.3506 23.1226 23.5553 23.997L23.6634 24.4587L24.1966 24.6361C25.8571 25.1887 27.1785 26.5188 27.729 28.1917C27.9245 28.7858 27.9641 29.0684 27.97 29.9142C27.9797 31.2949 27.8228 31.7521 26.6137 33.865C26.0777 34.8018 25.6569 35.5859 25.6785 35.6075C25.8501 35.7791 29.461 37.7805 29.7976 37.8906C30.0986 37.9891 30.4189 38.0187 30.8623 37.989C31.9861 37.9138 32.8272 37.3551 33.3185 36.3572C33.5792 35.8277 33.6077 35.6938 33.6038 35.0192C33.5988 34.1672 33.4294 33.6873 32.9349 33.1238C32.6061 32.7493 32.5684 32.7342 33.9094 33.5116C35.3094 34.3234 36.1323 34.4133 37.2272 33.8743C38.2483 33.3717 38.8765 32.3853 38.881 31.278C38.884 30.5138 38.6762 29.8832 38.2614 29.3987C38.0899 29.1983 37.969 29.0344 37.9927 29.0344C38.0165 29.0344 38.3065 29.1883 38.6374 29.3763C39.48 29.8552 39.8091 29.9424 40.5924 29.8944C41.4074 29.8445 41.9831 29.5938 42.5235 29.0538C43.1078 28.4698 43.3694 27.8245 43.3694 26.9668C43.3694 25.7458 42.8512 24.9215 41.6421 24.2189C41.2641 23.9993 40.9548 23.8083 40.9548 23.7946C40.9548 23.7808 41.1032 23.8105 41.2847 23.8607C42.4403 24.1797 43.899 23.453 44.5367 22.2406C44.7546 21.8263 44.7811 21.6846 44.7803 20.9399C44.7795 20.232 44.7463 20.0366 44.5635 19.6641C44.1306 18.7815 43.994 18.6929 35.6797 13.9011C31.3554 11.409 27.7655 9.35737 27.702 9.34206C27.6385 9.32666 25.7344 10.3828 23.4706 11.6889C18.6086 14.4944 18.4704 14.5541 16.8471 14.5514C15.9019 14.5499 15.6512 14.5176 15.063 14.322C13.06 13.6554 11.5256 11.9826 11.08 9.97968C10.9691 9.48134 10.9418 9.06474 10.9745 8.37081C11.0466 6.84164 11.5325 5.71052 12.6008 4.58503C13.0243 4.13868 13.1246 3.98454 13.0407 3.90896C12.9808 3.8552 12.2192 3.40279 11.3481 2.90374C9.54102 1.86825 9.22806 1.77948 8.62361 2.13071ZM6.88408 16.6739C6.42418 16.8428 5.83179 17.2665 5.57206 17.6122C5.14886 18.1756 1.94676 23.8034 1.83089 24.1873C1.39501 25.6319 2.21168 27.273 3.63087 27.8044C4.19572 28.0159 5.12536 28.0347 5.67949 27.8457C5.89373 27.7727 6.27892 27.5541 6.53531 27.3599L7.00162 27.0069L6.93124 27.3388C6.6489 28.6712 7.33658 30.0795 8.56413 30.6823C8.9949 30.8939 9.16524 30.9261 9.8524 30.9261C10.5479 30.9261 10.7031 30.8959 11.1282 30.678C11.3943 30.5416 11.7393 30.3075 11.8949 30.1579L12.1776 29.8859L12.0826 30.23C11.9401 30.7459 12.0355 31.6583 12.2896 32.2101C12.8886 33.5113 14.404 34.2239 15.7437 33.8344C16.3374 33.6617 16.5929 33.5169 17.034 33.1029L17.353 32.8036L17.2278 33.2726C16.9726 34.2299 17.3011 35.3156 18.0738 36.0682C19.2413 37.2053 21.0992 37.1751 22.2358 36.0006C22.4835 35.7447 23.0906 34.7946 23.8426 33.4863C25.3604 30.8457 25.4017 30.7523 25.4026 29.9666C25.4038 28.748 24.8117 27.7889 23.7291 27.256C23.2096 27.0002 23.0601 26.9672 22.436 26.9705C21.6708 26.9745 21.1741 27.1404 20.5873 27.5879L20.2773 27.8244L20.6958 27.0155C21.101 26.2325 21.1144 26.1821 21.1144 25.4429C21.1144 24.8039 21.0771 24.6002 20.8861 24.1953C20.5971 23.5826 20.0516 23.0378 19.4131 22.7243C18.9815 22.5124 18.8145 22.4805 18.1669 22.4862C17.3227 22.4937 16.829 22.6651 16.2909 23.1375L15.9727 23.4169L16.4261 22.5369C16.8586 21.6977 16.8795 21.625 16.8795 20.9678C16.8795 20.4127 16.8351 20.1815 16.6513 19.78C16.3474 19.1161 15.8229 18.5645 15.2009 18.2542C14.7624 18.0355 14.5873 17.9996 13.9437 17.9963C13.3171 17.993 13.1173 18.0293 12.7119 18.2203C12.025 18.5438 11.7135 18.8376 11.2375 19.611L10.8202 20.2891V19.4927C10.8202 18.7985 10.7886 18.6319 10.5739 18.1945C10.2653 17.5663 9.60349 16.9603 8.96499 16.7214C8.39793 16.5092 7.39465 16.4863 6.88408 16.6739Z" fill="#EF8A08" />
                </svg>
                <h4 className='mt-3 font-semibold text-sm xl:text-base'>Partners</h4>
                <p className='text-sm mt-1'>ayaalaa74@gmail.com</p>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-center justify-center'>
                <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20 0.0305463C14.8621 0.348376 10.1984 3.54029 7.99377 8.24776C7.40628 9.50215 6.9914 10.8488 6.81761 12.0652C6.77125 12.3899 6.71584 12.7654 6.69459 12.8997L6.65586 13.144L5.96062 13.1891C4.39957 13.2901 2.88535 14.0986 1.96587 15.3217C1.53037 15.9011 1.2977 16.348 1.05583 17.07C0.879045 17.5977 0.873535 17.6979 0.873535 20.369V23.1239L1.09518 23.7536C1.71974 25.5279 3.23081 26.9396 4.97069 27.3744C5.63452 27.5403 6.97471 27.6328 7.70341 27.5632C8.36913 27.4995 8.70971 27.347 8.97236 26.9947C9.13702 26.7739 9.13828 26.7303 9.18165 19.8714C9.22833 12.4701 9.22101 12.6091 9.64769 11.0883C9.99827 9.83887 10.7133 8.38872 11.4965 7.3385C13.2868 4.93786 15.9039 3.3066 18.898 2.72493C19.9086 2.52863 22.012 2.53005 23.0697 2.72785C27.5505 3.56563 31.1152 6.81949 32.3538 11.2024C32.7406 12.5715 32.7399 12.5561 32.786 19.8714C32.829 26.6786 32.8319 26.7755 32.9917 26.9947C33.0808 27.1168 33.311 27.2993 33.5033 27.4002C33.8396 27.5766 33.9037 27.5821 35.1909 27.5449C36.7281 27.5004 37.1695 27.4078 38.1286 26.9283C39.3696 26.3079 40.3894 25.1277 40.872 23.7536L41.0931 23.1239L41.1184 20.6122C41.1397 18.4903 41.1233 18.0077 41.0122 17.5031C40.4859 15.112 38.4375 13.3465 36.0071 13.1891L35.3118 13.144L35.2727 12.8997C35.2512 12.7654 35.1953 12.3821 35.1483 12.048C34.9819 10.8646 34.4176 9.09939 33.8341 7.93677C32.471 5.2209 30.1176 2.85851 27.4391 1.51721C25.1335 0.362701 22.651 -0.133406 20 0.0305463ZM6.15543 29.214C6.32859 30.1806 6.89443 31.519 7.52844 32.4615C7.97157 33.1204 9.16434 34.304 9.80708 34.7225C11.3176 35.7063 12.7973 36.1503 14.5657 36.1503H15.5529V35.4531V34.7559L14.51 34.7117C13.2574 34.6588 12.4932 34.4772 11.4993 33.9965C9.9656 33.2548 8.83494 32.0993 8.11482 30.5377C7.97118 30.2264 7.79983 29.7645 7.73395 29.5114C7.66807 29.2583 7.60282 29.0415 7.58904 29.0297C7.57519 29.0178 7.23548 28.9903 6.83406 28.9684L6.10426 28.9286L6.15543 29.214ZM18.78 32.9945C18.0657 33.221 17.4526 33.7521 17.136 34.4187C16.8591 35.0015 16.8506 35.9252 17.1169 36.4759C17.3993 37.0597 17.793 37.4576 18.3685 37.7409L18.8949 38H20.984H23.073L23.5994 37.7409C24.1747 37.4576 24.5685 37.0596 24.8508 36.4759C25.1171 35.9252 25.1085 35.0015 24.8317 34.4187C24.5842 33.8976 24.1529 33.4533 23.6206 33.1712L23.2271 32.9626L21.1019 32.9473C19.9331 32.939 18.8882 32.9602 18.78 32.9945Z" fill="#EF8A08" />
                </svg>

                <h4 className='mt-3 font-semibold text-sm xl:text-base'>Customer Support</h4>
                <p className='text-sm mt-1'>ayaalaa74@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* images */}
        <div data-aos="zoom-in-up"  data-aos-duration="1000" className='my-10 md:mt-5'>
          <div className='flex items-center justify-center'>
            <div className={styleImage}>
              <Image priority fill sizes='(min-width: 992px) , 100vw' alt='image1' src={img1} />
            </div>
            <div className={`${styleImage} mx-7 lg:mx-12`}>
              <Image priority fill sizes='(min-width: 992px) , 100vw' alt='image2' src={img2} />
            </div>
            <div className={styleImage}>
              <Image priority fill sizes='(min-width: 992px) , 100vw' alt='image3' src={img3} />
            </div>
          </div>

          <div className='flex -mt-3 lg:-mt-5 ms-8 lg:ms-12 items-center justify-center'>
            <div className={styleImage}>
              <Image priority fill sizes='(min-width: 992px) , 100vw' alt='image4' src={img4} />
            </div>
            <div className={`${styleImage} mx-7 lg:mx-12`}>
              <Image priority fill sizes='(min-width: 992px) , 100vw' alt='image5' src={img5} />
            </div>
          </div>

          <div className='flex ms-1 -mt-3 lg:-mt-5  items-center justify-center'>
            <div className={styleImage}>
              <Image priority fill sizes='(min-width: 992px) , 100vw' alt='image6' src={img6} />
            </div>
          </div>
        </div>
      </div>

      {/* <div data-aos="fade-up" className='my-8'>
        <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-center'>
          <span className='capitalize font-bold text-orange-600 bg-white px-8 py-1.5 rounded-full'>our offices</span>
        </div>
        <h3 data-aos="fade-up" data-aos-duration="1000" className='text-white text-center capitalize mt-7 text-xl md:text-3xl'>discover our global network of offices</h3>
        <p data-aos="fade-up" data-aos-duration="1000" className='text-white text-center capitalize text-xs md:text-sm mt-5'>experience our expansive network of offices across the world, connecting you to our exceptional services wherever you are.</p>
        <div data-aos="fade-up" className='bg-white p-7 mt-7  grid md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-xl'>
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
      </div> */}

      <div data-aos="fade-up" className="my-16">
        <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-center'>
          <span className='capitalize font-bold text-orange-600 bg-white px-8 py-1.5 rounded-full'>FAQs</span>
        </div>
        <h3 data-aos="fade-up" data-aos-duration="1000" className='text-white text-center capitalize mt-7 text-xl md:text-3xl'>answers to some of your questions</h3>
        <p data-aos="fade-up" data-aos-duration="1000" className='text-white text-center capitalize text-xs md:text-sm mt-5'>Don’t find the answers you were looking for? Contact us at <span className='text-amber-600 mt-2 inline-block'>futuresphere@gmail.com</span></p>
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-white p-5 md:p-7 rounded-xl">
            <h2 className='text-amber-600 font-semibold'>What is included in the startup website template?</h2>
            <p className='mt-7 text-xs md:text-sm'>Our startup website template includes a range of essential features and components, such as responsive design, customizable layouts, pre-built sections, integration with popular CMS platforms, and access to a library of high-quality images and icons.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-white p-5 md:p-7 rounded-xl">
            <h2 className='text-amber-600 font-semibold'>Can I customize the template to match my brand&apos;s identity?</h2>
            <p className='mt-7 text-xs md:text-sm'>Absolutely! Our startup website template provides easy customization options, allowing you to personalize the colors, fonts, logo, and overall look and feel to align with your brand identity. You can create a unique and captivating online presence that reflects your startup&apos;s vision.</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="grid md:grid-cols-2 gap-10 mt-10">
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-white p-5 md:p-7 rounded-xl">
            <h2 className='text-amber-600 font-semibold'>Is the template optimized for search engines (SEO)?</h2>
            <p className='mt-7 text-xs md:text-sm'>Yes, our startup website template is designed with SEO best practices in mind. It includes clean code structure, fast loading times, meta tag optimization, and schema markup implementation. These elements contribute to better search engine visibility, helping your website rank higher in search results and attract more organic traffic.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-white p-5 md:p-7 rounded-xl">
            <h2 className='text-amber-600 font-semibold'>Do you offer support and updates for the template?</h2>
            <p className='mt-7 text-xs md:text-sm'>Absolutely! We provide dedicated customer support to address any queries or concerns you may have while working with our startup website template. Additionally, we regularly release updates to ensure compatibility with the latest web technologies, security patches, and feature enhancements, ensuring your website stays up-to-date and optimized.</p>
          </div>
        </div>
      </div>

    </main>

  )
}

export default page
