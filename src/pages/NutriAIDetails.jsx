import React from 'react';
import { Link } from 'react-router-dom';

export default function NutriAIDetails() {
  const techStack = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MERN Stack",
    "REST API",
    "JWT",
    "Spoonacular API"
  ];

  return (
    <div className="project-detail-container">
      {/* Navigation Link */}
      <Link to="/" className="detail-back-link">
        ← Back to Projects
      </Link>

      {/* Header Section */}
      <header className="detail-header">
        <h1 className="detail-title">NutriAI — Diploma Project</h1>
        <p className="detail-subtitle">
          NutriAI: Web Application for Nutrition Planning, Recipe Management, and Nutritional Calculation
        </p>
        <p className="detail-tech-lead">
          NutriAI was developed using the MERN technology stack, consisting of:
        </p>

        {/* Tech Stack Badges */}
        <div className="detail-tags">
          {techStack.map((tech) => (
            <span key={tech} className="detail-tag">
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Video Demo Section */}
      <section className="detail-section">
        <h2 className="detail-section-title">Interactive Demo</h2>
        <div className="detail-video-container">
          <video controls src="/NutriAI.mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Overview */}
      <section className="detail-section">
        <h2 className="detail-section-title muted">Project Overview</h2>
        <p className="detail-text">
          NutriAI is a web application developed as my Computer Science diploma project with the aim of simplifying meal planning and nutritional value tracking in an accessible and personalized way.
        </p>
        <p className="detail-text">
          The application is structured into several main sections: Home Page with Contact Form, Recipe search using the Spoonacular API, Meal Planner for weekly daily values, and a dedicated PCOS educational page.
        </p>
        <p className="detail-text">
          Built on the MERN stack with JWT authentication and styled with Tailwind CSS and DaisyUI to provide a practical platform for recipe discovery and nutritional management.
        </p>
      </section>

      {/* Key Features */}
      <section className="detail-section">
        <h2 className="detail-section-title">Key Features</h2>
        <ul className="detail-list">
          <li>
            <b>Automated Recipe Suggestions:</b> Generates customized meal plans based on individual dietary requirements.
          </li>
          <li>
            <b>Nutritional Breakdown Calculations:</b> Calculates macro and micro targets in real-time.
          </li>
          <li>
            <b>Secure Authentication:</b> Password hashing and JWT-based user session handling.
          </li>
          <li>
            <b>Interactive Dashboard:</b> Clean layout tracking daily intake against set goals.
          </li>
        </ul>
      </section>
    </div>
  );
}