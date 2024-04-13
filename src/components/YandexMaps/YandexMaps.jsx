import React from "react";

import { YMaps, Map, Placemark } from "react-yandex-maps";

import { API_KEY, defaultParamsForMap } from "../../constants/constants";

import "./YandexMaps.css";



function YandexMaps(
  {
    setMapsMethods,
    shopsInfo
  }
) {

  function handleBalloonClick(evt, zoom, coords) {
    evt.originalEvent.map.setZoom(zoom);
    evt.originalEvent.map.setCenter(coords);
  }

  return (
    <YMaps
      query={{
        apikey: API_KEY
      }}
    >

      <Map
        className="yandexMap"
        state={{
          center: defaultParamsForMap.defaultCoords,
          zoom: defaultParamsForMap.defaultZoom,
          controls: [
            "zoomControl",
            "fullscreenControl"],
        }}
        modules={[
          "control.ZoomControl",
          "control.FullscreenControl"]}
        instanceRef={(ref) => setMapsMethods(ref)}
      >
        {shopsInfo.addresses.map((shop) => {
          return (
            <Placemark
              modules={["geoObject.addon.balloon"]}
              key={shop.address}
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
                balloonContentFooter: `Телефон: ${shop.phone}, Email: ${shopsInfo.email}`
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
