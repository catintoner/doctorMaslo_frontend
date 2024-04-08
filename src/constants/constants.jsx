const API_KEY = "29429d25-8534-41c8-84fd-0c7d1fc06876";

const shopsInfo = {
  email: "grlait23@mail.ru",
  phone: "+79853134477",
  addresses: [
    {
      phone: "+79164657676",
      title: "г. Бронницы",
      address: "г. Бронницы, Каширское шоссе, дом 2, стр. 1",
      defaultCoords: [55.404804, 38.229505],
      defaultZoom: 15
    },
    {
      phone: "+79853134477",
      title: "МКАД, 23 км",
      address: "МКАД, 23 км, внешняя сторона",
      defaultCoords: [55.595379343561476, 37.7407942909489],
      defaultZoom: 15
    },
    {
      phone: "+79168785533",
      title: "МКАД, 31 км",
      address: "МКАД, 31 км, внешняя сторона, угловой подъезд, второй этаж",
      defaultCoords: [55.57341945360211, 37.63489855848088],
      defaultZoom: 15
    },
    {
      phone: "+79175650099",
      title: "МКАД, 31 км",
      address: "МКАД, 31 км, внешняя сторона, центральный вход, первый этаж",
      defaultCoords: [55.573230, 37.633823],
      defaultZoom: 15
    }
  ]
};

const defaultParamsForMap = {
  defaultCoords: [55.486807, 37.980249],
  defaultZoom: 9
}

export { API_KEY, shopsInfo, defaultParamsForMap };



