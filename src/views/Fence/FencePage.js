import { Box, Button, styled, MenuItem, Select, TextField, createTheme, InputLabel, Typography   } from '@mui/material';
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

const fenceTheme = createTheme({
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
        MuiSelect: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                maxHeight: 50,
              },
            },
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
        <ThemeContext.Provider value={fenceTheme}>
            <Box sx={{margin:'10px'}}>
                <FenceData features={features} polygons={polygons} setPolygons={setPolygons}/>
            </Box>
            <Box sx={{margin:'20px'}}>
                <InputLabel
                    shrink={false}
                    htmlFor={"username"}
                >
                    <Typography sx={{ color: '#fff' }}>Advanced Options :</Typography>
                </InputLabel>
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', color: '#fff', alignItems: 'center' }}>
                    {/* <Checkbox label="Label" /> */}
                    {/* <p>Home Location:</p> */}
                    <Typography sx={{ color: '#fff' }}>Home Location:</Typography>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Grid"/>
                </Box>
                
                    <Box bgcolor='red' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap:'7px', backgroundColor:'#424242', padding:'20px', borderRadius: 2 }}>
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