import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from "../../../../../public/images/imageBlogs.jpg"

function Blogs() {

    const blogs = [
        {
            id: 1,
            image: img,
            head: "healthcare",
            title: "the future of ai in healthcare: transforming patient car",
            discreption: "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare."
        },
        {
            id: 2,
            image: img,
            head: "healthcare",
            title: "the future of ai in healthcare: transforming patient car",
            discreption: "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare."
        },
        {
            id: 3,
            image: img,
            head: "healthcare",
            title: "the future of ai in healthcare: transforming patient car",
            discreption: "Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare."
        },
    ]

    return (
        <div >
            <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-center'>
                <span className='btnOrange text-white flex mx-auto font-bold px-12 py-2 rounded-full capitalize'>blogs</span>
            </div>
            <h1 data-aos="fade-up" data-aos-duration="1000" className='capitalize text-center text-white my-10 text-xl lg:text-4xl'>from our latest blogs</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 xl:gap-9">
                {blogs.map((item) => (
                    <div data-aos-duration="1000" data-aos="fade-up" key={item.id} className='bg-white p-6 rounded-xl'>
                        <div data-aos="zoom-in" data-aos-duration="1000" className='relative overflow-hidden rounded-xl w-full h-[200px]'>
                            <Image sizes='(max-width:992px) , 100vw' fill src={item.image} alt='image' />
                        </div>
                        <h1 data-aos="fade-up" data-aos-duration="1000" className='text-white btnOrange my-4 inline-block px-3 py-1 rounded-full capitalize '>{item.head}</h1>
                        <h2 data-aos="fade-up" data-aos-duration="1000" className='capitalize font-semibold text-sm md:text-lg'>{item.title}</h2>
                        <p data-aos="fade-up" data-aos-duration="1000" className='mt-3 font-medium text-sm leading-6'>{item.discreption}</p>
                        <div data-aos="fade-up" data-aos-duration="1000" className='flex justify-end'>
                            <Link className='capitalize font-medium mt-3  border-black/70 border-b-2' href={`/blogs/${item.id}`}>read more</Link>
                        </div>
                    </div>
                ))}
            </div>

            <div data-aos-duration="1000" data-aos="fade-up" className='flex justify-center mt-7'>
                <Link className='text-white btnOrange py-2 px-9 capitalize font-bold rounded-full' href={"/blogs"}>view all</Link>
            </div>
        </div>
    )
}

export default Blogs
