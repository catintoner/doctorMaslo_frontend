import React from "react";

import { Link } from "react-router-dom";

import "./Footer.css";

import footerLogo from "../../images/header__logoGreenLight.svg";
import footerGithubLogo from "../../images/footer__github.svg";

function Footer() {
  return (
    <div className="footer">
      <section className="footer__infoBlock">
        <h4 className="footer__title">
          Все права на ТМ “Doctor MASLO” принадлежат ООО “ОЙЛТРАК”
        </h4>
        <div className="infoBlock">
          <section className="footer__contacts">
            <h5 className="footerContacts__title">Контакты:</h5>
            <ul className="footerContacts__list">
              <li className="footerContacts__item">
                <a href="mailto: green31@mail.ru" className="footerContact__link">Email: green31@mail.ru</a>
              </li>
              <li className="footerContacts__item">
                <a href="tel: +79853134477" className="footerContact__link">Тел./факс: +7(916) 022-99-33, +7(985)-313-44-77</a>
              </li>
              <li className="footerContacts__item">
                <a href="https://github.com/catintoner" className="footerContact__link">
                  <img src={footerGithubLogo} alt="Логотип сайта GitHub, контур котика в кружочке" className="footerContacts__githubLogo" />
                  <p className="footerContacts__githubTitle">Создано @catintoner</p>
                </a>
              </li>
            </ul>
          </section>
          <section className="footer__requisites">
            <h5 className="requisites__title">Реквизиты:</h5>
            <p className="requisites__subtitle">ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ОЙЛТРАК"</p>
            <p className="requisites__innKpp">ИНН/КПП 5003112223 / 500301001</p>
            <p className="requisites__address">Юридический адрес: 142717, Московская область, Ленинский район, поселок Развилка, километр МКАД 23, владение 15 строение 1, офис 10</p>
          </section>
        </div>
      </section>

      <Link to="/" className="footer__logoLink">
        <img src={footerLogo} alt="Фура с надписью Зеленый свет" className="footer__logo" />
      </Link>
    </div>
  )
}

export default Footer;
