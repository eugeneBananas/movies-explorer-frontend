import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__bottom">
        <p className="footer__year">&copy; 2024</p>
        <nav className="footer__nav">
          <Link
            to="https://practicum.yandex.ru/"
            target="_blank"
            className="footer__link"
          >
            Яндекс.Практикум
          </Link>
          <Link
            to="https://github.com/"
            target="_blank"
            className="footer__link"
          >
            Github
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
