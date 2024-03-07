import "./NotFoundedPage.css";
import React from "react";
import { Link } from "react-router-dom";

function NotFoundedPage() {
  return (
    <section className="notfoundedpage">
      <h2 className="notfoundedpage__404">404</h2>
      <span className="notfoundedpage__span"> Страница не найдена</span>
      <Link to="/" className="notfoundedpage__link">
        Назад
      </Link>
    </section>
  );
}

export default NotFoundedPage;
