import React from "react";

import './NavPanel.css';
import { Link } from "react-router-dom";

import headerLogo from "../../images/header__logoGreenLight.svg";

function NavPanel() {
  return (
    <>
      <nav className="header__navigation">
        <ul className="nav__panel">
          <li className="nav__logo">
            <Link to="/" className="header__link">
              <img src={headerLogo} alt="Фура с надписью Зеленый свет" className="nav__picture"/>
            </Link>
          </li>
          <li className="nav__links">
            <ul className="header__links navigation__bar">
              <li className="header__links_item">
                <a href="#ourProducts" className="header__link">
                  Главная
                </a>
              </li>
              <li className="header__links_item">
                <a href="#aboutUs" className="header__link">
                  О нас
                </a>
              </li>
              {/* <li>
                <NavLink to="/" className="header__link">
                  Акции
                </NavLink>
              </li> */}
              <li className="header__links_item">
                <a href="#ourContacts" className="header__link">
                  Контакты
                </a>
              </li>
            </ul>
          </li>
          <li className="nav__contacts">
            <a href="mailto: green31@mail.ru" className="nav__contactsData">green31@mail.ru</a>
            <a href="tel: +79853134477" className="nav__contactsData">+7(985)-313-44-77</a>
          </li>
          {/* <li>
            <ul className="header__links">
              <li>
                <NavLink to="*" className="header__link">
                  Вход
                </NavLink>
              </li>
              <li>
                <NavLink className="header__link">
                  Регистрация
                </NavLink>
              </li>
            </ul>
          </li> */}

        </ul>

      </nav>
    </>
  );
}

export default NavPanel;
