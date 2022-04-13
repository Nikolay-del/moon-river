function init() {
  let map = new ymaps.Map("map", {
    center: [55.768055568978525, 37.6000015],
    zoom: 14,
  });

  let placemark = new ymaps.Placemark([55.768055568978525, 37.6000015], {}, {
    iconLayout: "default#image",
    iconImageHref: "../img/placemark.png",
    iconImageSize: [44, 60],
    iconImageOffset: [0, 0]
  })
  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');

  map.geoObjects.add(placemark)
}

ymaps.ready(init)
