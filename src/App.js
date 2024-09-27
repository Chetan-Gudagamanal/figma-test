import { Box, Button, Stack, styled, Typography } from '@mui/material';
import './App.css';
import FormComponent from './common/FormComponent';
import MQTTClient from './common/MqttClient';
import Navbar from './common/Navbar';
import Container from '@mui/material/Container';
import ResponsiveAppBar from './common/Navbar';

const StyledButton = styled(Button)(()=> ({
  color: 'green',
  backgroundColor: 'red',
  '&:hover': {
    backgroundColor: 'blue',
  },
}));

function App() {
  return (
    <Container maxWidth={false} disableGutters>
      {/* <Navbar /> */}
      <ResponsiveAppBar />
      <Box className='App'>
        <div className='Sidebar'>
            <FormComponent/>
        </div>
        <div className='Display'>
          <MQTTClient />
        </div>
      </Box>
    </Container>
  );
}

export default App;
