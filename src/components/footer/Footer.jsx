import React from 'react'
import './footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="https://www.youtube.com/watch?v=G-Cr00UYokU" className='footer__logo'>EGATOR</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skill</a></li>
        {/* <li><a href="#service">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonial">Testimonial</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/dimas-maendra-utomo-0a343b178/" target="_blank"><FaLinkedin/></a>
        <a href="https://www.instagram.com/dimasmu27/" target="_blank"><FiInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer