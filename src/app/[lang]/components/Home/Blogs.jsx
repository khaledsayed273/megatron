import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import API from '@/api/API'

async function getLatestBlogs(lang,) {
    try {
        const res = await API.get(`/blogs/latest/blogs`, {
            headers: { "X-localization": lang }
        })
        return res.data
    } catch (e) {
        console.log(e);
    }
}


export const revalidate = +process.env.time;

async function Blogs() {

    const latestBlog = await getLatestBlogs()

    return (
        <div >
            {/* <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-center'>
                <span className='btnOrange text-white flex mx-auto font-bold px-12 py-2 rounded-full capitalize'>blogs</span>
            </div> */}
            <h2 data-aos="fade-up" data-aos-duration="1000" className='capitalize text-center text-white my-10 text-xl lg:text-4xl'>from our latest blogs</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 xl:gap-9">
                {latestBlog?.status && (
                    latestBlog?.data?.map((item) => (
                        <div data-aos="fade-up" data-aos-duration="1000" key={item.id} className='bg-white relative p-5 rounded-xl mx-auto w-11/12 sm:w-2/3 md:w-full'>
                            <div data-aos="zoom-in" data-aos-duration="1000" className='relative h-[230px] w-full overflow-hidden rounded-xl mb-7'>
                                <Image sizes='(max-width:992px) , 100vw' fill src={item.image} alt={item.title} />
                            </div>
                            <span data-aos="fade-up" data-aos-duration="1000" className='btnOrange capitalize text-white p-2 px-3 my-5 rounded-full' >
                                {item.category.name}
                            </span>
                            <h2 data-aos="fade-up" data-aos-duration="1000" className='mt-7  font-bold lg:text-base '>{item.title}</h2>
                            <p data-aos="fade-up" data-aos-duration="1000" className='mt-5 text-sm overflow-auto max-h-[130px] mb-10'>{item.short_description}</p>
                            <Link className='flex justify-end underline mt-3 bottom-4 right-4 absolute  decoration-amber-600 text-amber-600 font-bold capitalize' href={`/blogs/${item.slug}`}>read more</Link>
                        </div>
                    ))
                )}
            </div>

            <div data-aos-duration="1000" data-aos="fade-up" className='flex justify-center mt-7'>
                <Link className='text-white btnOrange py-2 px-9 capitalize font-bold rounded-full' href={"/blogs"}>view all</Link>
            </div>
        </div>
    )
}

export default Blogs
