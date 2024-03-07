import "./Account.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Film({ setLoggedIn }) {
  const [formValue, setFormValue] = useState({
    name: "Виталий",
    email: "pochta@yandex.ru",
  });
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  const handleChange = (inputName) => (e) => {
    const name = inputName;
    const value = e.target.value;

    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <section className="account">
      <p className="account__hello">Привет, Виталий!</p>
      <form className="account__form">
        <label className="account__name">
          <span className="account__text">Имя</span>
          <input
            className="account__input"
            placeholder="Имя"
            pattern=".*\S+.*"
            name="account__input-name"
            onChange={handleChange("name")}
            value={formValue.name}
            minLength="2"
            maxLength="64"
            required
            disabled={!isButtonClicked}
          />
        </label>
        <label className="account__email">
          <span className="account__text">E-mail</span>
          <input
            className="account__input"
            placeholder="Почта"
            pattern=".*\S+.*"
            name="account__input-email"
            onChange={handleChange("email")}
            value={formValue.email}
            minLength="3"
            maxLength="64"
            required
            disabled={!isButtonClicked}
          />
        </label>

        <button
          className={`account__save ${
            !isButtonClicked && "account__save_display_none"
          }`}
          onClick={handleButtonClick}
          type="button"
        >
          Сохранить
        </button>
      </form>
      <button
        className={`account__edit ${
          isButtonClicked && "account__edit_display_none"
        }`}
        onClick={handleButtonClick}
      >
        Редактировать
      </button>
      <Link
        to="/"
        className={`account__exit ${
          isButtonClicked && "account__exit_display_none"
        }`}
        onClick={handleLogout}
      >
        Выйти из аккаунта
      </Link>
    </section>
  );
}

export default Film;
