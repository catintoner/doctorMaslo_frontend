import React from "react";

import "./Card.css";

import testCard from "../../images/card1.jpg";

function Card() {
  return (
    <div className="card__container">
      <div className="card" style={{backgroundImage: `url(${testCard})`}}>
        <h3 className="card__title">Трансмиссионные масла</h3>
      </div>
    </div>
  );
}

export default Card;
