import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsLinkedin} from 'react-icons/bs'
import {FaWhatsapp} from 'react-icons/fa'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b7os1h8', 'template_i417yre', form.current, '4f4Jdt5kGstgFjvAI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch </h5>
        <h1>Contact Me</h1>
          <div className='contacts'>
            <div className='options'>
              <div className='option'>
                <HiOutlineMail/>
                <h4>Email</h4> 
                <h5>masashabib@yahoo.com</h5>
                <a href='mailto:masashabib@yahoo.com' target="_blank">Send a massage</a>
              </div>
              <div className='option'>
                <BsLinkedin/>
                <h4>Linkedin </h4> 
                <h5>Masa Shabib</h5>
                <a href='https://www.linkedin.com/in/masa-shabib-3b32b1108/' target="_blank">Send a massage</a>
              </div>
              <div className='option'>
                <FaWhatsapp/>
                <h4>WhatsApp</h4> 
                <h5>+972595704633</h5>
                <a href='https://wa.me/+972595704633' target="_blank">Send a massage</a>
              </div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <input type='text' name='name' placeholder='Your Full Name' required/>
              <input type='email' name='email' placeholder='Your Email' required/>
              <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-main' >Send Message</button>
            </form>
          </div>
    </section>
  )
}

export default Contact