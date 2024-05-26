// ContactForm.js

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdEmail } from "react-icons/md";
import socials from "../content/socials";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const ContactForm = () => {
  const form = useRef();
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kcxl51w', 'template_ritdir8', form.current, 'Xq3lTclAhu8nF54qE')
      .then((result) => {
        console.log(result.text);
        setShowMessage(true); // Set showMessage to true after successful submission
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-section">
      <div className="contact-info">
        <h1>Let's talk about everything!</h1>
        <p>
          Don't like forms? Send me an{' '}
          <a href="mailto:nihalsarandasd@gmail.com">Mail</a>. 👋
          <br />
          <br />
          <h3>Or find me on:</h3>
          <div className="hero-socials">
            {socials.map((social, index) => (
              <a key={index} href={social.url}>
                <img src={`/dev-portfolio-nihal/socials/${social.icon}`} alt="" />
              </a>
            ))}
          </div>
          {}
          
        </p>
        <div>
          <p className="contact-links">
          <MdEmail />
            nihalsarandasd@gmail.com
          </p>
          <br />
          <p className="contact-links">
            <FaPhoneAlt />
            +91 6309596999
          </p>
          <br />
          <p className="contact-links">
            <IoLocation />
            India
          </p>
          <br />
        </div>
      </div>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />

          {showMessage && <p>Thanks for contacting!</p>}
        </form>
        
      </div>
    </div>
  );
};

export default ContactForm;
