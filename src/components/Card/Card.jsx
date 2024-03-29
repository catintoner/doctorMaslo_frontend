import React, { useState } from "react";

import "./Card.css";

function Card({
  title,
  picture,
  description
}) {

  const [activeStatus, setActiveStatus] = useState(false);

  function handleCardClick() {
    setActiveStatus(!activeStatus);
  }

  return (
    <div className="card__container" onClick={handleCardClick}>
      <div className="card" style={{ backgroundImage: `url(${picture})` }}>
        <h3 className="card__title">{title}</h3>
        <p className="card__info">
          {activeStatus ? description : ""}
        </p>
      </div>
    </div>
  );
}

export default Card;
