import { Box, Button, Container, styled } from '@mui/material';
import FormComponent from "./FormComponent.js";
import MQTTClient from "../../common/MqttClient";

import './TakeoffPage.css';
import MapboxMarkGrid from '../../components/MapBox/Lagecy/MapboxMarkGrid.js';
import MapboxMarkGrid2 from '../../components/MapBox/Takeoff/MapboxMarkGrid2.tsx';

export default function TakeoffPage() {
  return (
    <Box className='App'>
        <Container disableGutters={true} className='Sidebar' style={{padding:'10px 0px 10px 10px', boxSizing:'border-box'}}>
            <FormComponent />
        </Container>
        {/* <div className='Display'> */}
        <div disableGutters={true} style={{padding:'10px'}}>
          {/* <MapboxMarkGrid/> */}
          <MapboxMarkGrid2/>
        </div>
      </Box>
  );
}