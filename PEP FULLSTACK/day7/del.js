import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Header show/hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Smooth scroll
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  // Contact form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }
    alert("Message Sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      {/* Header */}
      <header className={showHeader ? "header show" : "header hide"}>
        <h2>My Portfolio</h2>
        <nav>
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>

        {/* External Links */}
        <div className="social">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </header>

      {/* Landing Section */}
      <section id="home" className="section">
        <img
          src="https://via.placeholder.com/150"
          alt="avatar"
          className="avatar"
        />
        <h1>Your Name</h1>
        <p>Frontend Developer passionate about building web applications.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="card">
              <h3>Project {item}</h3>
              <p>Short project description</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default App;