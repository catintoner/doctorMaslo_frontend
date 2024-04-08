import React, { useState } from "react";


import "./MainPage.css";

import NavPanel from "../../components/NavPanel/NavPanel";
import Card from "../../components/Card/Card";
import YandexMaps from "../../components/YandexMaps/YandexMaps";
import ShopDescription from "../../components/ShopDescription/ShopDescription";
import Footer from "../../components/Footer/Footer";

import { shopsInfo } from "../../constants/constants";

import mainHeaderImage from "../../images/header__mainImage.jpg";

import cardTransmission from "../../images/card__transmission.jpg";
import cardMotors from "../../images/card__motors.jpg";
import cardDetails from "../../images/card__details.jpg";
import cardFilters from "../../images/card__filters.jpg";
import cardLubricants from "../../images/card__lubricants.jpg";
import cardAcsess from "../../images/card__acsess.png";

function MainPage() {

  const photosArray = [
    {
      title: "Трансмиссионные масла",
      description: "Большой выбор трасмиссионых масел на Ваш автомобиль",
      picture: cardTransmission
    },
    {
      title: "Моторные масла",
      description: "Огромный выбор моторных масел в наличии или доставкой от 1 дня",
      picture: cardMotors
    },
    {
      title: "Запчасти",
      description: "Заказ автозапчастей по каталогам",
      picture: cardDetails
    },
    {
      title: "Фильтры",
      description: "Воздушные, салонные, масляные, бензиновые на любой автомобиль",
      picture: cardFilters
    },
    {
      title: "Смазки",
      description: "Смазки и присадки от ведущих фирм-производителей",
      picture: cardLubricants
    },
    {
      title: "Акссесуары и инструменты",
      description: "Автоакссесуары, наборы инструментов, туристическое оборудование",
      picture: cardAcsess
    }
  ];

  const [mapsMethods, setMapsMethods] = useState({});

  return (
    <>
      <header>
        <NavPanel />
        <img className="header__mainImage" src={mainHeaderImage} alt="Девушка облакачивается на плакат с марками автохимии" />
      </header>
      <main>
        <section className="main__productsBlock">
          <h1 id="ourProducts" className="productsBlock__title">Наша продукция</h1>
          <p className="productsBlock__subtitle">В наличии и под заказ</p>
          <div className="productsBlock__container">
            {photosArray.map((card) => {
              return (
                <Card
                  key={card.title}
                  title={card.title}
                  picture={card.picture}
                  description={card.description}
                />
              );
            })}
          </div>
        </section>
        <section className="main__aboutUs">
          <h2 id="aboutUs" className="aboutUs__title">О нас</h2>
          <p className="title__general">Doctor Maslo начала свою работу в 1995 году,
            успешно работает на рынке смазочных материалов и автозапчастей.
            В настоящее время основными направлениями деятельности компании являются оптовая и розничная торговля смазочными материалами, автохимией, спецжидкостями, инструментами а также автопренадлеженостями.
          </p>
          <h3 className="aboutUs__titles">
            Наши преимущества
          </h3>
          <ul className="aboutUs__list">
            <li>Выгодные цены позволяют нашему сайту быть Вашим надежным партнером.</li>
            <li>Множество удобных схем работы с различными клиентами.</li>
            <li>Прямые партнерские отношения с рядом официальных дистрибьютеров смазочных материалов и автозапчастей в ЦФО.</li>
            <li>Мы работаем с производителями моторного масла и смазочных материалов. Вы уверены на 100%, что продукт оригинальный.</li>
          </ul>
          <h3 className="aboutUs__titles">
            Наш ассортимент
          </h3>
          <ul className="aboutUs__list">
            <li>Наш прайс-лист содержит более 4000 наименований моторных масел, фильтров и других автомобильных жидкостей от 30 ведущих мировых и российских производителей в постоянном наличии на локальном складе.</li>
          </ul>
          <h3 className="aboutUs__titles">Наше обслуживание</h3>
          <ul className="aboutUs__list">
            <li>Автоматизированный документооборот и удобная форма оплаты.</li>
            <li>Квалифицированный персонал поможет сделать правильный выбор.</li>
            <li>Лучший сервис и скорость взаимодействия.</li>
            <li>Мы профессионально найдем интересующий Вас продукт на рынке по оптимальной для Вас цене.</li>
          </ul>
        </section>
        <section className="main__contacts">
          <h2 id="ourContacts" className="contacts__title">
            Контакты
          </h2>
          <div className="maps__container">
            <YandexMaps
              setMapsMethods={setMapsMethods}
              shopsInfo={shopsInfo}
            />
            <ul className="maps__shopList">
              {shopsInfo.addresses.map((shop) => {
                return (
                  <ShopDescription
                    key={shop.address}
                    title={shop.title}
                    address={shop.address}
                    email={shopsInfo.email}
                    phone={shop.phone}
                    coords={shop.defaultCoords}
                    zoom={shop.defaultZoom}
                    mapsMethods={mapsMethods}
                  />
                )
              })}
            </ul>
          </div>

        </section>
      </main >
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainPage;
