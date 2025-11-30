import React, { useContext, useState, useEffect } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { ActiveContext } from '../../App'

const Nav = () => {
    const context = useContext(ActiveContext)
    if (!context) {
        throw new Error('Nav must be used within an ActiveContext Provider')
    }

    const { active, setActive } = context

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: '#', element: document.body },
                { id: '#about', element: document.querySelector('#about') },
                { id: '#experience', element: document.querySelector('#experience') },
                { id: '#contact', element: document.querySelector('#contact') }
            ]

            const scrollPosition = window.scrollY + 100

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]
                if (section.element) {
                    const elementTop = section.element === document.body ? 0 : (section.element as HTMLElement).offsetTop
                    const elementHeight = section.element === document.body ?
                        document.documentElement.scrollHeight : (section.element as HTMLElement).offsetHeight

                    if (scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight) {
                        if (active !== section.id) {
                            setActive(section.id)
                        }
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [active, setActive])

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault()
        setActive(targetId)

        if (targetId === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        } else {
            const element = document.querySelector(targetId) as HTMLElement
            if (element) {
                const offsetTop = element.offsetTop - 80
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                })
            }
        }
    }

    return (
        <nav id='navbarid' className="bg-color-bg bg-opacity-30 w-max block p-3 px-7 z-2 fixed left-1/2 transform -translate-x-1/2 bottom-8 flex gap-3 rounded-3xl backdrop-blur-lg">
            <a id='nav_home' href="#" onClick={(e) => handleNavClick(e, '#')} className={`bg-transparent p-4 rounded-full flex text-color-light text-xl hover:bg-color-bg hover:bg-opacity-30 ${active === '#' ? 'bg-color-primary text-color-white' : ''}`}><AiOutlineHome /></a>
            <a id='nav_about' href="#about" onClick={(e) => handleNavClick(e, '#about')} className={`bg-transparent p-4 rounded-full flex text-color-light text-xl hover:bg-color-bg hover:bg-opacity-30 ${active === '#about' ? 'bg-color-primary text-color-white' : ''}`}><AiOutlineUser /></a>
            <a id='nav_experience' href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className={`bg-transparent p-4 rounded-full flex text-color-light text-xl hover:bg-color-bg hover:bg-opacity-30 ${active === '#experience' ? 'bg-color-primary text-color-white' : ''}`}><BiBook /></a>
            {/* <a id='nav_service' href="#services" onClick={(e) => handleNavClick(e, '#services')} className={`bg-transparent p-4 rounded-full flex text-color-light text-xl hover:bg-color-bg hover:bg-opacity-30 ${active === '#services' ? 'bg-color-primary text-color-white' : ''}`}><RiServiceLine/></a> */}
            <a id='nav_contact' href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className={`bg-transparent p-4 rounded-full flex text-color-light text-xl hover:bg-color-bg hover:bg-opacity-30 ${active === '#contact' ? 'bg-color-primary text-color-white' : ''}`}><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav