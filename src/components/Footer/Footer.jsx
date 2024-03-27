import React, { useState } from "react";

import { NavLink, Link } from "react-router-dom";

import "./Footer.css";

import footerLogo from "../../images/header__logoGreenLight.svg"

function Footer() {
  return (
    <div className="footer">
      <section className="footer__info">
        <h4 className="footer__title">
          Все права на ТМ “Doctor MASLO” принадлежат ООО “ОЙЛТРАК”
        </h4>
        <article className="info__contacts">
          <h5 className="contacts__title">КОНТАКТЫ</h5>
          <ul className="">
            <li>
              <a href="mailto: green31@mail.ru" className="">green31@mail.ru</a>
            </li>
            <li>
              <a href="tel: +79853134477" className="">+7(985)-313-44-77</a>
            </li>
          </ul>
        </article>
      </section>
      <section className="footer__requisites">
        <h5 className="requisites__title">Реквизиты:</h5>
        <p className="requisites__subtitle">ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ОЙЛТРАК"</p>
        <p className="requisites__innKpp">ИНН/КПП 5003112223 / 500301001</p>
        <p className="requisites__address">Юридический адрес: 142717, Московская область, Ленинский район, поселок Развилка, километр МКАД 23, владение 15 строение 1, офис 10</p>
        <p className="requisites__contacts">Тел./факс: +7(916) 022-99-33, +7(985) 313-44-77.</p>


      </section>
      <Link to="/" className="footer__logoLink">
        <img src={footerLogo} alt="Фура с надписью Зеленый свет" className="footer__logo" />
      </Link>
    </div>
  )
}

export default Footer;
