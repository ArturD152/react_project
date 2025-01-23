import React from "react";
import Nav from "./Nav";
import Info from "./Info";
import logo from "../assets/img/logo.png";
import burger from "../assets/img/burger.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
    <header className="header">
      <div className="header__links-info">
        <Nav />
        <Info />
      </div>
      <div className="header__btns-search">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__adaptive">
          <a href="./form/index.html">
            <button className="header__btn">Связаться с нами</button>
          </a>
          <button className="header__burger" id="burger">
            <img src={burger} alt="" id="burger-icon" />
          </button>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;