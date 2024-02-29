import React from 'react'
import EmailComponent from './EmailComponent'
import Footer from './Footer'
import { getDictionary } from '../dictionaries'

async function End({lang}) {
    const navbarTranslate = await getDictionary(lang)

    return (
        <>
            <EmailComponent />
            <Footer lang={lang} navbarTranslate={navbarTranslate.navBar} />
        </>
    )
}

export default End
