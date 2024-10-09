import * as React from 'react';
import {useState, useCallback} from 'react';
import {createRoot} from 'react-dom/client';
import Map, {Marker} from 'react-map-gl';

import DrawControl from './draw-control.tsx';
import ControlPanel from './control-panel.tsx';
import Pin from '../pin.tsx';

const TOKEN = ''; // Set your mapbox token here

const initialMarkers: {id: number; longitude: number; latitude: number}[] = [];

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const id = i * 10 + j;
      const lng = 77.1839 + (i * 0.00003); // Adjust longitude
      const lat = 28.5465 + (j * 0.00003); // Adjust latitude
      initialMarkers.push({id:id, longitude:lng, latitude:lat});
    }
  }

export default function FenceApp({features, setFeatures}) {
  // const [features, setFeatures] = useState({});
  const [markers, setMarkers] = useState(initialMarkers);

  const onUpdate = useCallback(e => {
    setFeatures(currFeatures => {
      const newFeatures = {...currFeatures};
      for (const f of e.features) {
        newFeatures[f.id] = f;
      }
      console.log(newFeatures);
      return newFeatures;
    });
  }, []);

  const onDelete = useCallback(e => {
    setFeatures(currFeatures => {
      const newFeatures = {...currFeatures};
      for (const f of e.features) {
        delete newFeatures[f.id];
      }
      return newFeatures;
    });
  }, []);

  return (
    <>
      <Map
        initialViewState={{
          // longitude: -91.874,
          // latitude: 42.76,
          latitude: 28.5465,
          longitude: 77.1839,
          zoom: 17
        }}
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
        <DrawControl
          position="top-left"
          displayControlsDefault={false}
          controls={{
            polygon: true,
            trash: true
          }}
          defaultMode="draw_polygon"
          onCreate={onUpdate}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </Map>
      <ControlPanel polygons={Object.values(features)} />
    </>
  );
}