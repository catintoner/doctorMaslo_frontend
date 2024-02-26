import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

import "./MainPage.css";

import NavPanel from "../../components/NavPanel/NavPanel";
import Card from "../../components/Card/Card";

import mainHeaderImage from "../../images/header__,mainImage.jpg";

const API_KEY = "29429d25-8534-41c8-84fd-0c7d1fc06876";



function MainPage() {
  const ymaps = React.useRef(null);

  const [coords, setCoords] = React.useState([56.316195, 38.135964]);
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
          <button
          onClick={() => console.log(coords)}>
            test
          </button>
          <YMaps
            query={{
              apikey: API_KEY
            }}
          >
          <button
          onClick={(event) => {
            console.log("im here");
            setCoords([55.405798, 38.230407]);
          }}>
            test
          </button>
            <Map
              defaultState={{
                center: coords,
                zoom: 10,
                controls: ["zoomControl", "fullscreenControl"],
              }}
              modules={["control.ZoomControl", "control.FullscreenControl"]}
              width="600px"
              height="450px"
            >
              <Placemark
                defaultGeometry={coords}
                options={{
                  iconImageSize: [10, 10],
                  draggable: false,
                  preset: "islands#greenDotIcon",
                  hideIconOnBalloonOpen: false,
                  openEmptyHint: true
                }}
                properties={{
                  hintContent: "Бронницы"
                }}
              />
            </Map>
          </YMaps>
        </section>

      </main >
      {/* <Header /> */}
    </>
  );
}

export default MainPage;
