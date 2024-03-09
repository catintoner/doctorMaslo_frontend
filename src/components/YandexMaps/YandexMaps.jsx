import React, { useEffect, useState } from 'react';

import { YMaps, Map, Placemark } from "react-yandex-maps";

import "./YandexMaps.css";

const API_KEY = "29429d25-8534-41c8-84fd-0c7d1fc06876";

function YandexMaps() {
  // 55.486807, 37.980249

  const configsForMaps = [
    {
      key: 1,
      defaultCoords: [55.405798, 38.230407],
      defaultZoom: 10
    },
    {
      key: 2,
      defaultCoords: [55.40579813557273, 38.23040946378777],
      defaultZoom: 10
    },
    {
      key: 3,
      defaultCoords: [55.486807, 37.980249],
      defaultZoom: 10
    },

  ]

  const [props, setProps] = useState({
    key: 0,
    defaultCoords: [55.486807, 37.980249],
    defaultZoom: 9
  });

  const [key, setKey] = useState(0);

  function buttonCLick() {
    setKey(1);
    setProps(configsForMaps[1])
  }

  return (
    <YMaps
      query={{
        apikey: API_KEY
      }}
    >
      <button
        onClick={() => buttonCLick()}
      ></button>
      <Map
        className="yandexMap"
        state={{
          center: props.defaultCoords,
          zoom: props.defaultZoom,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
      >
        <Placemark
          defaultGeometry={[55.595379343561476, 37.7407942909489]}
          options={{
            iconImageSize: [10, 10],
            draggable: false,
            preset: "islands#greenDotIcon",
            hideIconOnBalloonOpen: false,
            openEmptyHint: true
          }}
          properties={{
            hintContent: "МКАД, 23км"
          }}
        />
        <Placemark
          defaultGeometry={[55.57341945360211, 37.63489855848088]}
          options={{
            iconImageSize: [10, 10],
            draggable: false,
            preset: "islands#greenDotIcon",
            hideIconOnBalloonOpen: false,
            openEmptyHint: true
          }}
          properties={{
            hintContent: "МКАД, 31 км"
          }}
        />
        <Placemark
          defaultGeometry={[55.40579813557273, 38.23040946378777]}
          options={{
            iconImageSize: [10, 10],
            draggable: false,
            preset: "islands#greenDotIcon",
            hideIconOnBalloonOpen: false,
            openEmptyHint: true
          }}
          properties={{
            hintContent: "г. Броннинцы"
          }}
        />
      </Map>
      {/* <Map
        className="yandexMap yandexMap_hidden"
        defaultState={{
          center: [55.405798, 38.230407],
          zoom: 10,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
        width="600px"
        height="450px"
      >
        <Placemark
          defaultGeometry={[55.405798, 38.230407]}
          options={{
            iconImageSize: [10, 10],
            draggable: false,
            preset: "islands#greenDotIcon",
            hideIconOnBalloonOpen: false,
            openEmptyHint: true
          }}
          properties={{
            hintContent: "Бронницы"
          }}
        />
      </Map> */}
    </YMaps>
  );
}

export default YandexMaps;
