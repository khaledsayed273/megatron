import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='container mx-auto px-3'>
            <h1 className='text-center text-white text-xl md:text-4xl capitalize mb-3 mt-7'>Discover the Tools that Drive Success</h1>
            <p className='text-center text-white text-xs md:text-sm mt-7'>Explore our captivating blog filled with thought-provoking articles and inspiring content that will ignite your creativity and expand your knowledge.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
                <div className="bg-white p-5 rounded-lg">
                    <div className='flex flex-col justify-center items-center'>
                        <svg width="40" height="35" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.5543 0.0878996C17.8057 0.209272 17.0555 0.620871 16.4766 1.22782C15.6265 2.11904 15.3552 2.97292 15.354 4.76202L15.3533 5.66845L9.95154 5.69939C3.93574 5.73389 4.23832 5.70473 2.94929 6.3749C1.71903 7.01457 0.610847 8.48233 0.333602 9.83975C0.27794 10.1122 0.237305 11.3688 0.237305 12.8187V15.3266L11.508 19.0831C17.7068 21.1492 22.8784 22.8396 23.0002 22.8396C23.122 22.8396 28.2935 21.1492 34.4924 19.0831L45.7631 15.3266V12.8187C45.7631 11.3688 45.7224 10.1122 45.6668 9.83975C45.3876 8.47282 44.2911 7.02071 43.0511 6.37525C41.7627 5.70473 42.0651 5.73389 36.0488 5.69939L30.6471 5.66845L30.6464 4.76202C30.6451 2.97292 30.3738 2.11904 29.5238 1.22782C28.9234 0.598464 28.1919 0.210784 27.3571 0.0798081C26.6496 -0.0312498 19.2469 -0.0244032 18.5543 0.0878996ZM26.7347 4.78932V5.6785H23.0002H19.2656V4.78932V3.90015H23.0002H26.7347V4.78932ZM0.237305 25.8584C0.237305 30.929 0.268959 33.5669 0.333602 33.8832C0.386508 34.1423 0.593064 34.6892 0.792683 35.0983C1.4312 36.4076 2.60233 37.3756 4.10522 37.8364C4.61587 37.993 5.42466 38 23.0002 38C40.5757 38 41.3845 37.993 41.8951 37.8364C43.3369 37.3943 44.5545 36.4102 45.1628 35.1954C45.7862 33.9502 45.7631 34.3089 45.7631 25.8886C45.7631 21.7174 45.7335 18.3048 45.6974 18.3048C45.6613 18.3048 40.7087 19.9453 34.6918 21.9504L23.7517 25.596H23.0002H22.2486L11.3086 21.9504C5.29164 19.9453 0.339026 18.3048 0.302926 18.3048C0.266825 18.3048 0.237305 21.7039 0.237305 25.8584Z" fill="#EF8A08" />
                        </svg>
                        <h4 className='mt-3 font-semibold'>Sales and Business</h4>
                    </div>
                    <p className='mt-3 text-xs md:text-sm text-black/85'>Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.</p>
                    <Link className='ms-auto flex justify-end font-semibold capitalize mt-5 text-amber-600 underline decoration-amber-600' href={"service/1"}>read more</Link>
                </div>
                <div className="bg-white p-5 rounded-lg">
                    <div className='flex flex-col justify-center items-center'>
                        <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20.0005 0.0305463C14.8626 0.348376 10.1989 3.54029 7.99426 8.24776C7.40677 9.50215 6.99189 10.8488 6.8181 12.0652C6.77174 12.3899 6.71633 12.7654 6.69507 12.8997L6.65635 13.144L5.96111 13.1891C4.40006 13.2901 2.88584 14.0986 1.96636 15.3217C1.53086 15.9011 1.29819 16.348 1.05631 17.07C0.879533 17.5977 0.874023 17.6979 0.874023 20.369V23.1239L1.09567 23.7536C1.72023 25.5279 3.2313 26.9396 4.97118 27.3744C5.63501 27.5403 6.9752 27.6328 7.7039 27.5632C8.36962 27.4995 8.7102 27.347 8.97285 26.9947C9.13751 26.7739 9.13877 26.7303 9.18214 19.8714C9.22882 12.4701 9.2215 12.6091 9.64818 11.0883C9.99875 9.83887 10.7138 8.38872 11.497 7.3385C13.2872 4.93786 15.9043 3.3066 18.8985 2.72493C19.9091 2.52863 22.0124 2.53005 23.0701 2.72785C27.551 3.56563 31.1157 6.81949 32.3543 11.2024C32.7411 12.5715 32.7404 12.5561 32.7865 19.8714C32.8295 26.6786 32.8323 26.7755 32.9922 26.9947C33.0813 27.1168 33.3115 27.2993 33.5038 27.4002C33.8401 27.5766 33.9042 27.5821 35.1914 27.5449C36.7285 27.5004 37.17 27.4078 38.1291 26.9283C39.3701 26.3079 40.3899 25.1277 40.8725 23.7536L41.0936 23.1239L41.1189 20.6122C41.1402 18.4903 41.1238 18.0077 41.0127 17.5031C40.4864 15.112 38.438 13.3465 36.0076 13.1891L35.3123 13.144L35.2732 12.8997C35.2517 12.7654 35.1958 12.3821 35.1488 12.048C34.9824 10.8646 34.4181 9.09939 33.8346 7.93677C32.4715 5.2209 30.118 2.85851 27.4396 1.51721C25.134 0.362701 22.6515 -0.133406 20.0005 0.0305463ZM6.15591 29.214C6.32907 30.1806 6.89492 31.519 7.52892 32.4615C7.97206 33.1204 9.16483 34.304 9.80757 34.7225C11.3181 35.7063 12.7978 36.1503 14.5662 36.1503H15.5534V35.4531V34.7559L14.5105 34.7117C13.2579 34.6588 12.4937 34.4772 11.4998 33.9965C9.96609 33.2548 8.83543 32.0993 8.11531 30.5377C7.97167 30.2264 7.80032 29.7645 7.73444 29.5114C7.66856 29.2583 7.6033 29.0415 7.58953 29.0297C7.57568 29.0178 7.23597 28.9903 6.83455 28.9684L6.10475 28.9286L6.15591 29.214ZM18.7805 32.9945C18.0662 33.221 17.4531 33.7521 17.1365 34.4187C16.8596 35.0015 16.8511 35.9252 17.1174 36.4759C17.3997 37.0597 17.7935 37.4576 18.369 37.7409L18.8954 38H20.9845H23.0735L23.5999 37.7409C24.1751 37.4576 24.569 37.0596 24.8513 36.4759C25.1176 35.9252 25.109 35.0015 24.8322 34.4187C24.5847 33.8976 24.1533 33.4533 23.6211 33.1712L23.2276 32.9626L21.1024 32.9473C19.9336 32.939 18.8887 32.9602 18.7805 32.9945Z" fill="#EF8A08" />
                        </svg>

                        <h4 className='mt-3 font-semibold'>Customer Support</h4>
                    </div>
                    <p className='mt-3 text-xs md:text-sm text-black/85'>Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.</p>
                    <Link className='ms-auto flex justify-end font-semibold capitalize mt-5 text-amber-600 underline decoration-amber-600' href={"service/2"}>read more</Link>

                </div>
            </div>
        </div>
    )
}

export default page
