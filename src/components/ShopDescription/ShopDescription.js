import React, { useEffect, useState } from "react";


import "./ShopDescription.css";

function ShopDescription({
  title,
  address,
  email,
  phone,
  mapsParams,
  coords,
  zoom,
  mapsMethods
}) {

  function handleAddressCLick() {

    const zoomNow = mapsMethods.getZoom();
    const centerNow = mapsMethods.getCenter();

    if (zoomNow === zoom && centerNow[0].toFixed(6) === coords[0].toFixed(6) && centerNow[1].toFixed(6) === coords[1].toFixed(6)) {
      mapsMethods.setZoom(mapsParams.defaultZoom);
      mapsMethods.setCenter(mapsParams.defaultCoords);
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
