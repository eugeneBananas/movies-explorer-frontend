import "./Techs.css";
import React from "react";

function Techs() {
  return (
    <section className="techs" id="tech">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__text">
        <h3 className="techs__7tech">7 технологий</h3>
        <p className="techs__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className="techs__technologies">
        <li className="techs__technology">HTML</li>
        <li className="techs__technology">CSS</li>
        <li className="techs__technology">JS</li>
        <li className="techs__technology">React</li>
        <li className="techs__technology">Git</li>
        <li className="techs__technology">Express.js</li>
        <li className="techs__technology techs__technology_box_last">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
