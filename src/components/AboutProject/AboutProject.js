import "./AboutProject.css";
import React from "react";

function AboutProject() {
  return (
    <section className="aboutproject" id="about">
      <h2 className="aboutproject__title">О проекте</h2>
      <div className="aboutproject__grid">
        <h3 className="aboutproject__subtitle aboutproject__subtitle_first">
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className="aboutproject__subtitle aboutproject__subtitle_second">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="aboutproject__text aboutproject__text_first">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="aboutproject__text aboutproject__text_second">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="aboutproject__progress">
        <p className="aboutproject__bar aboutproject__bar_blue">1 неделя</p>
        <p className="aboutproject__bar aboutproject__bar_grey">4 недели</p>
        <span className="aboutproject__span">Back-end</span>
        <span className="aboutproject__span">Front-end</span>
      </div>
    </section>
  );
}

export default AboutProject;
