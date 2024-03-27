import React, { useEffect, useRef, useState } from 'react';

import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";

import "./YandexMaps.css";

const API_KEY = "29429d25-8534-41c8-84fd-0c7d1fc06876";

function YandexMaps(
  {
    defaultCoords,
    defaultZoom,
    setMapsMethods,
    shopAddresses
  }
) {

  function handleBalloonClick(evt, zoom, coords) {
      evt.originalEvent.map.setZoom(zoom);
      evt.originalEvent.map.setCenter(coords);
  }

  const ourContactsForBalloon = `Телефон: ${shopAddresses.phone}, Email: ${shopAddresses.email}`

  return (
    <YMaps
      query={{
        apikey: API_KEY
      }}
    >

      <Map
        className="yandexMap"
        state={{
          center: defaultCoords,
          zoom: defaultZoom,
          controls: [
            "zoomControl",
            "fullscreenControl"],
        }}
        modules={[
          "control.ZoomControl",
          "control.FullscreenControl"]}
        instanceRef={(ref) => setMapsMethods(ref)}
      >
        {shopAddresses.addresses.map((shop) => {
          return (
            <Placemark
              modules={["geoObject.addon.balloon"]}
              key={shop.title}
              defaultGeometry={shop.defaultCoords}
              title={shop.title}
              address={shop.address}
              zoom={shop.defaultZoom}
              options={{
                iconImageSize: [10, 10],
                draggable: false,
                preset: "islands#greenDotIcon",
                hideIconOnBalloonOpen: false,
                hasBalloon: true,
                openBalloonOnClick: true,
                balloonPanelMaxMapArea: Infinity,
              }}
              properties={{
                iconCaption: shop.title,
                balloonContentHeader: shop.title,
                balloonContentBody: shop.address,
                balloonContentFooter: ourContactsForBalloon
              }}
              onCLick={(evt) => handleBalloonClick(evt, shop.defaultZoom, shop.defaultCoords)}
            />
          )
        })}
      </Map>
    </YMaps>
  );
}

export default YandexMaps;
