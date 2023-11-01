import React from 'react'
import Typewriter from 'typewriter-effect';

const CTA = () => {
  return (
    <div className="cta">
      <h5>
        {
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(`Hello i'am`)
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(2500)
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
            }}

            options={{
              autoStart: true,
              loop: true
            }}
          />
        }
      </h5>
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