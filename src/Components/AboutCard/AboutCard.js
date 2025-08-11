import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Sandesh Sahane</span>, a
            Software Engineer based in{" "}
            <span className="purple">Pune, India</span>.
            <br />
            <br />
            I graduated with a Bachelor's degree in Computer Science from COEP
            Technological University, Pune (2021-2025).
            <br />
            <br />⚡ My expertise includes core programming skills in{" "}
            <b className="purple">C++, Java and JavaScript</b>, and I have
            hands-on experience with modern web technologies.
            <br />
            <br />⚡ I have a strong interest in{" "}
            <b className="purple">
              Web Development (MERN stack), DevOps, and Android development
            </b>
            .
            <br />
            <br />⚡ I am passionate about building impactful projects using{" "}
            <b className="purple">React.js, Next.js, Node.js</b>, and exploring
            innovative solutions in software engineering.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
