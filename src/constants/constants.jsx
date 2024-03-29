const API_KEY = "29429d25-8534-41c8-84fd-0c7d1fc06876";

const shopsInfo = {
  email: "green31@mail.ru",
  phone: "+79853134477",
  addresses: [
    {
      title: "г. Бронницы",
      address: "г. Бронницы, Каширское шоссе, дом 2, стр. 1",
      defaultCoords: [55.40579813557273, 38.23040946378777],
      defaultZoom: 15
    },
    {
      title: "МКАД, 23 км",
      address: "МКАД, 23 км, внешняя сторона",
      defaultCoords: [55.595379343561476, 37.7407942909489],
      defaultZoom: 15
    },
    {
      title: "МКАД, 31 км",
      address: "МКАД, 31 км, внешняя сторона",
      defaultCoords: [55.57341945360211, 37.63489855848088],
      defaultZoom: 15
    }
  ]
};

const defaultParamsForMap = {
  defaultCoords: [55.486807, 37.980249],
  defaultZoom: 9
}

export { API_KEY, shopsInfo, defaultParamsForMap };



