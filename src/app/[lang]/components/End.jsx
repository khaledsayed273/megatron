import React from 'react'
import EmailComponent from './EmailComponent'
import Footer from './Footer'
import { getDictionary } from '../dictionaries'
import { Toaster } from 'sonner'

async function End({ lang }) {
    const navbarTranslate = await getDictionary(lang)
    const baseUrl = process.env.baseUrl
    return (
        <>
            <Toaster richColors expand={true} position="top-right" />
            <EmailComponent baseUrl={baseUrl} />
            <Footer baseUrl={baseUrl} lang={lang} navbarTranslate={navbarTranslate.navBar} />
        </>
    )
}

export default End
