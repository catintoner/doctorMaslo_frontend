import React from "react";

import './NavPanel.css';
import { Link } from "react-router-dom";

import headerLogo from "../../images/header__logoGreenLight.svg";

function NavPanel() {

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
    console.log(windowSize);

    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

  }, [windowSize]);

  return (
    <>
      <nav className="header__navigation">
        <ul className="nav__panel">
          <li className="nav__logo">
            <Link to="/" className="header__link">
              <img src={headerLogo} alt="Фура с надписью Зеленый свет" className="nav__picture" />
            </Link>
          </li>
          {
            (windowSize >= 1000) ?
              <>
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
                    <li className="header__links_item">
                      <a href="#ourContacts" className="header__link">
                        Контакты
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav__contacts">
                  <a href="mailto: grlait23@mail.ru" className="nav__contactsData">grlait23@mail.ru</a>
                  <a href="tel: +79853134477" className="nav__contactsData">+7(985)-313-44-77</a>
                </li>
              </> :
              <>
                <div className="burger__menu">
                  <input
                    className="nav__burger-menu"
                    id="burger-menu"
                    type="checkbox"
                    onClick={handleBurgerCheck}
                  ></input>
                  <label
                    htmlFor='burger-menu'
                    className={`nav__burger-label ${burgerChecked && "nav__burger-label_type_open"}`}>
                  </label>
                </div>
                <li className="nav__contacts">
                  <a href="mailto: grlait23@mail.ru" className="nav__contactsData">grlait23@mail.ru</a>
                  <a href="tel: +79853134477" className="nav__contactsData">+7(985)-313-44-77</a>
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
                    <li className="header__links_item">
                      <a href="#ourContacts" className="header__link">
                        Контакты
                      </a>
                    </li>
                  </ul>
                </li>
              </>
          }
          {/* <li className="nav__links">
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
              <li className="header__links_item">
                <a href="#ourContacts" className="header__link">
                  Контакты
                </a>
              </li>
            </ul>
          </li>
          <li className="nav__contacts">
            <a href="mailto: grlait23@mail.ru" className="nav__contactsData">grlait23@mail.ru</a>
            <a href="tel: +79853134477" className="nav__contactsData">+7(985)-313-44-77</a>
          </li> */}
        </ul>

      </nav>
    </>
  );
}

export default NavPanel;
