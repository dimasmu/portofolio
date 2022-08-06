import React, { useContext } from 'react'
import './contact.css'
import { Waypoint } from 'react-waypoint'
import { ActviveContext } from '../../App'
const Contact = () => {
  const { active, setActive } = useContext(ActviveContext)
  const _handleEnter = () => {
    setActive('#contact')
  }
  return (
    <section id='contact'>
      <Waypoint onEnter={_handleEnter} />
      Contact
    </section>
  )
}

export default Contact