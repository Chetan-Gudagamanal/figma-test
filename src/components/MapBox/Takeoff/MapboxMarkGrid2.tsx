import * as React from 'react';
import { useState, useCallback } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import Pin from '../pin.tsx';

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const initialViewState = {
  latitude: 28.5450552,
  longitude: 77.1936512,
  zoom: 17,
};


const initialMarkers: {id: number; longitude: number; latitude: number}[] = [
  {
      "id": 0,
      "longitude": 77.1839,
      "latitude": 28.5465
  },
  {
      "id": 1,
      "longitude": 77.1839,
      "latitude": 28.54653
  }
];

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      const id = i * 10 + j;
      const lng = 77.1839 + (i * 0.00003); // Adjust longitude
      const lat = 28.5465 + (j * 0.00003); // Adjust latitude
      initialMarkers.push({id:id, longitude:lng, latitude:lat});
    }
  }


interface Marker {
  id: number;
  longitude: number;
  latitude: number;
}

interface MapboxMarkGrid2Props {
  markers: Marker[];
}

const takeoffMap = React.memo( function MapboxMarkGrid2({markers}: MapboxMarkGrid2Props) {
  console.log('markers:', markers);
  console.log(initialMarkers)
  const mapRef = React.useRef(null);
  // React.useEffect(() => {
  //   if (mapRef?.current) {
  //     // mapRef.current.zoomTo(mapRef.current.getZoom());
  //   }
  // }, [markers]);

  return (
    <>
      <Map
        initialViewState={initialViewState}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={TOKEN}
        ref = {mapRef}
      >
        { markers?.map(marker => (
          <Marker
            key={marker.id}
            longitude={marker.longitude}
            latitude={marker.latitude}
            anchor="bottom"
            // draggable
            // onDragStart={(event) => onMarkerDragStart(event, marker.id)}
            // onDrag={(event) => onMarkerDrag(event, marker.id)}
            // onDragEnd={(event) => onMarkerDragEnd(event, marker.id)}
          >
            <Pin size={20} />
          </Marker>
        ))}

        <NavigationControl />
        
      </Map>
      {/* <ControlPanel events={events} /> */}
    </>
  );
})

// export function renderToDom(container) {
//   render(<App />, container);
// }

export default takeoffMap
