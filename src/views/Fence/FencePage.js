import { Box, Button, styled, MenuItem, Select, TextField, createTheme   } from '@mui/material';
import FormComponent from "../Takeoff/FormComponent.js";
import MQTTClient from "../../common/MqttClient";
import FenceData from '../../common/FenceData';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import './FencePage.css';
import { ThemeContext } from '@emotion/react';
import MapComponentForFence from '../../components/MapBox/Lagecy/MapComponentForFence.js';
import { useState } from 'react';
import FenceApp from '../../components/MapBox/Fence/Fence.tsx';

const TextFieldWrapper = styled(TextField)`
  fieldset {
    border-radius: 50px;
    background-color: #fff;
  }
`;

const textBoxTheme = createTheme({
    components: {
        MuiOutlinedInput: {
        styleOverrides: {
            root: {
            opacity: "0.5",
            backgroundColor: "#fff",
            borderRadius: '20px',
            }
        }
        },
        MuiTableCell: {
            styleOverrides: {
            head: {
                backgroundColor: "#424242",
                color: "#fff",
            }
            }
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    "&.Mui-focused": {
                        color: "#fff"
                    }
                },
            }
        },
    }
});

export default function FencePage() {
    const [polygons, setPolygons] = useState([]);
    const [features, setFeatures] = useState({});
  return (
    <Box className='Fence'>
        <div className='Display'>
          {/* <MapComponentForFence polygons={polygons} setPolygons={setPolygons}  /> */}
          <FenceApp features={features} setFeatures={setFeatures}/>
        </div>
        <div className='Bottombar'>
        <ThemeContext.Provider value={textBoxTheme}>
            <Box sx={{margin:'10px'}}>
                <FenceData features={features} polygons={polygons} setPolygons={setPolygons}/>
            </Box>
            <Box sx={{margin:'20px'}}>
                <Select
                    id="adv"
                    fullWidth
                    // value={adv}
                    // onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#fff' }}>
                    {/* <Checkbox label="Label" /> */}
                    <p>Home Location:</p>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Grid"/>
                </Box>
                
                    <Box bgcolor='red' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap:'7px', backgroundColor:'#424242', padding:'20px' }}>
                        <TextField label="Altitude" id="outlined-basic" variant="outlined" size="small" />
                        <TextField label="Lattitude" id="outlined-basic" variant="outlined" size="small" />
                        <TextField label="Longitude" id="outlined-basic" variant="outlined" size="small" />
                    </Box>
                
            </Box>
            </ThemeContext.Provider>
        </div>
        
      </Box>
  );
}