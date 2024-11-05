import { Box, Button, Container, styled } from '@mui/material';
import FormComponent from "./FormComponent.js";
import MQTTClient from "../../common/MqttClient";

import './TakeoffPage.css';
import MapboxMarkGrid from '../../components/MapBox/Lagecy/MapboxMarkGrid.js';
import MapboxMarkGrid2 from '../../components/MapBox/Takeoff/MapboxMarkGrid2.tsx';
import { useEffect, useState } from 'react';

export default function TakeoffPage() {
  const [markers, setMarkers] = useState([]);
  const [progress, setProgress] = useState(0);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // Establish WebSocket connection
    const socket = new WebSocket('ws://localhost:8000');
    setWs(socket);

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      setProgress(Number(data));
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Cleanup function to close the WebSocket connection
    return () => {
      socket.close();
    };
  }, []);
  console.log('markers updated')
  return (
    <Box className='App'>
        <Container disableGutters={true} className='Sidebar' style={{padding:'10px 0px 10px 10px', boxSizing:'border-box'}}>
            <FormComponent setMarkers={setMarkers} progress={progress}/>
        </Container>
        {/* <div className='Display'> */}
        <div style={{padding:'10px'}}>
          {/* <MapboxMarkGrid/> */}
          <MapboxMarkGrid2 markers={markers}/>
        </div>
      </Box>
  );
}