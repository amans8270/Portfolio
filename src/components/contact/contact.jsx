import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>Amans8270@gmail.com</h5>
          <a href="mailto:amans8270@gmail.com">Send A Message</a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon'/>
          <h4>LinkedIn</h4>
          <h5>aman-singh-03571713a</h5>
          <a href="https://www.linkedin.com/in/aman-singh-03571713a/" target="_blank" rel="noopener noreferrer" >Check My LinkedIn Profile</a>
          </article>
          <article className="contact__option">
           <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+918173870265</h5>
          <a href="whatsapp://send?text=' Hello!! '&phone=91' + 8173870265">Send A Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Name' required />
        <input type="email" placeholder='Your Email' required />
        <textarea name="message"  rows="7" placeholder='Your Mesage' required></textarea>
        <button className="btn btn-primary" ><a  className="btn btn-primary" href="mailto:amans8270@gmail.com">Send Message</a></button>
        </form>

      </div>
    </section>
  )
}

export default Contact