import React from "react";
import { Link } from "react-router-dom";

export default function BudgetTransactionDetails() {
  const techStack = [
    "React.js",
    "Vite",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT Authentication",
    "Recharts",
  ];

  return (
    <div className="project-detail-container">
      {/* Navigation Link */}
      <Link to="/" className="detail-back-link">
        ← Back to Projects
      </Link>

      {/* Header Section */}
      <header className="detail-header">
        <h1 className="detail-title">SpendWise Platform</h1>
        <p className="detail-subtitle">
          A full-scale personal finance and expense tracking web application
          featuring secure JWT authentication, real-time transaction
          management, and categorized spending analytics to help users monitor
          cash flow.
        </p>
        <p className="detail-tech-lead">
          The SpendWise platform was developed using modern web
          technologies, consisting of:
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
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/7EOYaaRzqBE?si=SGdLK78bQxEI6vjS"
            title="SpendWise Video Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Overview */}
      <section className="detail-section">
        <h2 className="detail-section-title muted">Project Overview</h2>
        <p className="detail-text">
          SpendWise is a dynamic platform, full-stack financial
          management application built to help users seamlessly monitor cash flow,
          categorize expenditures, and track their financial goals. Designed with
          performance and security in mind, the platform delivers an intuitive
          user experience—combining encrypted user authentication, real-time CRUD
          transaction tracking, and visual analytics within a sleek interface. 
          At its core, the platform caters to individuals looking to take control 
          of their personal finances by offering clear insights into their monthly 
          spending habits and income patterns.
        </p>
        <p className="detail-text">
          The user experience is powered by a fast, responsive React single-page
          application (SPA) built with Vite and styled with CSS. Utilizing 
          flexible React state management, the frontend handles user session registration, 
          secure login transitions, and interactive dashboard updates without page reloads. 
          On the backend, a robust Node.js and Express REST API handles continuous data 
          validation, token verification, and persistence. Transaction records are securely 
          communicated via HTTP requests and stored in a flexible MongoDB database managed 
          through Mongoose models, ensuring reliable user data isolation.
        </p>
      </section>

      {/* Key Features */}
      <section className="detail-section">
        <h2 className="detail-section-title">Key Features</h2>
        <ul className="detail-list">
          <li>
            <b>Secure JWT Authentication:</b>
            Allows users to securely register, log in, and protect their financial 
            records using JSON Web Tokens and encrypted password hashing.
          </li>
          <li>
            <b>Dynamic Transaction Management:</b> Enables users to seamlessly add, 
            edit, categorize, and delete income or expense entries with instant UI updates.
          </li>
          <li>
            <b>Categorized Financial Analytics:</b> Organizes transactions by custom 
            categories to break down spending habits effectively.
          </li>
          <li>
            <b>Interactive Dashboard Metrics:</b> Instantly calculates net totals, 
            monthly income, and total expenses to give users a high-level overview of 
            their budget status.
          </li>
          <li>
            <b>RESTful Data Persistence:</b> Securely transmits transaction payloads 
            via asynchronous requests to a scalable Node.js backend, storing records 
            within a structured MongoDB database.
          </li>
        </ul>
      </section>
    </div>
  );
}