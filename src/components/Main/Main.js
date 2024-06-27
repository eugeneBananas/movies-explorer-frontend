import "./Main.css";
import React from "react";
import NavTab from "../NavTab/NavTab.js";
import AboutProject from "../AboutProject/AboutProject.js";
import Techs from "../Techs/Techs.js";
import AboutMe from "../AboutMe/AboutMe.js";
import Startblock from "../Startblock/Startblock.js";

function Main() {
  return (
    <main>
      <Startblock />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;
