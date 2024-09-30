import { Box, Button, styled } from '@mui/material';
import FormComponent from "../../common/FormComponent";
import MQTTClient from "../../common/MqttClient";

import './TakeoffPage.css';

export default function TakeoffPage() {
  return (
    <Box className='App'>
        <div className='Sidebar'>
            <FormComponent />
        </div>
        <div className='Display'>
          <MQTTClient />
        </div>
      </Box>
  );
}