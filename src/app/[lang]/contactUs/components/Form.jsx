"use client"
import React from 'react'

function Form() {
    return (
        <div className="bg-white rounded-xl p-5 md:p-7">
            <form>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="inline-block text-sm font-medium leading-6 text-gray-900 capitalize">first name</label>
                        <div className="mt-2">
                            <input id="firstName" name="firstName" type="text" autoComplete="firstName" required className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="lastName" className="inline-block text-sm font-medium leading-6 text-gray-900 capitalize">last name</label>
                        <div className="mt-2">
                            <input id="lastName" name="lastName" type="text" autoComplete="lastName" required className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 my-5">
                    <div>
                        <label htmlFor="email" className="inline-block text-sm font-medium leading-6 text-gray-900 capitalize">email</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autoComplete="email" required className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="inline-block text-sm font-medium leading-6 text-gray-900 capitalize">phone number</label>
                        <div className="mt-2">
                            <input id="phone" name="phone" type="number" autoComplete="phone" required className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
                <label className='inline-block text-sm font-medium leading-6 text-gray-900 capitalize' htmlFor="messages">messages</label>
                <textarea id="messages" className="resize-none rounded-md w-full h-[200px] mt-5  p-3 block border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"></textarea>
                
                <div className='flex flex-col sm:flex-row items-center justify-between mt-5'>
                    <div className="flex h-6 items-center ">
                        <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300  text-indigo-600 accent-amber-600 focus:ring-indigo-600"/>
                        <label htmlFor="comments" className="font-medium ms-2 text-xs lg:text-sm select-none text-gray-900">I agree with terms of usage and privacy policy.</label>                
                    </div>
                    <button className='capitalize mt-4 sm:mt-0  font-semibold btnOrange text-white px-8 py-1.5 rounded-full'>submit</button>
                </div>
                
            </form>
        </div>
    )
}

export default Form
