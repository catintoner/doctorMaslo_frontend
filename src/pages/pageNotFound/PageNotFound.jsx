import React from "react";

import './PageNotFound.css';

import NavPanel from "../../components/NavPanel/NavPanel";
import backgroundImage from "../../images/pageNotFound__background_700.png";

function PageNotFound(props) {
  return (
    <>
      <header>
        <NavPanel />
      </header>
      <main>
        <section className="main__text">
          <p className="text__section">Ой!</p>
          <p className="text__section">404</p>
        </section>
        <figure className="main__content">
          <img src={backgroundImage} alt="girl" className="main__image" />
          <div className="main__textBlock">
            <figcaption className="main__description">Такой страницы тут нет</figcaption>
            <button className="main__backButton"
              onClick={props.handleGoBack}
            >Вернуться обратно</button>
          </div>
        </figure>
      </main>

    </>
  );
}

export default PageNotFound;
