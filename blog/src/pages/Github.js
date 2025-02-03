// src/pages/Github.js
import React from 'react';
import { motion } from 'framer-motion';
import './Github.css'; // 아래에 CSS 예시 참고

function Github() {
  return (
    <motion.div 
      className="github"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <h1>My GitHub</h1>
      <p>click to check my gihub profile</p>
      <a href="https://github.com/Dohwee-Kim" target="_blank" rel="noopener noreferrer">
        <button className="github-button">Visit GitHub</button>
      </a>
    </motion.div>
  );
}

export default Github;
