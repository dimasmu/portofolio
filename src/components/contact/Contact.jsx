import React, { useContext,useRef } from 'react'
import './contact.css'
import { Waypoint } from 'react-waypoint'
import { ActviveContext } from '../../App'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { active, setActive } = useContext(ActviveContext)
  const _handleEnter = () => {
    setActive('#contact')
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gxnxy0q', 'template_wa8zlcm', form.current, 'Ze3aOoM6hVaXdkUNu')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <Waypoint onEnter={_handleEnter} />
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>dimasdemond@gmail.com</h5>
            <a href="mailto:dimasdemond@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>dimasmu</h5>
            <a href="https://facebook.com">Profile</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>085326723965</h5>
            <a href="https://api.whatsapp.com/send?phone=085326723965">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" cols="30" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
      <Waypoint onLeave={_handleEnter} />
    </section>
  )
}

export default Contact