import { Box, Button, styled } from '@mui/material';
import './App.css';
import FormComponent from './common/FormComponent';
import MQTTClient from './common/MqttClient';
import Container from '@mui/material/Container';
import ResponsiveAppBar from './common/Navbar';
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TakeoffPage from './views/Takeoff/TakeoffPage';
import FencePage from './views/Fence/FencePage';

function App() {
  return (
    <Router>
    <Container maxWidth={false} disableGutters>
      <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<TakeoffPage />} />
          <Route path="/fence" element={<FencePage />} />
        </Routes>
    </Container>
    </Router>
  );
}

export default App;
