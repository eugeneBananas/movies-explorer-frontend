import "./EntryForm.css";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function EntryForm({ setLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    name: "Виталий",
    email: "pochta@yandex.ru",
    password: "••••••••••••••",
  });

  const handleChange = (inputName) => (e) => {
    const name = inputName;
    const value = e.target.value;

    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = (str) => (e) => {
    if (location.pathname === "/signin") {
      setLoggedIn(true);
    }
    e.preventDefault();
    navigate(str);
  };

  return (
    <form className="entry-form">
      {location.pathname === "/signup" && (
        <label className="entry-form__label">
          <span className="entry-form__span">Имя</span>
          <input
            type="text"
            className="entry-form__input"
            pattern=".*\S+.*"
            name="account__input-name"
            onChange={handleChange("name")}
            value={formValue.name}
            minLength="2"
            maxLength="64"
            required
          />
          <span className="entry-form__error">Что-то пошло не так...</span>
        </label>
      )}
      <label className="entry-form__label">
        <span className="entry-form__span">E-mail</span>
        <input
          type="email"
          className="entry-form__input"
          pattern=".*\S+.*"
          name="account__input-email"
          onChange={handleChange("email")}
          value={formValue.email}
          minLength="2"
          maxLength="64"
          required
        />
        <span className="entry-form__error entry-form__error_display_off">
          Что-то пошло не так...
        </span>
      </label>
      <label className="entry-form__label">
        <span className="entry-form__span">Пароль</span>
        <input
          type="password"
          className="entry-form__input"
          pattern=".*\S+.*"
          name="account__input-email"
          onChange={handleChange("password")}
          value={formValue.password}
          minLength="6"
          maxLength="64"
          required
        />
        <span className="entry-form__error">Что-то пошло не так...</span>
      </label>
      <button
        type="submit"
        className={`entry-form__button ${
          location.pathname === "/signin" && "entry-form__button_extended"
        }`}
        onClick={
          location.pathname === "/signup"
            ? handleClick("/signin")
            : handleClick("/movies")
        }
      >
        {location.pathname === "/signup" ? "Зарегистрироваться" : "Войти"}
      </button>
      <div className="entry-form__container">
        <span className="entry-form__change-span">
          {location.pathname === "/signup"
            ? "Уже зарегистрированы?"
            : "Еще не зарегистрированы?"}
        </span>
        <Link
          to={`${location.pathname === "/signup" ? "/signin" : "/signup"}`}
          className="entry-form__change-link"
        >
          {location.pathname === "/signup" ? "Войти" : "Регистрация"}
        </Link>
      </div>
    </form>
  );
}

export default EntryForm;
