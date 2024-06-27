import "./Filmblock.css";
import React, { useState } from "react";
import Film from "../Film/Film.js";
import { useLocation } from "react-router-dom";

function Filmblock({ isSaved }) {
  const location = useLocation();
  const [films, setFilms] = useState([
    { id: 1, name: "33 слова о дизайне", duration: "1ч42м" },
    { id: 2, name: "33 слова о дизайне", duration: "1ч42м" },
    { id: 3, name: "33 слова о дизайне", duration: "1ч42м" },
    { id: 4, name: "33 слова о дизайне", duration: "1ч42м" },
    { id: 5, name: "33 слова о дизайне", duration: "1ч42м" },
    { id: 6, name: "33 слова о дизайне", duration: "1ч42м" },
  ]);

  const handleDeleteFilm = (filmId) => {
    setFilms(films.filter((film) => film.id !== filmId));
  };

  return (
    <main className={`filmblock ${location.pathname === '/saved-movies' && "filmblock_saved"}`}>
      <div className="filmblock__grid">
        {films.map((film) => (
          <Film
            key={film.id}
            name={film.name}
            duration={film.duration}
            onDelete={() => handleDeleteFilm(film.id)}
          />
        ))}
      </div>
    </main>
  );
}

export default Filmblock;
