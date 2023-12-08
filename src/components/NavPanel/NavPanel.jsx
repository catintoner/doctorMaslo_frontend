import React from "react";

import './NavPanel.css';
import { NavLink } from "react-router-dom";

import header__logo from "../../images/header__logo_700.svg";

function NavPanel() {
  return (
    <>
      <nav className="header__navigation">
        <ul className="header__links">
          <li>
            <NavLink to="/">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              О нас
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Акции
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Контакты
            </NavLink>
          </li>
          <li>
            <img className="header__logo" src={header__logo} alt="description">
            </img>
          </li>
        </ul>

      </nav>
    </>
  );
}

export default NavPanel;
