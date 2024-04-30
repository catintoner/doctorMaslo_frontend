import React from "react";

import './PageNotFound.css';

import NavPanel from "../../components/NavPanel/NavPanel";
import Footer from "../../components/Footer/Footer";
import backgroundImage from "../../images/pageNotFound__background_700.png";

function PageNotFound(props) {
  return (
    <>
      <header>
        <NavPanel
         getMaskForNumber={props.getMaskForNumber}
        />
      </header>
      <main>
        <section className="notFound__mainText">
          <p className="text__section">Ой!</p>
          <p className="text__section">404</p>
        </section>
        <figure className="notFound__content">
          <img src={backgroundImage} alt="girl" className="notFound__image" />
          <div className="notFound__textBlock">
            <figcaption className="notFound__description">Такой страницы тут нет</figcaption>
            <button className="notFound__backButton"
              onClick={props.handleGoBack}
            >Вернуться обратно</button>
          </div>
        </figure>
      </main>
      <footer>
      <Footer
          getMaskForNumber={props.getMaskForNumber}
        />
      </footer>

    </>
  );
}

export default PageNotFound;
