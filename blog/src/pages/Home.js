// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // 아래에 CSS 예시 참고

function Home() {
  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome to My SWE Engineer Profile</h1>
      <p>
        안녕하세요, 저는 [Your Name] 입니다. 저는 웹 애플리케이션 및 소프트웨어 개발에 열정을 가진 소프트웨어 엔지니어입니다.
      </p>
      <p>
        JavaScript, React, Node.js 등 다양한 기술 스택을 활용하여 복잡한 문제들을 해결해왔으며,
        새로운 기술을 배우고 적용하는 것을 즐깁니다.
      </p>
      <p>
        이력서 및 GitHub 프로필에서 제 프로젝트와 경력을 확인해보세요.
      </p>
    </motion.div>
  );
}

export default Home;
