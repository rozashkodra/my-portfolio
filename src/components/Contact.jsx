import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "rozafe.shkodra@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Interested in collaborating or have a job opportunity? Let's connect.
      </p>

      <div className="contact-links" style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '25px' }}>
        <a href={`mailto:${email}`} className="button">
          Send Email
        </a>

        <button 
          onClick={handleCopy} 
          className="button" 
          style={{ backgroundColor: 'var(--charcoal)', border: '1px solid var(--granite)', cursor: 'pointer' }}
        >
          {copied ? '✓ Email Copied!' : 'Copy Email'}
        </button>

        <a 
          href="https://linkedin.com/in/rozafe-shkodra" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="button"
          style={{ backgroundColor: 'var(--eggplant)', border: '1px solid var(--granite)' }}
        >
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
}