import React from 'react'

const CTA = () => {
  return (
    <div className="cta">
      <h5>Hello i'am</h5>
      <h1>Dimas Maendra Utomo</h1>
      <h5 className='text-light'>Backend Developer</h5>
      <div className="profile__options">
        <a href={"'/assets/cv.pdf"} className="btn" target="_blank">Download CV</a>
        <a href="#contact" className='btn btn-primary'>let's talk</a>
      </div>
    </div>
  )
}

export default CTA