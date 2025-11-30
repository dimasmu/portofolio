import React, { useContext } from 'react'
import './service.css'
import { Waypoint } from 'react-waypoint'
import { ActviveContext } from '../../App'
import { BiCheck } from 'react-icons/bi'
const Service = () => {
  const { active, setActive } = useContext(ActviveContext)
  const _handleEnter = () => {
    setActive('#services')
  }
  const _handleLeave = () => {
    setActive('#contact')
  }
  return (
    <section id='services'>
      <Waypoint onEnter={_handleEnter} />
      <h5>What i Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni?</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni?</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni?</p>
            </li>
          </ul>
        </article>
      </div>
      {/* <Waypoint onLeave={_handleLeave}/> */}
    </section>
  )
}

export default Service