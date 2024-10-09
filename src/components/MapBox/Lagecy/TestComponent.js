import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxMarkGrid = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  const [polygons, setPolygons] = useState([]);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2hldGFuLWciLCJhIjoiY20xdDZnYndyMDEweTJrcG55MDN3cGpxMiJ9.7or4IX1f3S3lfU8i9s7nNg';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [77.2620, 28.5720], // Longitude, Latitude
      zoom: 12,
    });

    // Add click event listener
    mapRef.current.on('click', (event) => {
      // console.log('click event listener called');
      const lngLat = [event.lngLat.lng, event.lngLat.lat];
      
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          // Clear the coordinates and remove the polygon
          setCoordinates([]);
          if (mapRef.current.getSource('polygon')) {
            // mapRef.current.removeLayer('polygon-layer');
            mapRef.current.removeSource('polygon');
          }
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      setCoordinates((prev) => {
        console.log('prev');
        console.log(prev);
        console.log('lngLat');
        console.log(lngLat);
        let newCoords = [...prev, lngLat]
        drawPolygon(newCoords, mapRef);
        return newCoords
      });
      console.log(coordinates);

      // Add a marker for the clicked point
      new mapboxgl.Marker()
        .setLngLat(lngLat)
        .addTo(mapRef.current);
      
    });



    // // Add marker
    // new mapboxgl.Marker()
    //   .setLngLat([77.2750, 28.5720]) // Longitude, Latitude
    //   .addTo(mapRef.current);

    // Clean up on unmount
    return () => mapRef.current.remove();
  }, []);

  const drawPolygon = (coordinates, mapRef) => {
    if (coordinates.length < 2) {
      return
    }
    console.log('drawPolygon called');
    const polygonCoordinates = [
      ...coordinates,
      coordinates[0], // Close the polygon
    ];

    if (mapRef.current.getSource('polygon')) {
      mapRef.current.removeLayer('polygon-layer');
      mapRef.current.removeSource('polygon');
    }

    // Add a new source for the polygon
    mapRef.current.addSource('polygon', {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [polygonCoordinates],
        },
      },
    });

    // Add a layer to display the polygon
    mapRef.current.addLayer({
      id: 'polygon-layer',
      type: 'fill',
      source: 'polygon',
      layout: {},
      paint: {
        'fill-color': '#888888', // Color of the polygon
        'fill-opacity': 0.5, // Opacity of the polygon
      },
    });
  };

  // useEffect(() => {
  //   console.log('coordinates changed');
  //   console.log(coordinates);
  // }, [coordinates]);

  return <div id="map" ref={mapContainerRef} style={{ height: '100%' }} />;
};

export default MapboxMarkGrid;