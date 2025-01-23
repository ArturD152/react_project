import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="header__nav" id="menu">
      <ul className="header__item" id="navLinks">
        <Link to="/" className="header__link">
          <li>Главная</li>
        </Link>
        <Link to="/about" className="header__link">
          <li>О компании</li>
        </Link>
        <Link to="/contacts" className="header__link">
          <li>Контакты</li>
        </Link>
        <Link to="/attractions" className="header__link">
          <li>Достопримечательности</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;