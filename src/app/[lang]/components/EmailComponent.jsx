import React from 'react'
import img from "../../../../public/images/EmailBackground.jpg"
function EmailComponent() {
    return (
        <div className='container mx-auto p-5 my-7'>
            <div style={{ backgroundImage: `url(${img.src})` }} className='h-[400px] relative rounded-2xl p-5 bg-cover bg-center'>
                <div className='flex justify-center items-center z-50 flex-col absolute left-0 top-0 w-full h-full px-5'>
                    <svg width="59" height="57" viewBox="0 0 59 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_830_229)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M53.3331 27.2626V39.8574C53.3331 41.5599 52.6412 43.1036 51.5269 44.2179C50.4126 45.3322 48.8689 46.0241 47.1665 46.0241H9.83316C8.1307 46.0241 6.58698 45.3322 5.47267 44.2179C4.35837 43.1036 3.6665 41.5599 3.6665 39.8574V16.5241C3.6665 14.8142 4.36444 13.2644 5.4873 12.149C6.60047 11.0433 8.13818 10.3574 9.83316 10.3574H36.428C36.0474 11.3072 35.7756 12.3124 35.6281 13.3574H9.83316C9.56638 13.3574 9.30752 13.3903 9.06028 13.4522L27.9462 30.3584L27.9475 30.3596C28.2627 30.6385 28.7364 30.6387 29.0517 30.3599L29.0534 30.3584L37.7779 22.5442C38.3469 23.3722 39.0093 24.131 39.7499 24.8054L37.6477 26.6882L50.2319 40.6561C50.298 40.4011 50.3331 40.1335 50.3331 39.8574V28.0625C51.3782 27.915 52.3833 27.6432 53.3331 27.2626ZM35.413 28.6898L48.1788 42.8592C47.8611 42.9663 47.5208 43.0241 47.1665 43.0241H9.83316C9.51578 43.0241 9.20962 42.9777 8.92086 42.8911L22.3957 29.4162L25.9491 32.5971L25.9531 32.6006C27.4055 33.8916 29.5941 33.8916 31.0465 32.6006L31.0507 32.5969L35.413 28.6898ZM20.1571 27.4122L6.79954 40.7697C6.71293 40.481 6.6665 40.1748 6.6665 39.8574V16.5241C6.6665 16.1617 6.72704 15.8139 6.83882 15.49L20.1571 27.4122Z" fill="white" />
                            <path d="M48.5 23.6907C53.1944 23.6907 57 19.8852 57 15.1907C57 10.4963 53.1944 6.69073 48.5 6.69073C43.8056 6.69073 40 10.4963 40 15.1907C40 19.8852 43.8056 23.6907 48.5 23.6907Z" fill="#EF8A08" stroke="white" strokeWidth="3" />
                        </g>
                        <defs>
                            <clipPath id="clip0_830_229">
                                <rect width="58" height="56" fill="white" transform="translate(0.5 0.190735)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div>
                        <h1 className='text-center text-white text-xl md:text-3xl my-3'>Do cool things with us.</h1>
                        <h3 className='text-center text-white text-xs md:text-sm my-3'>Stay in the loop with updates from our team and community. Once a month.</h3>
                    </div>

                    <div className='flex items-center flex-col md:flex-row mt-7  md:bg-white md:rounded-xl'>
                        <input placeholder='Enter your email' className='py-1.5 px-3 rounded-xl md:rounded-e-none md:rounded-s-xl outline-none border-0' type="email" name="email" />
                        <button className='btnOrange px-6 py-1.5 mt-3 md:mt-0 text-white rounded-xl font-semibold capitalize'>Subscribe to newsletter</button>
                    </div>
                </div>
                <div className="bg-black opacity-75 absolute left-0 top-0 w-full h-full rounded-2xl">
                </div>
            </div>
        </div>
    )
}

export default EmailComponent
