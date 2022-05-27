import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

require('dotenv').config()

// process.env.MAPBOX

mapboxgl.accessToken = process.env.MAPBOX_PUB_KEY;


export default function App() {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);


  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: `mapbox://styles/canarchy-dev{MAPBOX_STYLE}`,
      center: [lng, lat],
      zoom: zoom
    });
  });


    return (
      <div>
        <div ref={mapContainer} className="map-container" />
      </div>
    );
}