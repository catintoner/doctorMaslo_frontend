import React from "react";

import "./ShopDescription.css";

import { defaultParamsForMap } from "../../constants/constants";

function ShopDescription({
  title,
  address,
  email,
  phone,
  coords,
  zoom,
  mapsMethods
}) {

  function handleAddressCLick() {

    const zoomNow = mapsMethods.getZoom();
    const centerNow = mapsMethods.getCenter();
    const balloon = mapsMethods.balloon;

    if (balloon.isOpen()) {
      balloon.close();
    }

    if (zoomNow === zoom && centerNow[0].toFixed(6) === coords[0].toFixed(6) && centerNow[1].toFixed(6) === coords[1].toFixed(6)) {
      mapsMethods.setZoom(defaultParamsForMap.defaultZoom);
      mapsMethods.setCenter(defaultParamsForMap.defaultCoords);
    } else {
      mapsMethods.setZoom(zoom);
      mapsMethods.setCenter(coords);
    }
  }

  return (
    <li
      className="shopList__shop"
      onClick={handleAddressCLick}
    >
      <h4
        className="shop__title"
      >
        {title}
      </h4>
      <p className="shop_address">
        Адрес: {address}
      </p>
      <a href={`mailto: ${email}`} className="shop__contact">Email: {email}</a>
      <a href={`tel: ${phone}`} className="shop__contact">Телефон: {phone}</a>
    </li >

  );
};

export default ShopDescription;
