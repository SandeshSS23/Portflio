import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";
import HomeRental from "../Assets/project/HomeRental.png";
import dbms from "../Assets/project/dbms.png";
import JobRecommendation_Result from "../Assets/project/JobRecommendation_Result.png";
import hackathon from "../Assets/project/hackathon.png";
import compression from "../Assets/project/compression.png";
import portfolio_optimisation from "../Assets/project/portfolio_optimisation.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={HomeRental}
              title="Home Rental - MERN Stack"
              description="Developed a full-stack real estate rental platform enabling users to browse, list, and manage properties. Implemented secure authentication using JWT, Firebase, and Google OAuth, along with complete CRUD operations for property listings. Integrated image uploads, REST APIs, and Redux for efficient state management, delivering a seamless and responsive user experience."
              link="https://github.com/SandeshSS23/Home-Rental"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={JobRecommendation_Result}
              title="JobGenix - Job and Talent Recommendation Platform"
              description="Automated Job Recommendation System – Python, Selenium, CI/CD (Dec 2024 – May 2025) Developed an AI-driven job recommendation system integrating a hybrid model combining BERT, Content-Based, and Collaborative Filtering, reducing RMSE by 27% and improving job match precision from 58% to 72%. Achieved 100% recall and 84% F1-score through personalized recommendations and candidate shortlisting. Automated daily job data collection using Selenium, NLP, and cron-based CI/CD pipelines, significantly enhancing recruitment workflow efficiency."
              link="https://github.com/SandeshSS23/JobGenix-A-Job-and-Talent-Recommendation-Platform"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={hackathon}
              title="BookMyCampus - A Venue Booking System"
              description="BookMyCampus is a Next.js and Firebase application designed to streamline venue requests and approvals. It includes a request form with validation, automated email notifications using Email.js, and dynamic calendar updates to reflect approved bookings. The system simplifies venue management and communication."
              link="https://github.com/vaishnavi775/Hackathon"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={compression}
              title="Multi-modal Compression"
              description="Engineered a comprehensive compression system supporting image, audio, and text data. Used Quad Tree decomposition for lossy image compression to optimize storage, implemented a non-linear companding algorithm with lookup tables for dynamic audio compression, and applied the LZW algorithm with HashMaps for efficient, lossless text compression. Focused on enhancing performance, reducing data size, and demonstrating practical applications of core DSA concepts."
              link="https://github.com/SandeshSS23/DSA-Project"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={portfolio_optimisation}
              title="Portfolio Optimisation"
              description="This project focuses on optimizing financial portfolios by soliciting user input for a list of stocks in which to invest. The objective is to provide users with an optimal percentage allocation for each stock, thereby maximizing potential returns. The underlying algorithm employed for this purpose is the genetic algorithm. This approach aims to enhance the efficiency of portfolio construction by leveraging genetic principles to iteratively refine investment strategies. The end result is a carefully curated portfolio allocation, tailored to achieve the highest possible returns based on the user's specified stock selection."
              link="https://github.com/SandeshSS23/Portfolio-Optimisation"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath={dbms}
              title="Car Rental Management"
              description="Car Rental Management is a PHP and MySQL-based system for efficient car rental operations. It features a normalized database schema for managing vehicles and bookings, an employee management interface, and secure user authentication. The system optimizes data management and streamlines employee tasks."
              link="https://github.com/SandeshSS23/Car-Rental-DBMS-Project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;

// Internship
// hackathon
// app
// se
// dbms
// ai
// cn
// dsa
