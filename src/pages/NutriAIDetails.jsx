import React from "react";
import { Link } from "react-router-dom";

export default function NutriAIDetails() {
  const techStack = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MERN Stack",
    "REST API",
    "JWT",
    "Spoonacular API",
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
          NutriAI: Web Application for Nutrition Planning, Recipe Management,
          and Nutritional Calculation
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
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VXLFFaw6dhw?si=g2sNcxWDDUGfOGNs"
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
          NutriAI is a full-stack web application developed as my Computer
          Science diploma project, with the goal of creating a digital platform
          that helps users manage their nutrition, discover suitable meals, and
          organize their daily and weekly meal plans. The application combines
          nutritional calculations, recipe discovery, meal organization, and
          personalized dietary information into one platform, providing users
          with practical tools for managing their everyday nutrition.The
          application allows users to create accounts and securely manage their
          personal data using JWT authentication. Users can search for recipes,
          view nutritional information, and save their favorite meals. The
          application integrates the Spoonacular API to provide a wide range of
          recipes and food-related data.
        </p>
        <p className="detail-text">
          One of the main features of NutriAI is the nutrition calculator, which
          helps users determine their estimated daily nutritional requirements.
          The calculator focuses on important nutritional values such as
          calories, protein, carbohydrates, and fats, helping users understand
          their daily targets and use them when planning their meals. Another
          important feature is the weekly meal planner, which allows users to
          organize their meals according to different days of the week and meal
          categories. This provides a structured way to plan meals in advance
          and keep track of their planned meals. The application also includes a
          dedicated PCOS nutrition section, providing information and dietary
          recommendations related to PCOS.
        </p>
        <p className="detail-text">
          NutriAI was developed using the MERN stack, consisting of MongoDB,
          Express.js, React, and Node.js. JWT authentication was implemented to
          manage secure user sessions and protect user-specific functionality.
          For the user interface, I used Tailwind CSS together with DaisyUI to
          create a responsive and consistent design. Through the development of
          NutriAI, I gained practical experience in full-stack web development,
          including frontend development with React, backend development with
          Node.js and Express.js, database management with MongoDB, REST API
          integration, authentication and authorization with JWT, and responsive
          interface development. The project also gave me the opportunity to
          work with an external API, connect different application layers, and
          develop a complete functional web application from concept to
          implementation.
        </p>
      </section>

      {/* Key Features */}
      <section className="detail-section">
        <h2 className="detail-section-title">Key Features</h2>
        <ul className="detail-list">
          <li>
            <b>User Authentication:</b> Secure registration and login using JWT
            authentication.
          </li>
          <li>
            <b>Recipe Search:</b> Search and explore a wide range of recipes
            using the Spoonacular API.
          </li>
          <li>
            <b>Nutritional Information:</b> View calories, protein,
            carbohydrates, fats, and other nutritional details for recipes.
          </li>
          <li>
            <b>Nutrition Calculator:</b> Calculate estimated daily calorie and
            macronutrient requirements.
          </li>
          <li>
            <b>Saved Recipes:</b> Save favorite recipes for quick and easy
            access.
          </li>
          <li>
            <b>Weekly Meal Planner:</b> Organize meals by day and meal category
            for structured weekly planning.
          </li>
          <li>
            <b>PCOS Nutrition:</b> Dedicated section with information and
            nutrition-related recommendations for PCOS.
          </li>
          <li>
            <b>Responsive Design:</b> Responsive and user-friendly interface
            built with React, Tailwind CSS, and DaisyUI.
          </li>
          <li>
            <b>Contact Form:</b> Allows users to submit messages through the
            application.
          </li>
        </ul>
      </section>
    </div>
  );
}
