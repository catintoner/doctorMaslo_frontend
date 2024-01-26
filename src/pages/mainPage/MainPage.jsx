import React from "react";

import "./MainPage.css";

import NavPanel from "../../components/NavPanel/NavPanel";
import Card from "../../components/Card/Card";

import mainHeaderImage from "../../images/header__,mainImage.jpg";

function MainPage() {
  return (
    <>
      <header>
        <NavPanel />
        <img className="header__mainImage" src={mainHeaderImage}/>
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

      </main>
      {/* <Header /> */}
    </>
  );
}

export default MainPage;
