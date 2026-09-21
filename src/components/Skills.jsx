export default function Skills() {
  const skillCategories = [
    {
      category: "Full-Stack Web Development",
      skills: [
        "React.js ",
        "JavaScript (ES6+) ",
        "Node.js ",
        "Express.js ",
        "MongoDB ",
        "PHP ",
        "Laravel ",
        "HTML5 & CSS3 ",
      ],
    },
    {
      category: "Engineering & Architecture",
      skills: [
        "REST APIs ",
        "JWT Authentication ",
        "Git & GitHub ",
        "Database Design ",
        "Responsive Web Design ",
      ],
    },
    {
      category: "Graphic Design & Multimedia",
      skills: [
        "Adobe Photoshop ",
        "Adobe Illustrator ",
        "Logo & Brand Design ",
        "Video Editing",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills & Expertise</h2>
      <p className="section-subtitle">
        Technologies, tools, and design software I work with
      </p>

      <div className="skills-grid">
        {skillCategories.map((group, index) => (
          <div key={index} className="skill-category-card">
            <h3>{group.category}</h3>
            <div className="skills-list">
              {group.skills.map((skill, idx) => (
                <span key={idx} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}