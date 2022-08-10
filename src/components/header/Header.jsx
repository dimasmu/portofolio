import React, { useContext } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
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
      <Waypoint onEnter={_handleEnter} />
      <div className="container header_container">
        <CTA />
        <div className="profile__picture">
          <div className="profile__picture-background"></div>
        </div>
      </div>
      <Waypoint onLeave={_handleLeave} />
    </header>
  )
}

export default Header