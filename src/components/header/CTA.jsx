import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <h5>Hello i'am</h5>
      <h1>Dimas Maendra Utomo</h1>
      <h5 className='text-light'>Backend Developer</h5>
      <div className="profile__options">
        <a href={CV} className="btn" target="_blank">Download CV</a>
        <a href="#contact" className='btn btn-primary'>let's talk</a>
      </div>
    </div>
  )
}

export default CTA