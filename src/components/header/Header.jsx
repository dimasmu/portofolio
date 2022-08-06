import React, { useContext } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './headerSocial'
import { Waypoint } from 'react-waypoint'
import { ActviveContext } from '../../App'

function Header() {
  const { active, setActive } = useContext(ActviveContext)
  const _handleEnter = () => {
    setActive('#')
  }
  const _handleLeave = () => {
    setActive('#about')
  }
  return (
    <header>
      <Waypoint onEnter={_handleEnter}/>
      <div className="container header_container">
        <h5>Hello i'am</h5>
        <h1>Dimas</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
      {/* <Waypoint onLeave={_handleLeave}/> */}
    </header>
  )
}

export default Header