// ContactForm.js

import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'https://your-glitch-app-url.glitch.me' with your Glitch app URL
      await axios.post("https://pushy-catkin-alto.glitch.me/send-email", formData);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending message. Please try again later.");
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-info">
        <h1>Let's talk about everything!</h1>
        <p>
          Don't like forms? Send me an{" "}
          <a href="mailto:nihalsarandasd@gmail.com">email</a>. 👋
          <br />
          <br />
          <h3>Or find me on:</h3>
          {/* Your social media icons here */}
        </p>
        <div>
          <p className="contact-links">
            {/* Your contact information here */}
          </p>
          <br />
        </div>
      </div>
      <div className="contact-form">
        <form name="contact" onSubmit={handleSubmit}>
          <input
            type="text"
            name="senderName"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="senderEmail"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Your Message"
            name="message"
            onChange={handleChange}
            required
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
