import API from '@/api/API'
import Link from 'next/link'
import React from 'react'

async function getData(lang) {
    const res = await API.get("/services", {
        headers: { "X-localization": lang }
    })
    return res
}

async function page({ params: { lang } }) {

    const data = await getData(lang)

    return (
        <div className='container mx-auto px-3'>
            <h1 data-aos-duration="1000" data-aos="fade-right" className='text-center text-white text-xl md:text-4xl capitalize mb-3 mt-7'>Discover the Tools that Drive Success</h1>
            <p data-aos-duration="1000" data-aos="fade-right" className='text-center text-white text-xs md:text-sm mt-7'>Explore our captivating blog filled with thought-provoking articles and inspiring content that will ignite your creativity and expand your knowledge.</p>
            {data.status ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
                    {data?.data.data.map((item) => (
                        <div data-aos-duration="1000" data-aos="fade-right" key={item.id} className="bg-white p-5 rounded-lg">
                            <div className='flex flex-col justify-center items-center'>
                                {item.image ? (<div dangerouslySetInnerHTML={{ __html: item.image }}></div>) : (
                                    <svg width="40" height="35" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.5543 0.0878996C17.8057 0.209272 17.0555 0.620871 16.4766 1.22782C15.6265 2.11904 15.3552 2.97292 15.354 4.76202L15.3533 5.66845L9.95154 5.69939C3.93574 5.73389 4.23832 5.70473 2.94929 6.3749C1.71903 7.01457 0.610847 8.48233 0.333602 9.83975C0.27794 10.1122 0.237305 11.3688 0.237305 12.8187V15.3266L11.508 19.0831C17.7068 21.1492 22.8784 22.8396 23.0002 22.8396C23.122 22.8396 28.2935 21.1492 34.4924 19.0831L45.7631 15.3266V12.8187C45.7631 11.3688 45.7224 10.1122 45.6668 9.83975C45.3876 8.47282 44.2911 7.02071 43.0511 6.37525C41.7627 5.70473 42.0651 5.73389 36.0488 5.69939L30.6471 5.66845L30.6464 4.76202C30.6451 2.97292 30.3738 2.11904 29.5238 1.22782C28.9234 0.598464 28.1919 0.210784 27.3571 0.0798081C26.6496 -0.0312498 19.2469 -0.0244032 18.5543 0.0878996ZM26.7347 4.78932V5.6785H23.0002H19.2656V4.78932V3.90015H23.0002H26.7347V4.78932ZM0.237305 25.8584C0.237305 30.929 0.268959 33.5669 0.333602 33.8832C0.386508 34.1423 0.593064 34.6892 0.792683 35.0983C1.4312 36.4076 2.60233 37.3756 4.10522 37.8364C4.61587 37.993 5.42466 38 23.0002 38C40.5757 38 41.3845 37.993 41.8951 37.8364C43.3369 37.3943 44.5545 36.4102 45.1628 35.1954C45.7862 33.9502 45.7631 34.3089 45.7631 25.8886C45.7631 21.7174 45.7335 18.3048 45.6974 18.3048C45.6613 18.3048 40.7087 19.9453 34.6918 21.9504L23.7517 25.596H23.0002H22.2486L11.3086 21.9504C5.29164 19.9453 0.339026 18.3048 0.302926 18.3048C0.266825 18.3048 0.237305 21.7039 0.237305 25.8584Z" fill="#EF8A08" />
                                    </svg>
                                )}
                                <h4 className='mt-3 font-semibold capitalize'  >{item.name}</h4>
                            </div>
                            <p className='mt-3 text-xs md:text-sm text-black/85'>{item.short_descrption}</p>
                            <Link className='ms-auto flex justify-end font-semibold capitalize mt-5 text-amber-600 underline decoration-amber-600' href={`service/${item.slug}`}>read more</Link>
                        </div>
                    ))}
                </div>
            ) : <h1 className='text-center mt-16 font-bold text-orange-600'>Something wrong is happend please try again later</h1>
            }

        </div>
    )
}

export default page
