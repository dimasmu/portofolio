import React, { useContext } from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { Waypoint } from 'react-waypoint';
import { ActviveContext } from '../../App'
const About = () => {
  const { active, setActive } = useContext(ActviveContext)
  const _handleEnter = () => {
    setActive('#about')
  }
  const _handleLeave = () => {
    setActive('#experience')
  }
  return (
    <section id='about'>
      <Waypoint onEnter={_handleEnter} />
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUser className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Experience</h5>
              <small>80+ Completed Project</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ratione magnam saepe perspiciatis labore impedit amet magni illum maiores, laudantium autem qui eligendi laboriosam aliquid blanditiis illo voluptatibus alias voluptatem id adipisci voluptas? Eligendi impedit dicta consectetur maxime fugiat ab, ullam nostrum temporibus? Reprehenderit non exercitationem numquam? Mollitia, amet iste.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      {/* <Waypoint onLeave={_handleLeave}/> */}
    </section>
  )
}

export default About