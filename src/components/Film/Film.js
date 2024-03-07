import "./Film.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

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
      <div className="film__image"></div>
      <div className="film__container">
        <p className="film__name">{name}</p>
        {location.pathname === '/movies' ? (
          <button
            className={`film__button ${
              isButtonClicked ? "film__button_add_on" : "film__button_add_off"
            }`}
            onClick={handleButtonClick}
          />
        ) : (
          <button className="film__button film__button_remove_on" onClick={handleButtonClick} />
        )}
      </div>
      <span className="film__duration">{duration}</span>
    </section>
  );
}

export default Film;
