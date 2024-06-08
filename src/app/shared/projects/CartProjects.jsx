import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CartProjects({ data }) {
    const convertImage = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

    const toBase64 = (str) =>
        typeof window === 'undefined'
            ? Buffer.from(str).toString('base64')
            : window.btoa(str);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16'>
            {data.map((item) => (
                <div data-aos="fade-up" data-aos-duration="1000" key={item.id} className='bg-white p-2 md:p-4 relative rounded-xl mx-auto w-full sm:w-2/3 md:w-full'>
                    <div className='relative h-[230px] w-full overflow-hidden rounded-xl'>
                        <Image blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            convertImage(700, 475)
                        )}`}
                            placeholder='blur' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw" fill src={item.image} alt={item.name} />
                    </div>
                    <div className='flex flex-col items-center justify-center pt-3'>
                        <h3 className='capitalize font-bold p-2 px-3 text-lg md:text-xl mb-2' >
                            {item.name}
                        </h3>
                        <Link href={item.slug ? `/projects/${item.slug}` : item.link} target={`${item.slug === undefined  ? "_blank" : "_self"}`} className='btnOrange flex items-center mb-2 capitalize text-white py-1.5 px-5  rounded-full' >
                            <span className='me-3 font-bold'>
                                visit it
                            </span>
                            <svg width="15" height="15" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 11H20M20 11L11 2M20 11L11 20" stroke="white" strokeWidth="3" />
                            </svg>
                        </Link>
                    </div>
                    {/* <p className='mt-5 text-sm overflow-auto max-h-[130px] mb-10'>{item.services[0].short_descrption}</p> */}
                    {/* <Link className='flex justify-end underline mt-3 bottom-4 right-4 absolute  decoration-orange text-orange font-bold capitalize' href={`/projects/${item.slug}`}>read more</Link> */}
                </div>
            ))}
        </div>
    )
}

export default CartProjects
