// src/MapComponent.js
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const MapboxMarkGrid = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [77.1839, 28.5465],
      zoom: 18,
    });

    // Create a grid of 100 points
    const points = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const lng = 77.1839 + (i * 0.00005); // Adjust longitude
        const lat = 28.5465 + (j * 0.00005); // Adjust latitude
        points.push([lng, lat]);
      }
    }

    // Add markers to the map
    points.forEach((point) => {
      new mapboxgl.Marker()
        .setLngLat(point)
        .addTo(map);
    });

    // Cleanup on component unmount
    return () => map.remove();
  }, []);

  return (
    <div>
      <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />
      <style>
        {`
          .cross-marker {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            background: transparent; // Transparent background
            border: none;
            position: relative;
          }
          .cross {
            font-size: 24px; // Adjust the size of the cross
            color: red; // Change color as needed
            line-height: 1;
          }
        `}
      </style>
    </div>
  );
};

// export default MapComponent;

export default MapboxMarkGrid;





