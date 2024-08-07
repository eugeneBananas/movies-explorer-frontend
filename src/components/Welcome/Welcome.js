import "./Welcome.css";
import React from "react";
import logo from "../../images/logo.svg";
import { useLocation } from "react-router-dom";

function Welcome() {
  const location = useLocation();

  return (
    <section className="welcome">
      <img src={logo} className="welcome__logo" alt="Логотип" />
      <h1 className="welcome__title">
        {location.pathname === "/signup"
          ? "Добро пожаловать!"
          : "Рады видеть!"}
      </h1>
    </section>
  );
}

export default Welcome;
