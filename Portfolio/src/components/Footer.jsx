import React from "react";
import "./Footer.css";
import githubLogo from "../images/GitHub logo.png";
import linkedinLogo from "../images/linkedin.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-title">Contact me</p>
        <div className="footer-links">
          <a
            href="https://github.com/sinterma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubLogo}
              alt="GitHub logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kseniia-fedotovskaia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn"
            />
          </a>
          <div className="contact-item">
            <span className="label">Phone:</span>
            <a href="tel:+491785988786">+49 178 598 8786</a>
          </div>
          <div className="contact-item">
            <span className="label">Email:</span>
            <a href="mailto:sinterma@gmail.com">sinterma@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Kseniia Fedotovskaia. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
