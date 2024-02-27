"use client"
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

function Checked({ lang }) {

    const [language, setLanguage] = useState(lang === "en" ? true : false)
    const router = useRouter()
    const path = usePathname()
    const pathArr = path.split("")
    const itemFilterdSlash = pathArr.filter((item) => item === "/")
    const thePagePathName = pathArr.slice(4).join("")
    


    const handleChange = () => {
        if (itemFilterdSlash.length > 1) {
            if (lang === "en") {
                router.push(`/ar/${thePagePathName}`)
            } else {
                router.push(`/en/${thePagePathName}`)
            }

        } else {
            if (lang === "en") {
                router.push(`/ar`)
            } else {
                router.push(`/en`)
            }
        }


    }

    return (
        <div className='container mx-auto px-5'>
            <div className="flex justify-end items-center">
                <span className='text-white me-3 capitalize'>{lang === "ar" ? "english":"العربية"}</span>
                <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
                    <input onChange={() => handleChange()} id="switch-component" type="checkbox"
                        className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-lime-600 peer-checked:border-x-yellow-500 peer-checked:before:bg-yellow-500 bg-slate-400"

                        defaultChecked={language}
                    />
                    <label htmlFor="switch-component"
                        className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-yellow-500 peer-checked:before:bg-yellow-500">

                    </label>

                </div>
                {/* <span className='text-white ms-3 capitalize'>english</span> */}
            </div>
        </div>
    )
}

export default Checked
