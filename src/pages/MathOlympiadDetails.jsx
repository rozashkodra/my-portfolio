import React from "react";
import { Link } from "react-router-dom";

export default function MathOlympiadDetails() {
  const techStack = [
    "React.js",
    "Vite",
    "Axios",
    "PHP",
    "Laravel (REST API)",
    "MySQL",
    "XAMPP",
    "phpMyAdmin",
    "OpenTDB API",
  ];

  return (
    <div className="project-detail-container">
      {/* Navigation Link */}
      <Link to="/" className="detail-back-link">
        ← Back to Projects
      </Link>

      {/* Header Section */}
      <header className="detail-header">
        <h1 className="detail-title">MathQuest</h1>
        <p className="detail-subtitle">
          An interactive educational web application designed for students to
          practice high-level mathematical problems, track scores, and prepare
          for academic competitions.
        </p>
        <p className="detail-tech-lead">
          The MathQuest platform was developed using web
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
            height="450"
            src="https://www.youtube-nocookie.com/embed/H92QxyO5ZtU?si=azqgcgNt1sdxrI8c"
            title="MathQuest Video Demo"
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
          MathQuest Portal is a dynamic, full-stack educational
          platform built to train and evaluate students in competitive
          problem-solving across multiple academic tiers. Designed with
          performance, clarity, and precision in mind, the platform delivers an
          engaging examination experience—combining automated question
          generation, instant client-side evaluation, and real-time competitive
          leaderboards within a sleek, custom-styled interface. At its core, the
          platform caters to diverse skill levels by offering tailored
          difficulty paths for Elementary School, High School, and Undergraduate
          candidates. By integrating directly with external trivia REST APIs,
          the system dynamically fetches, decodes, and formats fresh
          multiple-choice mathematics problems on demand, ensuring a unique test
          environment for every session.{" "}
        </p>
        <p className="detail-text">
          The user experience is powered by a fast, responsive React single-page
          application (SPA) built with Vite. Utilizing flexible React state
          management, the frontend handles candidate registration, seamless page
          transitions, and option selections without requiring page reloads.
          Once a candidate completes an exam, an automated scoring engine
          instantly calculates their final score, total possible points, and
          correct answer tally, delivering clear, immediate feedback. On the
          backend, a robust Laravel REST API handles continuous data validation
          and persistence. Examination results are securely sent via Axios and
          stored in a structured MySQL database managed through Eloquent ORM.
          The backend continuously aggregates performance data to serve dynamic,
          level-specific leaderboards—allowing candidates to track their
          national or category-wide rankings in real time.
        </p>
      </section>

      {/* Key Features */}
      <section className="detail-section">
        <h2 className="detail-section-title">Key Features</h2>
        <ul className="detail-list">
          <li>
            <b>Multi-Tiered Academic Registration:</b>
            Allows candidates to input their full name and select their specific
            academic difficulty tier (Elementary School, High School, or
            Undergraduate) before starting.
          </li>
          <li>
            <b>Dynamic Question Generation:</b> Integrates with the OpenTDB REST
            API to fetch, decode, and normalize fresh, categorized
            multiple-choice math problems on demand for every session.
          </li>
          <li>
            <b>Automated Client-Side Scoring Engine:</b> Instantly evaluates
            user answers upon submission, calculating final scores, total
            possible points, and correct answer tallies without page reloads.
          </li>
          <li>
            <b>Live Category-Specific Leaderboards:</b> Dynamically queries and
            displays top-ranking candidates filtered in real time by their
            chosen study level.
          </li>
          <li>
            <b>RESTful Data Persistence:</b> Securely transmits completed exam
            payloads via Axios to a robust Laravel backend, storing records
            within a structured MySQL database
          </li>
        </ul>
      </section>
    </div>
  );
}
