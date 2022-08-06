import React, { useContext } from 'react'
import './service.css'
import { Waypoint } from 'react-waypoint';
import { ActviveContext } from '../../App'
const Service = () => {
  const { active, setActive } = useContext(ActviveContext)
  const _handleEnter = () => {
    setActive('#service')
  }
  const _handleLeave = () => {
    setActive('#contact')
  }
  return (
    <section id='service'>
      <Waypoint onEnter={_handleEnter}/>
      Service
      {/* <Waypoint onLeave={_handleLeave}/> */}
    </section>
  )
}

export default Service