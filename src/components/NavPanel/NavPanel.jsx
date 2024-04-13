import React from "react";

import "./NavPanel.css";
import { Link } from "react-router-dom";

import headerLogo from "../../images/header__logoGreenLight.svg";
import ContactsBar from "../ContactsBar/ContactsBar";

function NavPanel({
  getMuskForNumber
}) {

  function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth;
  }

  const [windowSize, setWindowSize] = React.useState(getWindowSize());
  const [burgerChecked, setBurgerChecked] = React.useState(false);

  function handleBurgerCheck() {

    setBurgerChecked(!burgerChecked);
  }
  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };

  }, [windowSize]);

  return (
    <>
      <nav className="header__navigation">
        <ul className="nav__panel">
          <li className="header__logo">
            <Link to="/" className="header__link">
              <img src={headerLogo} alt="Фура с надписью Зеленый свет" className="nav__picture" />
            </Link>
          </li>
          {
            (windowSize >= 1000) ?
              <>
                <li className="nav__links">
                  <ul className="header__links">
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
                    <li className="header__links_item">
                      <a href="#ourContacts" className="header__link">
                        Контакты
                      </a>
                    </li>
                  </ul>
                </li>
                <ContactsBar
                  fontSizeCls="contacts__data_type_header"
                  getMuskForNumber={getMuskForNumber}
                />
              </> :
              <>
                <ContactsBar
                  fontSizeCls="contacts__data_type_header"
                  getMuskForNumber={getMuskForNumber}
                />
                <li className="burger__menu">
                  <input
                    className="nav__burger-menu"
                    id="burger-menu"
                    type="checkbox"
                    onClick={handleBurgerCheck}
                  ></input>
                  <label
                    htmlFor="burger-menu"
                    className={`nav__burger-label ${burgerChecked && "nav__burger-label_type_open"}`}>
                  </label>
                </li>
                <li className={`navigation__bar ${burgerChecked && "user__navigation_type_active"}`}>
                  <div>
                    <img src={headerLogo} alt="Фура с надписью Зеленый свет" className="nav__logoBurger" />
                  </div>
                  <ul className={`header__links ${burgerChecked && "header__links_type_active"}`}>

                    <li className="header__links_item">
                      <a href="#ourProducts" className="header__link" onClick={handleBurgerCheck}>
                        Главная
                      </a>
                    </li>
                    <li className="header__links_item">
                      <a href="#aboutUs" className="header__link" onClick={handleBurgerCheck}>
                        О нас
                      </a>
                    </li>
                    <li className="header__links_item">
                      <a href="#ourContacts" className="header__link" onClick={handleBurgerCheck}>
                        Контакты
                      </a>
                    </li>
                    <ContactsBar
                      fontSizeCls="contacts__data_type_burger"
                      getMuskForNumber={getMuskForNumber}
                    />
                  </ul>
                </li>

              </>
          }
        </ul>

      </nav>
    </>
  );
}

export default NavPanel;
