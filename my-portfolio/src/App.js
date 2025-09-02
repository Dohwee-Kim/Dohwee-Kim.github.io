import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Dohwee Kim</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/blog">Tech Blog</Link>
            <Link to="/resume">Resume</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/*" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <footer>
          <a href="https://github.com/your-github-id" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/resume.pdf" download>Download PDF Resume</a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
