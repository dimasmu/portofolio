import React, { useContext } from 'react'
import './contact.css'
import { Waypoint } from 'react-waypoint'
import {ActviveContext} from '../../App'
const Contact = () => {
  const {active, setActive} = useContext(ActviveContext)
  const _handleEnter = () => {
    setActive('#contact')
  }
  return (
    <Waypoint onEnter={_handleEnter}>
      <section id='contact'>Contact</section>
    </Waypoint>
  )
}

export default Contact