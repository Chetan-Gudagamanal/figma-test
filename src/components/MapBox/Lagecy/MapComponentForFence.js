import React, { useCallback, useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Button } from '@mui/material';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const MapComponentForFence = ({polygons, setPolygons}) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  // const [polygons, setPolygons] = useState([]);
  const [currentPolygon, setCurrentPolygon] = useState([]);
  const [selectedPolygonIndex, setSelectedPolygonIndex] = useState(null);
  const [markFence, setMarkFence] = useState(true);
  const markers = useRef([]); // Use a ref to keep track of markers

  useEffect(() => {
    // if (map.current) return; // Initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [77.1839, 28.5465], // Longitude, Latitude
      zoom: 18,
    });

    // Clean up on unmount
    return () => map.current.remove();
  }, []);

  const drawPolygons = (updatedPolygons) => {
    if (updatedPolygons.length === 0) return;
    updatedPolygons.forEach((coords, index) => {
      const polygonCoordinates = [
        ...coords,
        coords[0], // Close the polygon
      ];

      if (map.current.getSource(`polygon-${index}`)) {
        map.current.removeLayer(`polygon-layer-${index}`);
        map.current.removeSource(`polygon-${index}`);
      }

      // Add a new source for the polygon
      map.current.addSource(`polygon-${index}`, {
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
      if (!map.current.getLayer(`polygon-layer-${index}`)) {
      map.current.addLayer({
        id: `polygon-layer-${index}`,
        type: 'fill',
        source: `polygon-${index}`,
        layout: {},
        paint: {
          'fill-color': `hsl(${(index * 50) % 360}, 100%, 50%)`, // Different color for each polygon
          'fill-opacity': 0.5, // Opacity of the polygon
        },
      });
    }
    });
  }

  const handleClick = (event) => {
    console.log("markFence", markFence);
    if (!markFence) return;
    console.log("handleClick called");
    const lngLat = [event.lngLat.lng, event.lngLat.lat];
    setCurrentPolygon((prev) => {
      const newCoords = [...prev, lngLat];
      return newCoords;
    });

    // Add a marker for the clicked point
    const marker = new mapboxgl.Marker()
      .setLngLat(lngLat)
      .addTo(map.current);
      markers.current.push(marker);
  };

  const handleKeyDown = async (event) => {
    console.log("handleKeyDown called");
    if (event.key === 'Escape') {
        setMarkFence(false)
        console.log("Escape key pressed");
      // Finalize the current polygon and reset it
      console.log("currentPolygon length");
      console.log(currentPolygon.length);
      if (currentPolygon.length > 0) {
        setPolygons((prev) => {
            const updatedPolygons = [...prev, currentPolygon];
            drawPolygons(updatedPolygons); // Redraw all polygons
            // debugger
            return updatedPolygons
        });
        setCurrentPolygon([]);
      }
    }
  };


  const handlePolygonClick = (event) => {
    console.log("handlePolygonClick called");
    // const features = map.current.queryRenderedFeatures(event.point, {
    //   layers: polygons.map((_, index) => `polygon-layer-${index}`),
    // });
    console.log(polygons)
    const availableLayers = polygons.map((_, index) => `polygon-layer-${index}`);
    console.log("availableLayers");
    console.log(availableLayers)
    console.log("=============")
    const features = map.current.queryRenderedFeatures(event.point, {
      layers: availableLayers,
    });

    if (features.length > 0) {
      const clickedPolygonIndex = features[0].layer.id.split('-')[2];
    //   removePolygon(clickedPolygonIndex);
        console.log(clickedPolygonIndex);
      setSelectedPolygonIndex(parseInt(clickedPolygonIndex));
      highlightPolygon(parseInt(clickedPolygonIndex));
    }
  };

  const removePolygon = (index) => {
    setPolygons((prev) => {
      const newPolygons = prev.filter((_, i) => i !== parseInt(index));
      // Clear the map and redraw remaining polygons
      clearMap();
      drawPolygons(newPolygons);
      return newPolygons;
    });
  };

  const highlightPolygon = (index) => {
    // clearMap();
    drawPolygons(polygons);
  };

  const confirmDeletePolygon = () => {
    if (selectedPolygonIndex !== null) {
      setPolygons((prev) => {
        const newPolygons = prev.filter((_, i) => i !== selectedPolygonIndex);
        // Clear the map and redraw remaining polygons
        clearMap();
        // Remove markers for the deleted polygon
        removeMarkers(selectedPolygonIndex);
        
        drawPolygons(newPolygons);
        return newPolygons;
      });
      setSelectedPolygonIndex(null);
    }
  };

  const removeMarkers = (index) => {
    const pointsToRemove = polygons[index]; // Get the points of the polygon being deleted
    markers.current = markers.current.filter((marker, markerIndex) => {
      const lngLat = marker.getLngLat();
      const isPointInPolygon = pointsToRemove.some(point => {
        return point[0] === lngLat.lng && point[1] === lngLat.lat;
      });
      if (isPointInPolygon) {
        marker.remove(); // Remove the marker from the map
        return false; // Remove from the markers array
      }
      return true; // Keep the marker
    });
  };

  const clearMap = () => {
    polygons.forEach((_, index) => {
        console.log("clearMap called of index", index);
        if (map.current.getLayer(`polygon-layer-${index}`)) {
            map.current.removeLayer(`polygon-layer-${index}`);
            console.log("removed layer for index", index);
        }
        if (map.current.getSource(`polygon-${index}`)) {
            map.current.removeSource(`polygon-${index}`);
            console.log("removed source for index", index);
        }
    });
  };

  // Add click event listener
  useEffect(() => {
    if (!map.current) return;

    map.current.on('click', handleClick);
    map.current.on('click', handlePolygonClick);
    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listeners on unmount
    return () => {
      map.current.off('click', handleClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPolygon, polygons, markFence]);

  return (
    <>
    <Button sx={{position:'absolute',zIndex:1,backgroundColor:'red'}} onClick={() => setMarkFence(!markFence)}>{markFence ? 'Stop marking fence' : 'Add fence'}</Button>
    <Button sx={{position:'absolute', left:'200px' ,zIndex:1,backgroundColor:'red'}} onClick={() => confirmDeletePolygon()}>Delete Fence</Button>

    <div id="map" ref={mapContainer} style={{ height: '100%' }} />
    </>
  );
};

export default MapComponentForFence;
