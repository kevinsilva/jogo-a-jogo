import '../styles/Footer.scss';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__credits">
        <p className="copyright">
          &#169;{new Date().getFullYear()} Kevin Silva 🔵 special thanks to
          &nbsp;
          <a
            href="https://www.linkedin.com/in/williamrjribeiro/"
            target="_blank"
          >
            William R. J. Ribeiro
          </a>
        </p>
      </div>
      <div className="footer__social">
        <a href="https://github.com/kevinsilva" target="_blank">
          <img
            className="github-logo"
            src="src/assets/logo-github.svg"
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/kevinsilva-j/" target="_blank">
          <img
            className="linkedin-logo"
            src="src/assets/logo-linkedin.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
