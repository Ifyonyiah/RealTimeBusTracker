

// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

//  access token
mapboxgl.accessToken = 'pk.eyJ1IjoidHJpcy1mcmF6aWVyIiwiYSI6ImNreTYwbG9ydzBwcWcycG50cWYzcnM0dzEifQ.Wvw8YKn6e1S8puAm0nrcCw';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.093729, 42.365554],
  zoom: 14,
});

var marker = new mapboxgl.Marker()
.setLngLat([-71.091542,42.359244])
.addTo(map);
//adds a marker to the map at the first coordinates in the array busStops.


// adds ending location
var markerTwo = new mapboxgl.Marker()
.setLngLat([-71.118625, 42.374863])
.addTo(map);


// counter here represents the index of the current bus stop && moves the marker on the map every 1000ms.
let counter = 0;
function move() {
  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move()
  }, 1000);
}


if (typeof module !== 'undefined') {
  module.exports = { move };
}
