import React from 'react'
import Navbar from './Navbar'
import { getDictionary } from '../dictionaries'
import Checked from './Checked'

export default async function Header({ lang }) {
    const navbarTranslate = await getDictionary(lang)
    return (
        <>
            <Navbar lang={lang} navbarTranslate={navbarTranslate.navBar} />
            <Checked  lang={lang} />
        </>

    )
}

