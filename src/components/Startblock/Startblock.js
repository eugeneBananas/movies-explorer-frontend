import "./Startblock.css";
import React, { useState, useEffect } from "react";
import startblock from "../../images/startblock.svg";

function Startblock() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <section className="startblock">
      <img className="startblock__logo" src={startblock} alt="блок" />
      <p className="startblock__title">
        Учебный проект студента факультета Веб&#8209;разработки.
      </p>
      {/* <pre className="startblock__title">
        {windowSize < 321
        ? `Учебный проект
студента факультета
Веб\u2011разработки.`
        : `Учебный проект студента
факультета\u00A0Веб\u2011разработки.`}
      </pre> */}
    </section>
  );
}

export default Startblock;
