import React from "react";
import { Link } from "react-router-dom";

export default function CanvasCritiqueDetails() {
  const techStack = [
    "React.js",
    "Vite",
    "HTML5",
    "CSS3",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socker.io",
  ];

  return (
    <div className="project-detail-container">
      {/* Navigation Link */}
      <Link to="/" className="detail-back-link">
        ← Back to Projects
      </Link>

      {/* Header Section */}
      <header className="detail-header">
        <h1 className="detail-title">PinPoint</h1>
        <p className="detail-subtitle">
          A real-time collaborative workspace that centralizes design feedback
          by allowing teams to pin live, contextual comments directly onto
          mockups. It eliminates scattered email threads and revision confusion,
          keeping everyone aligned from the first draft to final sign-off.
        </p>
        <p className="detail-tech-lead">
          The PinPoint platform was developed using web technologies, consisting
          of:
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
            src="https://www.youtube.com/embed/eCC3dJflzA0?si=PmP3Eciu4N1LlMfM"
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
          PinPoint is a full-stack, real-time collaborative workspace designed
          to streamline project reviews, design feedback, and version control
          for developers, designers, and clients. It eliminates the friction of
          juggling scattered communication channels—such as Figma links, Trello
          boards, Slack messages, and messy Git commit histories—by
          consolidating everything into a single, interactive canvas.Built using
          modern web technologies, PinPoint leverages a robust MERN-stack
          architecture complemented by real-time event-driven
          communication.{" "}
        </p>
        <p className="detail-text">
          Rather than digging through legacy folders or Git branches to compare
          historical iterations, PinPoint features a built-in Version Switcher:
          Version 1 (v1.0 - Wireframes), Version 2 (v2.0 - High-Fidelity UI),
          Version 3 (v3.0 - Live Release Candidate). Benefit:
          Stakeholders can instantly toggle between v1.0, v2.0, and v3.0
          directly inside the canvas to review how specific components (like a
          navigation bar) evolved over time.Real-Time Pinned Commenting &
          Collaboration.Contextual Feedback: Reviewers can click directly on
          mockups to drop precise pins and leave actionable feedback,nstant Sync
          via WebSockets: Powered by Socket.io, new comments and replies
          populate across connected screens instantaneously without requiring
          page refreshes.PinPoint bridges the gap between early design
          conceptualization and active development task management. By providing
          real-time synchronization, version auditing, and contextual feedback
          in one unified interface, it cuts down review cycles, keeps clients
          happy, and keeps development teams fully aligned.
        </p>
      </section>

      {/* Key Features */}
      <section className="detail-section">
        <h2 className="detail-section-title">Key Features</h2>
        <ul className="detail-list">
          <li>
            <b>Interactive Project Dashboard & Canvas: </b>
            Instant workspace initialization that provisions a dedicated project
            document and assigns a unique MongoDB _id upon creation.
          </li>
          <li>
            Direct routing into a unified, all-in-one interactive canvas that
            bridges early design planning with active task management.
          </li>
          <li>
            <b>Built-in Version Switcher:</b> Version 1 (v1.0 - Wireframes):
            Early black-and-white layout sketches for agreeing on core page
            structure and UX flows.
          </li>
          <li>
            Version 2 (v2.0 - High-Fidelity UI): Polished frontend designs
            featuring actual typography, product grids, and branding elements.
          </li>
          <li>
            Version 3 (v3.0 - Live Release Candidate): Fully integrated versions
            connected to live APIs, databases, and functional elements.
          </li>
          <li>
            <b>Contextual Pinned Commenting:</b> Enables reviewers and clients
            to click directly on specific mockup coordinates to drop precise,
            actionable feedback pins (e.g., color adjustments, spacing tweaks).
          </li>
          <li>
            <b>Zero-Refresh Real-Time Synchronization:</b> Powered by Socket.io
            and WebSockets, ensuring new comments, status updates, and replies
            populate across all connected client screens instantaneously without
            requiring page reloads.
          </li>
        </ul>
      </section>
    </div>
  );
}
