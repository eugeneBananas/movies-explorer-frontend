import "./Header.css";
import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";
import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserState } from "../../contexts/IsUserLoggedIn.js";

function Header() {
  const userStatement = useContext(UserState);
  const location = useLocation();
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`header ${location.pathname === "/" && "header_startpage"}`}
    >
      <section className="header__container">
        <img src={logo} className="header__logo" alt="Логотип" />
        {userStatement && windowSize > 1279 && (
          <nav className="header__menu">
            <Link
              to="/movies"
              className={`header__option ${
                location.pathname === "/movies" && "header__option_is_active"
              }`}
            >
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              className={`header__option ${
                location.pathname === "/saved-movies" &&
                "header__option_is_active"
              }`}
            >
              Сохраненные фильмы
            </Link>
          </nav>
        )}
      </section>

      {!userStatement ? (
        <nav className="header__navigation">
          <Link to="/signup" className="header__registration">
            Регистрация
          </Link>
          <Link to="/signin" className="header__login">
            Войти
          </Link>
        </nav>
      ) : windowSize > 1279 ? (
        <Link to="/profile" className="header__button">
          <img className="header__account" src={profile} alt="Аккаунт" />
          <p className="header__button-text">Аккаунт</p>
        </Link>
      ) : (
        <div className="header__burger-box">
          <input className="header__checkbox" type="checkbox" name="" id="" />
          <div className="header__hamburger-lines">
            <span className="header__line header__line1"></span>
            <span className="header__line header__line2"></span>
            <span className="header__line header__line3"></span>
          </div>
          <div className="header__menu-items">
            <div>
              <li className="header__li-element">
                <Link
                  className={`header__link-element ${
                    location.pathname === "/" && "header__link-element_chosen"
                  }`}
                  to="/"
                >
                  Главная
                </Link>
              </li>
              <li className="header__li-element">
                <Link
                  className={`header__link-element ${
                    location.pathname === "/movies" &&
                    "header__link-element_chosen"
                  }`}
                  to="/movies"
                >
                  Фильмы
                </Link>
              </li>
              <li className="header__li-element">
                <Link
                  className={`header__link-element ${
                    location.pathname === "/saved-movies" &&
                    "header__link-element_chosen"
                  }`}
                  to="/saved-movies"
                >
                  Сохраненные фильмы
                </Link>
              </li>
            </div>
            <li className="header__li-element">
              <Link
                to="/profile"
                className="header__button header__button_in_burger"
              >
                <img className="header__account" src={profile} alt="Аккаунт" />
                <p className="header__button-text">Аккаунт</p>
              </Link>
            </li>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
