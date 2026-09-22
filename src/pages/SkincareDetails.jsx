import React from "react";
import { Link } from "react-router-dom";

export default function SkincareDetails() {
  const techStack = ["HTML5", "CSS3", "JavaScript", "Responsive Design"];

  return (
    <div className="project-detail-container">
      {/* Navigation Link */}
      <Link to="/" className="detail-back-link">
        ← Back to Projects
      </Link>

      {/* Header Section */}
      <header className="detail-header">
        <h1 className="detail-title">
          SkinCare Showcase — Front-End Web Application
        </h1>
        <p className="detail-subtitle">
          A web application built from scratch to showcase popular skincare
          brands, active formulations, and routine categorization.
        </p>
        <p className="detail-tech-lead">
          SkinCare Showcase was developed using frontend web technologies,
          consisting of:
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
            src="https://www.youtube.com/embed/1zSdjT0suhs?si=jYhUhyXgKxIFmkeD"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      {/* Overview */}
      <section className="detail-section">
        <h2 className="detail-section-title muted">Project Overview</h2>
        <p className="detail-text">
          SkinCare Products is my first web development project, created while
          learning the fundamentals of HTML, CSS, and JavaScript. The project is
          a static frontend website designed to showcase skincare brands and
          products through a structured and visually organized layout. The
          website begins with a header featuring a custom logo created using
          SVG, followed by a navigation bar for accessing the different sections
          of the page. It includes a dedicated section for skincare brands, as
          well as a video integrated from a local video folder. The skincare
          products section uses HTML tables, with table rows and data cells to
          organize and display the products in a structured format. The page
          also includes a second video embedded directly from YouTube,
          demonstrating the use of external multimedia content. A Contact
          section contains a contact form alongside an embedded map showing the
          location. The website concludes with a footer containing additional
          page information. The project was styled using both inline CSS and
          external CSS, providing hands-on experience with different approaches
          to webpage styling and layout. Overall, this project represents my
          first practical experience in building a complete frontend webpage and
          helped me develop a foundation in HTML structure, CSS styling,
          multimedia integration, embedded content, and basic JavaScript.
        </p>
      </section>

      {/* Key Features */}
      <section className="detail-section">
        <h2 className="detail-section-title">Key Features</h2>
        <ul className="detail-list">
          <li>
            <b>Custom SVG Logo:</b> A custom logo created using SVG and
            integrated into the website header.
          </li>
          <li>
            <b>Skincare Brand Section:</b> Presentation of different skincare
            brands in a dedicated section.
          </li>
          <li>
            <b>Product Table:</b>Skincare products organized using HTML tables
            with rows and data cells for structured presentation.
          </li>
          <li>
            <b>Multimedia Integration:</b>Includes a locally stored video and a
            second video embedded directly from YouTube.
          </li>
        </ul>
      </section>
    </div>
  );
}
