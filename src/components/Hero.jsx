export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="small-text">Software Engineer & Web Designer</p>
        <h1>
          Hi, I'm <span>Rozafë Shkodra.</span>
        </h1>
        <p className="hero-description">
I'm a web developer who loves building responsive, intuitive web applications and turning complex problems into clean user experiences.        </p>
        <a href="#projects" className="button">
          View my work
        </a>
      </div>

      <div className="hero-image">
        <img src="/profile.jpg" alt="Rozafe Shkodra" />
      </div>
    </section>
  );
}