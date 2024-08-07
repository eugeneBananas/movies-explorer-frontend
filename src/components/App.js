import React, { useState, Link, useEffect, useContext } from "react";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Header from "./Header/Header.js";
// import Startblock from "./Startblock/Startblock.js";
// import Info from "./Info/Info.js";
import Footer from "./Footer/Footer.js";
import Main from "./Main/Main.js";
import Search from "./Search/Search.js";
import Filmblock from "./Filmblock/Filmblock.js";
import ButtonMore from "./ButtonMore/ButtonMore.js";
import Account from "./Account/Account.js";
import Register from "./Register/Register.js";
import NotFoundedPage from "./NotFoundedPage/NotFoundedPage.js";
import { UserState } from "../contexts/IsUserLoggedIn.js";

export default function App() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkedBurgerMenu, setCheckedBurgerMenu] = useState(false);

  useEffect(() => {
    if (checkedBurgerMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [checkedBurgerMenu]);

  return (
    <UserState.Provider value={loggedIn}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                checkedBurgerMenu={checkedBurgerMenu}
                setCheckedBurgerMenu={setCheckedBurgerMenu}
              />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header
                checkedBurgerMenu={checkedBurgerMenu}
                setCheckedBurgerMenu={setCheckedBurgerMenu}
              />
              <Search />
              <Filmblock />
              <ButtonMore />
              <Footer />
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <Header
                checkedBurgerMenu={checkedBurgerMenu}
                setCheckedBurgerMenu={setCheckedBurgerMenu}
              />
              <Search />
              <Filmblock />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header
                checkedBurgerMenu={checkedBurgerMenu}
                setCheckedBurgerMenu={setCheckedBurgerMenu}
              />
              <Account setLoggedIn={setLoggedIn} />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <Register setLoggedIn={setLoggedIn} />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <NotFoundedPage />
            </>
          }
        />
      </Routes>

      {/* <Header setLoggedIn={false} />
      <Startblock />
      <Main />
      <Info />
      <Footer /> */}

      {/* <Search />
      <Filmblock/>
      <ButtonMore />
      <Footer /> */}

      {/* <Search />
      <Filmblock />
      <Footer /> */}

      {/* <Account /> */}

      {/* <Register /> */}

      {/* <NotFoundedPage /> */}
    </UserState.Provider>
  );
}
