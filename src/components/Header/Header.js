import "./Header.css";
import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";
import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserState } from "../../contexts/IsUserLoggedIn.js";

function Header({ checkedBurgerMenu, setCheckedBurgerMenu }) {
  const userStatement = useContext(UserState);
  const location = useLocation();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCheckboxChange = () => {
    setCheckedBurgerMenu(!isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`header ${location.pathname === "/" ? "header_startpage" : ""}`}
    >
      <div className={`header__overlay ${ checkedBurgerMenu ? "header__overlay_is_checked" : ""}`}></div>
      <section className="header__container">
        <Link to="/" className="header__logo"/>
        {/* <img src={logo} className="header__logo" alt="Логотип" /> */}
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
          <input
            className={`header__checkbox`}
            type="checkbox"
            onChange={handleCheckboxChange}
            name="burger-menu"
            checked={isMenuOpen}
          />
          <div
            className={`header__hamburger-lines ${
              checkedBurgerMenu && "header__hamburger-lines_is_checked"
            }`}
          >
            <span className="header__line header__line1"></span>
            <span className="header__line header__line2"></span>
            <span className="header__line header__line3"></span>
          </div>
          <div className="header__menu-items">
            <ul className="header__ul">
              <li className="header__li-element">
                <Link
                  className={`header__link-element ${
                    location.pathname === "/" && "header__link-element_chosen"
                  }`}
                  to="/"
                  onClick={handleCheckboxChange}
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
                  onClick={handleCheckboxChange}
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
                  onClick={handleCheckboxChange}
                >
                  Сохраненные фильмы
                </Link>
              </li>
            </ul>
            <div className="header__li-element">
              <Link
                to="/profile"
                className="header__button header__button_in_burger"
                onClick={handleCheckboxChange}
              >
                <img className="header__account" src={profile} alt="Аккаунт" />
                <p className="header__button-text">Аккаунт</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
