import "./AboutMe.css";
import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/male.jpg";

function AboutMe() {
  return (
    <section className="aboutme" id="student">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__grid">
        <p className="aboutme__name">Виталий</p>
        <p className="aboutme__about">Фронтенд-разработчик, 30 лет</p>
        <p className="aboutme__text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С&nbsp;2015 года работал в компании «СКБ
          Контур». После того, как прошёл курс по веб&#8209;разработке, начал
          заниматься фриланс&#8209;заказами и ушёл с постоянной работы.
        </p>
        <Link
          to="https://github.com/eugeneBananas"
          target="_blank"
          className="aboutme__github"
        >
          Github
        </Link>
        <img src={image} className="aboutme__image" alt="Фото" />
      </div>
      <h3 className="aboutme__portfolio">Портфолио</h3>
      <nav className="aboutme__links">
        <Link
          to="https://github.com/eugeneBananas/how-to-learn"
          target="_blank"
          className="aboutme__link"
        >
          <p className="aboutme__textlink">Статичный сайт</p>
          <button type="button" className="aboutme__button"></button>
        </Link>
        <Link
          to="https://github.com/eugeneBananas/russian-travel"
          target="_blank"
          className="aboutme__link"
        >
          <p className="aboutme__textlink">Адаптивный сайт</p>
          <button type="button" className="aboutme__button"></button>
        </Link>
        <Link
          to="https://github.com/eugeneBananas/react-mesto-api-full-gha"
          target="_blank"
          className="aboutme__link aboutme__link_decoration_none"
        >
          <p className="aboutme__textlink">Одностраничное приложение</p>
          <button type="button" className="aboutme__button"></button>
        </Link>
      </nav>
    </section>
  );
}

export default AboutMe;
