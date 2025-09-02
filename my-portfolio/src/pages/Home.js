import React from "react";
import profileImage from '../assets/profile.jpeg'; // 이미지를 src/assets 폴더로 이동

export default function Home() {
  return (
    <section>
      <h2>About Me</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <img
          src={profileImage}  // 변경된 부분
          alt="Profile"
          style={{
            width: "140px",
            height: "140px",
            objectFit: "cover",
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        />
        <div>
          <p>
            {/* 본인 소개 및 이력 요약 */}
            Passionate software engineer with experience in web development, AI, and
            cloud technologies.
          </p>
        </div>
      </div>
      <h3>Experience</h3>
      <ul>
        <li>Company A - Frontend Developer (2022~2024)</li>
        <li>Company B - AI Researcher (2020~2022)</li>
        {/* ...추가 이력... */}
      </ul>
      <h3>Skills</h3>
      <ul>
        <li>React, TypeScript, Node.js</li>
        <li>Python, TensorFlow, PyTorch</li>
        {/* ...추가 기술... */}
      </ul>
    </section>
  );
}