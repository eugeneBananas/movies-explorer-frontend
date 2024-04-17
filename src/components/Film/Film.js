import "./Film.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import filmImage from "../../images/film-image.jpg";

function Film({ name, duration, onDelete }) {
  const location = useLocation();
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    if (location.pathname === '/saved-movies') {
      onDelete();
    } else {
      setIsButtonClicked(!isButtonClicked);
    }
  };

  return (
    <section className="film">
      <img className="film__image" src={filmImage} alt={name}/>
      <div className="film__container">
        <h2 className="film__name">{name}</h2>
        {location.pathname === '/movies' ? (
          <button
            className={`film__button ${
              isButtonClicked ? "film__button_add_on" : "film__button_add_off"
            }`}
            onClick={handleButtonClick}
            type="button"
          />
        ) : (
          <button className="film__button film__button_remove_on" onClick={handleButtonClick} type="button"/>
        )}
      </div>
      <span className="film__duration">{duration}</span>
    </section>
  );
}

export default Film;
