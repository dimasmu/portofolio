import React, { useContext } from 'react'
import './experience.css'
import { Waypoint } from 'react-waypoint'
import { ActviveContext } from '../../App'
import { BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  const { active, setActive } = useContext(ActviveContext)
  const _handleEnter = () => {
    setActive('#experience')
  }
  const _handleLeave = () => {
    setActive('#service')
  }
  return (
    <section id='experience'>
      <Waypoint onEnter={_handleEnter} />
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>Jquery</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>Node Js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>Mysql</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>Postgresql</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__database'>
          <h3>Database Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>Mysql</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>Postgresql</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>Sql Server</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill class="experience__details-icon" />
              <div>
                <h4>MongoDb</h4>
                <small className='text-light'>beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* <Waypoint onEnter={_handleLeave}/> */}
    </section>
  )
}

export default Experience