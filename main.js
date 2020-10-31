mapboxgl.accessToken =
  "pk.eyJ1IjoiZHlsYW5jIiwiYSI6Im53UGgtaVEifQ.RJiPqXwEtCLTLl-Vmd1GWQ";
var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/dylanc/ckgwq0klq06fq19rtgki0gqyk", // style URL
  center: [-110.8753, 32.1913], // starting position [lng, lat]
  zoom: 11.5, // starting zoom
  pitch: 48,
  bearing: -23,
  minZoom: 11.5,
  maxBounds: [
    [-111.2, 32],
    [-110.6, 32.5],
  ], //Southwest & Northeast Bounds
});
