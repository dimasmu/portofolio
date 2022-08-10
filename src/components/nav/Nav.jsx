import React, { useContext,useState } from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {ActviveContext} from '../../App'
const Nav = () => {
  const {active, setActive} = useContext(ActviveContext)
  return (
    <nav id='navbarid'>
      <a id='nav_home' href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a id='nav_about' href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a id='nav_experience' href="#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}><BiBook/></a>
      {/* <a id='nav_service' href="#services" onClick={() => setActive('#services')} className={active === '#services' ? 'active' : ''}><RiServiceLine/></a> */}
      <a id='nav_contact' href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav