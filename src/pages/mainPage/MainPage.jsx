import React from "react";

import "./MainPage.css";

import NavPanel from "../../components/NavPanel/NavPanel";
import Card from "../../components/Card/Card";

function MainPage() {
  return (
    <>
      <header>
        <NavPanel />
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
