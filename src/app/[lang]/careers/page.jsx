import Image from 'next/image'
import React from 'react'
import img1 from "../../../../public/images/careers/Screenshot 2024-02-29 012445-fotor-bg-remover-2024022913527.png"
import img2 from "../../../../public/images/about/firstImageAboutUs.jpg"
import icon1 from "../../../../public/images/careers/Icon.png"
import firstImageAboutUs from "../../../../public/images/about/firstImageAboutUs.jpg"
import secoundImageAboutUs from "../../../../public/images/about/secoundImageAboutUs.jpg"
import imageCover from "../../../../public/images/about/cover.jpg"
import Link from 'next/link'

function page() {

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
        <main className='container mx-auto px-3 mt-7'>
            <h1 className='text-center text-white text-xl md:text-4xl capitalize mb-3'>join our team and shape the future</h1>
            <p className='text-center text-white text-xs md:text-sm mt-7'>Looking for an opportunity to showcase your web design skills? Join our team of talented designers, both remote and on-site, and bring your creativity to life. Collaborate with a dynamic group, create stunning websites, and make a lasting impact in the world of design, no matter where you are.</p>
            <div className="relative mx-auto mt-10 w-full sm:w-4/6 md:w-1/2 xl:w-2/5  h-[500px]">
                <Image priority fill sizes='(min-width:992px) , 100vw' src={img1} alt='image' />
                <div className='absolute  right-0 sm:right-10 md:-right-5 lg:right-5 xl:right-10 top-8 flex items-center'>
                    <div className='relative w-[35px] h-[40px] md:w-[40px] md:h-[50px] me-3 md:me-5'>
                        <Image priority sizes='(min-width:992px) , 100vw' fill src={icon1} alt='icon1' />
                    </div>
                    <span className='text-amber-600'>
                        <div className='text-center text-xl lg:text-3xl font-bold'>30+</div>
                        <div className='text-xs md:text-sm'>Talented Team </div>
                        <div className='text-xs md:text-sm text-center'>Members</div>
                    </span>
                </div>
                <div className='absolute -left-1 sm:-left-2 md:-left-10 lg:left-0 xl:left-2 top-3 flex items-center'>
                    <svg className='w-[20px] sm:w-[35px] md:w-[40px]' viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M27.5274 0.244805C27.1715 0.372325 26.5511 0.645128 26.1486 0.850995C23.6907 2.10867 20.9916 5.16856 19.135 8.80217C18.2872 10.4615 17.6037 12.1282 17.7252 12.2404C18.1215 12.6069 25.698 13.6505 27.9626 13.6505H28.3508V6.82749C28.3508 3.07483 28.3111 0.00635247 28.2626 0.00870523C28.2141 0.011058 27.8832 0.117285 27.5274 0.244805ZM31.88 6.84126V13.6826L33.1446 13.6033C34.932 13.4912 36.679 13.3175 38.1148 13.1089C39.8528 12.8566 42.3901 12.3573 42.5057 12.245C42.7549 12.0026 40.9181 8.24821 39.4976 6.09649C38.3591 4.37179 36.2965 2.21783 34.9639 1.36166C34.1413 0.83335 32.8851 0.250217 32.2035 0.0805822L31.88 0V6.84126ZM18.5264 2.11208C16.2486 3.06942 14.1773 4.24474 12.236 5.68146C10.9657 6.62151 8.78099 8.52936 8.65771 8.80629C8.60983 8.91392 8.99521 9.1532 9.9115 9.5847C11.591 10.3756 14.1327 11.3332 14.2338 11.213C14.2762 11.1626 14.5137 10.6184 14.7615 10.0037C15.8763 7.23746 17.5199 4.38214 19.1474 2.38406C19.4318 2.03467 19.6464 1.73069 19.6241 1.70834C19.6018 1.68599 19.1079 1.86774 18.5264 2.11208ZM40.5852 1.75563C40.5852 1.81186 40.6633 1.92268 40.7587 2.00197C41.0694 2.25971 42.4255 4.15393 43.1068 5.28149C43.9679 6.70691 44.7191 8.20033 45.423 9.88609C45.9268 11.0929 46.0169 11.2354 46.2569 11.2058C46.8537 11.1321 51.6432 9.0805 51.6432 8.89851C51.6432 8.8744 51.2595 8.4816 50.7903 8.02564C48.7592 6.05131 46.2488 4.31133 43.4674 2.95013C41.3942 1.93562 40.5852 1.60023 40.5852 1.75563ZM5.43677 12.6212C3.17059 15.7792 1.47977 19.6151 0.597955 23.5991C0.342327 24.754 0 27.1774 0 27.8319V28.2377H5.58782H11.1756L11.1767 27.326C11.1796 24.5772 11.8726 19.6611 12.7501 16.1627L13.138 14.6163L11.4804 14.0054C10.5687 13.6695 9.01392 13.0021 8.02517 12.5226C7.03653 12.043 6.20636 11.6507 6.18036 11.6507C6.15448 11.6507 5.8198 12.0875 5.43677 12.6212ZM52.1841 12.5282C51.2198 12.9994 49.6791 13.6635 48.7601 14.0038L47.0894 14.6226L47.4781 16.1657C48.2806 19.3516 48.8799 23.3787 49.0162 26.5025L49.0919 28.2377H54.6783H60.2647L60.1852 27.2671C59.8326 22.9609 58.3074 18.2746 56.0237 14.4806C55.368 13.3912 54.1268 11.6469 54.0174 11.661C53.9733 11.6668 53.1483 12.057 52.1841 12.5282ZM16.362 15.9679C15.4739 19.286 14.8483 23.2389 14.6389 26.8554L14.5589 28.2377H21.4549H28.3508V22.6498V17.062H27.4287C25.0143 17.062 18.6107 16.1806 16.6813 15.5827C16.5292 15.5355 16.4531 15.6272 16.362 15.9679ZM42.7027 15.7774C40.4117 16.3458 36.3534 16.8987 33.5563 17.0238L31.88 17.0986V22.6682V28.2377H38.7778H45.6758L45.5965 26.973C45.4852 25.1993 45.3116 23.447 45.1038 22.0028C44.7521 19.5577 43.8476 15.5132 43.6597 15.5457C43.6186 15.5527 43.188 15.6571 42.7027 15.7774ZM0.00235277 32.208C0.00823468 33.3585 0.568663 36.5642 1.06333 38.2783C2.02855 41.6227 4.11969 45.8334 5.91156 48.0411L6.18295 48.3756L8.00282 47.4927C9.0038 47.0072 10.5687 46.335 11.4804 45.999L13.138 45.3881L12.7501 43.8418C11.8726 40.3433 11.1796 35.4272 11.1767 32.6785L11.1756 31.7668H5.58782H0L0.00235277 32.208ZM14.5871 32.155C14.5871 33.7109 15.0338 37.6838 15.4826 40.1191C15.7512 41.5767 16.3934 44.3181 16.4882 44.4115C16.5102 44.4333 17.084 44.3246 17.7634 44.17C20.4039 43.5693 25.3399 42.9424 27.4287 42.9424H28.3508V37.3546V31.7668H21.469H14.5871V32.155ZM31.88 37.3546V42.9424H32.8021C33.8704 42.9424 36.9136 43.2198 38.703 43.4803C39.9888 43.6673 43.2282 44.2923 43.5473 44.4148C43.7698 44.5001 44.0608 43.5235 44.5817 40.9426C45.1237 38.2577 45.4074 36.0458 45.5965 33.0314L45.6758 31.7668H38.7778H31.88V37.3546ZM49.0162 33.502C48.8799 36.6253 48.2806 40.6529 47.4783 43.8377L47.0899 45.3799L48.749 45.9939C49.6615 46.3315 51.2285 47.0037 52.2313 47.4875L54.0546 48.3671L54.3225 48.037C55.3574 46.7624 57.0625 43.8201 57.8886 41.8837C59.0707 39.113 59.9499 35.6115 60.1852 32.7373L60.2647 31.7668H54.6783H49.0919L49.0162 33.502ZM25.2334 46.5322C22.5253 46.7796 17.9841 47.5247 17.7252 47.7641C17.4743 47.9961 19.3128 51.7545 20.7306 53.908C21.9634 55.7808 24.1617 58.0134 25.5867 58.84C26.3343 59.2736 28.0327 60 28.2991 60C28.3275 60 28.3508 56.9296 28.3508 53.177V46.354L27.6156 46.3678C27.2113 46.3755 26.1392 46.4495 25.2334 46.5322ZM31.88 53.177C31.88 56.9296 31.9049 60 31.9354 60C32.2282 60 34.0997 59.1825 34.8068 58.7457C36.1907 57.891 38.3223 55.6933 39.4991 53.908C40.9206 51.7514 42.7543 48.0014 42.5057 47.7595C42.3907 47.6477 39.8749 47.1521 38.0868 46.889C36.7079 46.6861 33.1784 46.3555 32.3799 46.3545L31.88 46.354V53.177ZM12.5461 49.2988C10.373 50.1289 8.57324 51.0084 8.65806 51.1989C8.78605 51.4862 10.9905 53.4033 12.2856 54.3536C14.3056 55.836 17.0207 57.342 19.1456 58.159C19.6443 58.3507 19.801 58.2755 19.4721 58.0025C19.1349 57.7228 17.7755 55.8087 17.0721 54.6235C16.1397 53.0524 15.4996 51.7772 14.8118 50.1212C14.5034 49.3787 14.2076 48.7599 14.1545 48.7463C14.1013 48.7325 13.3776 48.9812 12.5461 49.2988ZM45.8836 48.9884C44.6036 52.3552 42.4388 56.1863 40.842 57.9107C40.6778 58.0879 40.5677 58.2571 40.5971 58.2866C40.6827 58.3722 42.9073 57.3933 44.2899 56.6614C46.6305 55.4226 49.0212 53.7014 50.7849 51.9851C51.257 51.5256 51.6432 51.1301 51.6432 51.106C51.6432 51.0021 49.6898 50.0963 48.1729 49.4967C45.9375 48.6132 46.0194 48.6313 45.8836 48.9884Z" fill="#EF8A08" />
                    </svg>

                    <span className='text-amber-600 ms-2'>
                        <div className='text-xs md:text-sm'>Global Presence </div>
                    </span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 my-20">
                <div className='relative h-[200px] md:h-[300px] w-full xl:w-5/6 mx-auto rounded-ss-[100px]  md:rounded-ss-[200px] rounded-ee-[100px] md:rounded-ee-[200px] overflow-hidden'>
                    <Image priority className='object-none' sizes='(min-width:992px) , 100vw' fill src={img2} alt='img' />
                </div>
                <div>
                    <span className='btnOrange px-5 py-2 text-white capitalize font-bold rounded-full'>perks</span>
                    <h2 className='mt-10 text-xl lg:text-4xl text-white'>Perks That Go Beyond Borders</h2>
                    <p className='text-white mt-10 text-xs md:text-sm leading-7 md:leading-7 lg:leading-7 xl:leading-8'>opportunities, travel adventures, global networking, and competitive compensation.&quot;Experience a world of benefits with our global presence. Enjoy flexible work environments, cultural diversity, professional development opportunities, travel adventures, global networking, and competitive compens</p>
                </div>
            </div>


            <div className="my-16">

                <div className="grid md:grid-cols-2 gap-5 mt-10">
                    <div className="bg-white p-5 md:p-7 rounded-xl">
                        <h2 className='text-amber-600 font-semibold capitalize'>flexible work environment</h2>
                        <p className='mt-7 text-xs md:text-sm'>enjoy the freedom to work from anywhere in the world, whether it&apos;s the comfort of your home office or the excitement of a new city. Embrace a work-life balance that suits your needs.</p>
                    </div>
                    <div className="bg-white p-5 md:p-7 rounded-xl">
                        <h2 className='text-amber-600 font-semibold capitalize'>cultural diversity</h2>
                        <p className='mt-7 text-xs md:text-sm'>Experience the richness of working with a global team. Collaborate with professionals from different backgrounds, cultures, and perspectives, fostering creativity, innovation, and personal growth.</p>
                    </div>

                    <div className="bg-white p-5 md:p-7 rounded-xl">
                        <h2 className='text-amber-600 font-semibold capitalize'>Professional Development</h2>
                        <p className='mt-7 text-xs md:text-sm'>Gain access to a wide range of learning and development opportunities. From training programs to conferences, sharpen your skills and expand your knowledge to stay ahead in the ever-evolving industry.</p>
                    </div>
                    <div className="bg-white p-5 md:p-7 rounded-xl">
                        <h2 className='text-amber-600 font-semibold capitalize'>Travel Opportunities</h2>
                        <p className='mt-7 text-xs md:text-sm'>Embark on exciting journeys and visit different locations as part of your job. Engage in on-site collaborations, attend conferences, or simply enjoy the experience of working in diverse environments.</p>
                    </div>

                    <div className="bg-white p-5 md:p-7 rounded-xl">
                        <h2 className='text-amber-600 font-semibold capitalize'>Global Networking</h2>
                        <p className='mt-7 text-xs md:text-sm'>Connect with professionals from around the world and build a vast network. Exchange ideas, share experiences, and create meaningful connections that can open doors to future collaborations and career growth.</p>
                    </div>
                    <div className="bg-white p-5 md:p-7 rounded-xl">
                        <h2 className='text-amber-600 font-semibold capitalize'>Competitive Compensation</h2>
                        <p className='mt-7 text-xs md:text-sm'>Benefit from a competitive compensation package that recognizes your skills and contributions. Enjoy the perks of a global company that values your expertise and rewards you accordingly.</p>
                    </div>
                </div>
            </div>


            <div className='my-8'>
                <div className='flex justify-center'>
                    <span className='capitalize font-bold btnOrange text-white  px-8 py-1.5 rounded-full'>our offices</span>
                </div>
                <h3 className='text-white text-center capitalize mt-7 text-xl md:text-3xl'>discover our global network of offices</h3>
                <p className='text-white text-center capitalize text-xs md:text-sm mt-5'>experience our expansive network of offices across the world, connecting you to our exceptional services wherever you are.</p>
                <div className='bg-white p-7 mt-7  grid md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-xl'>
                    {data2.map((item) => (
                        <Link href={"/careers/1"} key={item.id} className='xl:px-5'>
                            <div className='relative overflow-hidden rounded-xl w-full h-[200px] md:h-[250px] lg:h-[300px]'>
                                <Image priority fill sizes='(min-width:992px) , 100vw' alt={item.title} src={item.img} />
                            </div>
                            <span className='mt-5 inline-block capitalize text-indigo-700 font-semibold'>{item.title}</span>
                            <p className='text-sm mt-2 text-black/85'>{item.address}</p>
                            <p className='text-sm md:text-base mt-2 font-semibold'>{item.phone}</p>
                        </Link>
                    ))}
                </div>
            </div>


            <div className='flex justify-center items-center mt-10'>
                <Link className='px-4 sm:px-6 py-1.5 text-white rounded-full font-bold capitalize btnOrange' href={"/contactUs"}>contact us</Link>
            </div>
        </main>
    )
}

export default page
