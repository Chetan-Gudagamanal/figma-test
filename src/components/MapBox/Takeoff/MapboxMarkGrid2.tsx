import * as React from 'react';
import { useState, useCallback } from 'react';
import { render } from 'react-dom';
import Map, { Marker, NavigationControl } from 'react-map-gl';

import ControlPanel from './control-panel.tsx';
import Pin from '../pin.tsx';

import type { MarkerDragEvent, LngLat } from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoiY2hldGFuLWciLCJhIjoiY20xdDZnYndyMDEweTJrcG55MDN3cGpxMiJ9.7or4IX1f3S3lfU8i9s7nNg';

const initialViewState = {
  latitude: 28.5465,
  longitude: 77.1839,
  zoom: 17
};


const initialMarkers: {id: number; longitude: number; latitude: number}[] = [];

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const id = i * 10 + j;
      const lng = 77.1839 + (i * 0.00003); // Adjust longitude
      const lat = 28.5465 + (j * 0.00003); // Adjust latitude
      initialMarkers.push({id:id, longitude:lng, latitude:lat});
    }
  }

export default function MapboxMarkGrid2() {
  const [markers, setMarkers] = useState(initialMarkers);
  const [events, logEvents] = useState<Record<string, LngLat>>({});

//   const onMarkerDragStart = useCallback((event: MarkerDragEvent, id: number) => {
//     logEvents(_events => ({ ..._events, [id]: { onDragStart: event.lngLat } }));
//   }, []);

//   const onMarkerDrag = useCallback((event: MarkerDragEvent, id: number) => {
//     logEvents(_events => ({ ..._events, [id]: { onDrag: event.lngLat } }));

//     setMarkers(currentMarkers =>
//       currentMarkers.map(marker =>
//         marker.id === id
//           ? { ...marker, longitude: event.lngLat.lng, latitude: event.lngLat.lat }
//           : marker
//       )
//     );
//   }, []);

//   const onMarkerDragEnd = useCallback((event: MarkerDragEvent, id: number) => {
//     logEvents(_events => ({ ..._events, [id]: { onDragEnd: event.lngLat } }));
//   }, []);

  return (
    <>
      <Map
        initialViewState={initialViewState}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={TOKEN}
      >
        {markers.map(marker => (
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
      <ControlPanel events={events} />
    </>
  );
}

// export function renderToDom(container) {
//   render(<App />, container);
// }
