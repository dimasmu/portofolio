import React, { useContext } from 'react'
import './header.css'
import CTA from './CTA'
import { Waypoint } from 'react-waypoint'
import { ActiveContext } from '../../App'

function Header() {
  const { active, setActive } = useContext(ActiveContext)
  const _handleEnter = () => {
    setActive('#')
  }
  const _handleLeave = () => {
    setActive('#workingexperiences')
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