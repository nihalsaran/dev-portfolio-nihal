import React from 'react';
import { motion } from 'framer-motion';
import './resume.css';

import A4ResumeImage1 from '../assets/resume1.jpg'; // Import your A4-sized resume image
import A4ResumeImage2 from '../assets/resume2.jpg'; // Import your A4-sized resume image


const Resume = () => {
 

  return (
    <div className="resume-container">
    <motion.a
      href="#"
      className="resume-paper"
      whileHover={{ scale: 1.03 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
    >
       <img className="img1" src={A4ResumeImage1} alt="A4 Resume" />
       <img className="img2" src={A4ResumeImage2} alt="A4 Resume" />
    </motion.a>
  </div>
  );
};

export default Resume;
