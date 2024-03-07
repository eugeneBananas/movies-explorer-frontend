import "./NavTab.css";
import React from "react";

function NavTab() {
  return (
    <nav className="navtab">
      <a href="#about" className="navtab__link">
        О проекте
      </a>
      <a href="#tech" className="navtab__link">
        Технологии
      </a>
      <a href="#student" className="navtab__link">
        Студент
      </a>
    </nav>
  );
}

export default NavTab;
