// src/pages/Resume.js
import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css'; // 아래에 CSS 예시 참고

function Resume() {
  return (
    <motion.div 
      className="resume"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <h1>My Resume</h1>
      <p>Click to download my resume</p>
      <a href="/resume.pdf" download>
        <button className="download-button">Download Resume</button>
      </a>
    </motion.div>
  );
}

export default Resume;
