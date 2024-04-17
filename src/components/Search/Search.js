import "./Search.css";
import React from "react";
import lupa from "../../images/lupa.svg";

function Search() {
  return (
    <form className="search">
      <div className="search__bar">
        <img className="search__img" src={lupa} alt="Лупа" />
        <div className="search__container">
          <input className="search__input" placeholder="Фильм" />
          <button type="button" className="search__button" />
        </div>
        <label className="search__smalltumb search__smalltumb_pc_vers">
          <input type="checkbox" className="search__checkbox" />
          <span className="search__circle"></span>
        </label>
        <p className="search__option search__option_pc_vers">Короткометражки</p>
      </div>
      <div className="search__display">
        <label className="search__smalltumb search__smalltumb_phone_vers">
          <input type="checkbox" className="search__checkbox" />
          <span className="search__circle"></span>
        </label>
        <p className="search__option search__option_phone_vers">
          Короткометражки
        </p>
      </div>
    </form>
  );
}

export default Search;
