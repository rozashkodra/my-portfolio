export default function About() {
  const coreStrengths = [
    {
      title: "Problem Solver & Detail-Oriented",
      desc: "I enjoy breaking down complex requirements into clean, scalable code and paying close attention to UI details.",
    },
    {
      title: "Strong Communicator & Team Player",
      desc: "Collaborative by nature, I value clear communication, actively listening, and working effectively with cross-functional teams.",
    },
    {
      title: "Adaptable & Growth-Minded",
      desc: "Tech evolves fast. I am always eager to learn new tools, embrace feedback, and continuously improve my skill set.",
    },
    {
      title: "Client & User-Focused",
      desc: "Whether designing a logo or building a web app, I always keep the end-user’s experience and business goals front and center.",
    },
  ];

  return (
    <section id="about" className="about">
      <h2 className="section-title">About me</h2>
      <p className="section-subtitle">
        Bridging full-stack development & visual design
      </p>

      {/* Background Summary */}
      <div className="about-content">
        <p>
          I am a software engineer and web developer with a bachelor's degree in
          computer science.I specialize in building robust full-stack
          applications, with deep expertise spanning both frontend and backend
          development, RESTful APIs, and secure authentication systems.
        </p>
        <p style={{marginTop: "10px"}}>Passionate about writing clean, maintainable code, I enjoy bringing
          ideas to life—from conceptualizing database architectures and user
          interfaces to deploying fully functional web platforms like SpendWise,
          MathQuest and NutriAI. My technical toolkit centers around modern
          JavaScript technologies, including React, Node.js, Express, and
          MongoDB, alongside PHP and Laravel for diverse backend workflows.</p>
        <p style={{ marginTop: "10px" }}>
          Beyond coding, I also bring a strong eye for visual detail through
          graphic design and multimedia creation using the Adobe Creative Suite,
          allowing me to bridge the gap between technical functionality and
          sleek, intuitive user experiences
        </p>
      </div>

      {/* Personal Strengths Grid */}
      <div style={{ marginTop: "40px" }}>
        <h3
          style={{
            color: "var(--silver)",
            fontSize: "22px",
            marginBottom: "20px",
          }}
        >
          Core Strengths & Mindset
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {coreStrengths.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "var(--ebony)",
                padding: "20px",
                borderRadius: "8px",
                border: "1px solid var(--granite)",
              }}
            >
              <h4
                style={{
                  color: "var(--silver)",
                  marginBottom: "8px",
                  fontSize: "16px",
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  color: "var(--granite)",
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
