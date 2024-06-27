import "./Info.css";
import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/male.jpg";

function Info() {
  return (
    <main className="info">
      {/* <nav className="info__nav">
        <a href="#about" className="info__nav-link" >
          О проекте
        </a>
        <a href="#tech" className="info__nav-link">
          Технологии
        </a>
        <a href="#student" className="info__nav-link">
          Студент
        </a>
      </nav> */}

      <section className="info__project" id="about">
        <h2 className="info__title">О проекте</h2>
        <div className="info__project-grid">
          <h3 className="info__project-subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <h3 className="info__project-subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="info__project-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
          <p className="info__project-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
        <div className="info__project-progress">
          <p className="info__project-bar info__project-bar_blue">1 неделя</p>
          <p className="info__project-bar info__project-bar_grey">4 недели</p>
          <span className="info__project-span">Back-end</span>
          <span className="info__project-span">Front-end</span>
        </div>
      </section>

      <section className="info__tech" id="tech">
        <h2 className="info__title">Технологии</h2>
        <div className="info__tech-text">
          <h3 className="info__tech-title">7 технологий</h3>
          <p className="info__tech-subtitle">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <div className="info__technologies">
          <p className="info__technology">HTML</p>
          <p className="info__technology">CSS</p>
          <p className="info__technology">JS</p>
          <p className="info__technology">React</p>
          <p className="info__technology">Git</p>
          <p className="info__technology">Express.js</p>
          <p className="info__technology">mongoDB</p>
        </div>
      </section>

      <section className="info__student" id="student">
        <h2 className="info__title">Студент</h2>
        <div className="info__student-grid">
          <p className="info__student-name">Виталий</p>
          <p className="info__student-about">Фронтенд-разработчик, 30 лет</p>
          <p className="info__student-text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб&#8209;разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link to="/" className="info__student-github">
            Github
          </Link>
          <img src={image} className="info__student-image" alt="Фото студента" />
        </div>
        <h3 className="info__student-portfolio">Портфолио</h3>
        <nav className="info__student-links">
          <Link to="/" className="info__student-link">
            <p className="info__student-textlink">Статичный сайт</p>
            <button type="button" className="info__student-button"></button>
          </Link>
          <Link to="/" className="info__student-link">
            <p className="info__student-textlink">Адаптивный сайт</p>
            <button type="button" className="info__student-button"></button>
          </Link>
          <Link
            to="/"
            className="info__student-link info__student-link_decoration_none"
          >
            <p className="info__student-textlink">Одностраничное приложение</p>
            <button type="button" className="info__student-button"></button>
          </Link>
        </nav>
      </section>
    </main>
  );
}

// export default Info;
