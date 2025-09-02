import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProjectPost from "./ProjectPost";

const projects = [
  { slug: "project1", title: "Project 1: AI Chatbot" },
  { slug: "project2", title: "Project 2: Portfolio Website" },
  // ...프로젝트 추가...
];

export default function Blog() {
  return (
    <div>
      <h2>Tech Blog</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.slug}>
            <Link to={p.slug}>{p.title}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        {projects.map((p) => (
          <Route key={p.slug} path={p.slug} element={<ProjectPost title={p.title} />} />
        ))}
      </Routes>
    </div>
  );
}