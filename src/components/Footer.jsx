import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a
          href="https://github.com/kevinsilva"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="github-logo"
            src="/logo-github.svg"
            alt="github-logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kevinsilva-j/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="linkedin-logo"
            src="/logo-linkedin.svg"
            alt="linkedin-logo"
          />
        </a>
      </div>
      <div className="footer__copy">
        <p className="copyright">
          &#169;{new Date().getFullYear()} Kevin Silva
        </p>
      </div>
      <div className="logo-container">
        <img className="logo-secondary" src="/logo.svg" alt="logo" />
      </div>
    </footer>
  );
}
