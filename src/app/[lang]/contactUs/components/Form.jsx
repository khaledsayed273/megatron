"use client"
import API from '@/api/API'

import { Toaster, toast } from 'sonner'

import React, { useEffect, useState } from 'react'

function Form({ baseUrl }) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [user_name, setUser_name] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        setUser_name(`${firstName} ${lastName}`)
    }, [firstName, lastName])

    const HandleSend = async (e) => {

        e.preventDefault()
        try {
            const req = await API.post(`${baseUrl}/contact`, { user_name, email, phone, message }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "K-secret": "123456"
                }
            })
            toast.success(req?.data?.message)
            setFirstName("")
            setLastName("")
            setUser_name("")
            setEmail("")
            setPhone("")
            setMessage("")

        } catch (e) {
            toast.error(e?.response?.data?.message)
        }

    }

    const classVar = "block px-2 w-full rounded-md  py-1.5 text-gray-900 shadow-sm outline-0 border-2 border-gray-300 placeholder:text-gray-400 focus:border-amber-500 sm:text-sm sm:leading-6"



    return (
        <>
            <div data-aos="fade-up" className="bg-white  rounded-xl p-5 md:p-7">
                <form>
                    <div data-aos="fade-up" data-aos-duration="1000" className="grid md:grid-cols-2 gap-4">
                        <div >
                            <label htmlFor="firstName" className="inline-block text-sm font-medium leading-6 text-gray-900 capitalize">first name</label>
                            <div className="mt-2">
                                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} id="firstName" name="firstName" type="text" autoComplete="firstName" required className={classVar} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="inline-block text-sm font-medium leading-6 text-gray-900 capitalize">last name</label>
                            <div className="mt-2">
                                <input value={lastName} onChange={(e) => setLastName(e.target.value)} id="lastName" name="lastName" type="text" autoComplete="lastName" className={classVar}/>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="grid md:grid-cols-2 gap-4 my-5">
                        <div>
                            <label htmlFor="email" className="inline-block text-sm font-medium leading-6 text-gray-900 capitalize">email</label>
                            <div className="mt-2">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" autoComplete="email" required className={classVar} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className="inline-block text-sm font-medium leading-6 text-gray-900 capitalize">phone number</label>
                            <div className="mt-2">
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" name="phone" type="number" autoComplete="phone" required className={classVar} />
                            </div>
                        </div>
                    </div>
                    <label data-aos="fade-up" data-aos-duration="1000" className='inline-block text-sm font-medium leading-6 text-gray-900 capitalize' htmlFor="messages">messages</label>
                    <textarea data-aos="fade-up" data-aos-duration="1000" value={message} onChange={(e) => setMessage(e.target.value)} id="messages" className="resize-none rounded-md w-full h-[200px] mt-5  p-3 block outline-0 border-2 border-gray-300 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-amber-600 sm:text-sm sm:leading-6"></textarea>

                    <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col sm:flex-row items-center justify-between mt-5'>
                        <div data-aos="fade-up" data-aos-duration="1000" className="flex h-6 items-center ">
                            <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300  text-indigo-600 accent-amber-600 focus:ring-indigo-600" />
                            <label htmlFor="comments" className="font-medium ms-2 text-xs lg:text-sm select-none text-gray-900">I agree with terms of usage and privacy policy.</label>
                        </div>
                        <button data-aos="fade-up" data-aos-duration="1000" onClick={HandleSend} className='capitalize mt-4 sm:mt-0  font-semibold btnOrange text-white px-8 py-1.5 rounded-full'>submit</button>
                    </div>
                </form>

            </div>
            <Toaster richColors expand={true} position="top-right" />
        </>

    )
}

export default Form
