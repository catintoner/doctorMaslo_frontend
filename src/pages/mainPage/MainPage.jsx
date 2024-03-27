import React, { useEffect, useState } from "react";


import "./MainPage.css";

import NavPanel from "../../components/NavPanel/NavPanel";
import Card from "../../components/Card/Card";

import mainHeaderImage from "../../images/header__,mainImage.jpg";

import YandexMaps from "../../components/YandexMaps/YandexMaps";
import ShopDescription from "../../components/ShopDescription/ShopDescription";


function MainPage() {

  const [shopAddresses, setShopAddresses] = useState({
    email: "green31@mail.ru",
    phone: "+79853134477",
    addresses: [
      {
        title: "г. Бронницы",
        address: "г. Бронницы, Каширское шоссе, дом 2, стр. 1",
        defaultCoords: [55.40579813557273, 38.23040946378777],
        defaultZoom: 15
      },
      {
        title: "МКАД, 23 км",
        address: "МКАД, 23 км, внешняя сторона",
        defaultCoords: [55.595379343561476, 37.7407942909489],
        defaultZoom: 15
      },
      {
        title: "МКАД, 31 км",
        address: "МКАД, 31 км, внешняя сторона",
        defaultCoords: [55.57341945360211, 37.63489855848088],
        defaultZoom: 15
      }
    ]
  });

  const [mapsParams, setMapsParams] = useState({
    defaultCoords: [55.486807, 37.980249],
    defaultZoom: 9
  });

  const [mapsMethods, setMapsMethods] = useState({});


  return (
    <>
      <header>
        <NavPanel />
        <img className="header__mainImage" src={mainHeaderImage} alt="Девушка облакачивается на плакат с марками автохимии" />
      </header>
      <main>
        <section className="main__productsBlock">
          <h1 className="productsBlock__title">Наша продукция</h1>
          <p className="productsBlock__subtitle">В наличии и под заказ</p>
          <div className="productsBlock__container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section className="main__aboutUs">
          <h2 className="aboutUs__title">О нас</h2>
          <p className="title__general">Doctor Maslo начала свою работу в 1995 году,
            успешно работает на рынке смазочных материалов и автозапчастей.
            В настоящее время основными направлениями деятельности компании являются розничная и
            оптовая торговля смазочными материалами, автохимией, спецжидкостями, инструментами а также автопренадлеженостями.
          </p>
          <h3>
            Наши преимущества
          </h3>
          <ul>
            <li>Выгодные цены позволяют нашему сайту быть Вашим надежным партнером.</li>
            <li>Множество удобных схем работы с различными клиентами.</li>
            <li>Прямые партнерские отношения с рядом официальных дистрибьютеров смазочных материалов и автозапчастей в ЦФО.</li>
            <li>Мы работаем с производителями моторного масла и смазочных материалов. Вы уверены на 100%, что продукт оригинальный.</li>
          </ul>
          <h3>
            Наш ассортимент
          </h3>
          <ul>
            <li>Наш прайс-лист содержит более 2 тыс наименований моторных масел, фильтров и других автомобильных жидкостей от 30 ведущих мировых и российских производителей в постоянном наличии на локальном складе.</li>
          </ul>
          <h3>Наше обслуживание</h3>
          <ul>
            <li>Автоматизированный документооборот и удобная форма оплаты.</li>
            <li>Квалифицированный персонал поможет сделать правильный выбор.</li>
            <li>Лучший сервис и скорость взаимодействия.</li>
            <li>Мы профессионально найдем интересующий Вас продукт на рынке по оптимальной для Вас цене.</li>
          </ul>
        </section>
        <section className="main__contacts">
          <h2 className="contacts__title">
            Контакты
          </h2>
          <div className="maps__container">
            <YandexMaps
              defaultCoords={mapsParams.defaultCoords}
              defaultZoom={mapsParams.defaultZoom}
              setMapsParams={setMapsParams}
              setMapsMethods={setMapsMethods}
              shopAddresses={shopAddresses}
            />
            <ul className="maps__shopList">
              {shopAddresses.addresses.map((shop) => {
                return (
                  <ShopDescription
                    key={shop.title}
                    title={shop.title}
                    address={shop.address}
                    email={shopAddresses.email}
                    phone={shopAddresses.phone}
                    mapsParams={mapsParams}
                    coords={shop.defaultCoords}
                    zoom={shop.defaultZoom}
                    mapsMethods={mapsMethods}
                  />
                )
              })}
            </ul>
          </div>

        </section>
        <section>

        </section>

      </main >
      {/* <Header /> */}
    </>
  );
}

export default MainPage;
