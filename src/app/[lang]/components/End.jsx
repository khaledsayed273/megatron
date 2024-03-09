import React from 'react'
import EmailComponent from './EmailComponent'
import Footer from './Footer'
import { getDictionary } from '../dictionaries'
import { Toaster } from 'sonner'
import API from '@/api/API'

const getData = async () => {
    try {
        const res = await API.get(`/settings`)
        return res.data
    } catch (e) {
        console.log(e);
    }
}

export const revalidate = 3600;


async function End({ lang }) {
    const navbarTranslate = await getDictionary(lang)
    const baseUrl = process.env.baseUrl
    const social = await getData()


    return (
        <>
            <Toaster richColors expand={true} position="top-right" />
            <EmailComponent baseUrl={baseUrl} />
            <Footer social={social} lang={lang} navbarTranslate={navbarTranslate.navBar} />
        </>
    )
}

export default End
