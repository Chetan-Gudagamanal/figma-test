import { Box, Button, styled } from '@mui/material';
import FormComponent from "./FormComponent.js";
import MQTTClient from "../../common/MqttClient";

import './TakeoffPage.css';
import MapboxMarkGrid from '../../components/MapBox/Lagecy/MapboxMarkGrid.js';
import MapboxMarkGrid2 from '../../components/MapBox/Takeoff/MapboxMarkGrid2.tsx';

export default function TakeoffPage() {
  return (
    <Box className='App'>
        <div className='Sidebar'>
            <FormComponent />
        </div>
        <div className='Display'>
          {/* <MapboxMarkGrid/> */}
          <MapboxMarkGrid2/>
        </div>
      </Box>
  );
}