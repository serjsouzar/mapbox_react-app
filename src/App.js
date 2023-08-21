import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "./App.css";

function App() {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2VyanNvdXphIiwiYSI6ImNsbGxjNjY2ajI4dGYzZ25nZDlhMG8xbnYifQ.066dR2ctM167Hl1gjkv4Yg";
  const token = mapboxgl.accessToken;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(135.7082);
  const [lat, setLat] = useState(35.01); //42.35
  const [zoom, setZoom] = useState(9);

  //35.01771132545664, 135.70820837321418

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className="App">
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default App;
