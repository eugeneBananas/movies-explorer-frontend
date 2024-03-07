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
      <div className="techs__technologies">
        <p className="techs__technology">HTML</p>
        <p className="techs__technology">CSS</p>
        <p className="techs__technology">JS</p>
        <p className="techs__technology">React</p>
        <p className="techs__technology">Git</p>
        <p className="techs__technology">Express.js</p>
        <p className="techs__technology techs__technology_box_last">mongoDB</p>
      </div>
    </section>
  );
}

export default Techs;
