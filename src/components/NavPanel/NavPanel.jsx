import React from "react";

import './NavPanel.css';
import { NavLink, Link } from "react-router-dom";

function NavPanel() {
  return (
    <>
      <nav className="header__navigation">
        <ul className="header__links nav__panel">
          <li>
            <ul className="header__links navigation__bar">
              <li>
                <NavLink to="/" className="header__link">
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="header__link">
                  О нас
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="header__link">
                  Акции
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="header__link">
                  Контакты
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <ul className="header__links">
              <li>
                <NavLink className="header__link">
                  Вход
                </NavLink>
              </li>
              <li>
                <NavLink className="header__link">
                  Регистрация
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/" className="header__link header__logo"></Link>
          </li>
        </ul>

      </nav>
    </>
  );
}

export default NavPanel;
