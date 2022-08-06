import React, { useContext } from 'react'
import './experience.css'
import { Waypoint } from 'react-waypoint';
import {ActviveContext} from '../../App'
const Experience = () => {
  const {active, setActive} = useContext(ActviveContext)
  const _handleEnter = () => {
    setActive('#experience')
  }
  const _handleLeave = () => {
    setActive('#service')
  }
  return (
    <section id='experience'>
      <Waypoint onEnter={_handleEnter}/>
      Experience
      {/* <Waypoint onEnter={_handleLeave}/> */}
    </section>
  )
}

export default Experience