import React from "react";

export default function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <p>
        <a href="/resume.pdf" download>Download my PDF Resume</a>
      </p>
      <iframe
        src="/resume.pdf"
        title="Resume"
        width="100%"
        height="600px"
        style={{ border: "none" }}
      ></iframe>
    </section>
  );
}