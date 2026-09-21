import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 style={{ marginBottom: "2rem" }}>My Projects</h2>

      <div className="projects-grid">
        {/* NutriAI Project Card */}
        <div className="project-card">
          <h3>NutriAI — Diploma Project</h3>
          <p>
            MERN stack web application for nutrition planning, recipe
            management, and real-time nutritional calculation.
          </p>
          <Link to="/projects/nutriai" className="project-link-btn">
            View Details →
          </Link>
        </div>


        {/* MathQuest Platform Card */}
        <div className="project-card">
          <h3>MathQuest Platform</h3>
          <p>
            An interactive educational web platform featuring categorized
            problem sets, step-by-step solution breakdowns, and difficulty
            filtering for math competition preparation.
          </p>
          <Link to="/projects/matholympiad" className="project-link-btn">
            View Details →
          </Link>
        </div>

        {/*  Budget & Transactions platform Card */}
        <div className="project-card">
          <h3>SpendWise Platform</h3>
          <p>
            A full-stack personal finance and expense tracking web application
            featuring secure JWT authentication, real-time transaction
            management, and categorized spending analytics to help users monitor
            cash flow.
          </p>
          <Link to="/projects/budgetTransacion" className="project-link-btn">
            View Details →
          </Link>
        </div>

        {/* sckincare products */}
        <div className="project-card">
          <h3>SkinCare Showcase — Front-End Web Application</h3>
          <p>
            A responsive, multi-section web application built from scratch to
            showcase popular skincare brands and products.
          </p>
          <Link to="/projects/skincare" className="project-link-btn">
            View Details →
          </Link>
        </div>
      </div>
    </section>
  );
}
