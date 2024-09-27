import { useState } from "react";
import { Box, Button, createTheme, ThemeProvider, FormControl, Grid2, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

export default function FormComponent(){
    const [animationID, setAnimationID] = useState('');
    const [instance, setInstance] = useState('');
    const onSubmit=(e,)=> {
        e.preventDefault()
        console.log(animationID, instance)
    }

    const btnTheme = createTheme({
        palette: {
          primary: {
            main: '#3B82F6',
          },
          success: {
            main:'rgba(1, 200, 83, 0.80)'
          },
          error: {
            main: '#F80302'
          },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                root: {
                    borderRadius: '20px',
                    textTransform: 'none',
                    width: '250px',
                    height: '40px',
                    alignSelf: 'center',
                },
                },
            },
        },
      });
    return(
        <>
        <form onSubmit={onSubmit} className="centered-container-form">
        <Grid2 container >
                <InputLabel
                    shrink={false}
                    htmlFor={"username"}
                >
                    <Typography sx={{ color: '#fff' }}>Animation ID :</Typography>
                </InputLabel>
                <TextField
                    variant="outlined"
                    id="animationID"
                    name="animationID"
                    fullWidth
                    autoFocus
                    sx={{marginBottom: 1}}
                    // helperText={touched.username ? errors.username : ''}
                    // error={touched.username && Boolean(errors.username)}
                    // value={values.username}
                    // onChange={handleChange}
                />

                <InputLabel
                    shrink={false}
                    color="primary"
                    htmlFor={"username"}
                >
                    <Typography sx={{ color: '#fff' }}>Instance :</Typography>
                </InputLabel>
                <TextField
                    variant="outlined"
                    id="instance"
                    name="instance"
                    fullWidth
                    autoFocus
                    sx={{marginBottom: 1}}
                    // helperText={touched.username ? errors.username : ''}
                    // error={touched.username && Boolean(errors.username)}
                    // value={values.username}
                    // onChange={handleChange}
                />

                <InputLabel
                    shrink={false}
                    htmlFor={"username"}
                >
                    <Typography sx={{ color: '#fff' }}>No. Of Drones :</Typography>
                </InputLabel>
                <TextField
                    variant="outlined"
                    id="dronecount"
                    name="dronecount"
                    fullWidth
                    autoFocus
                    sx={{marginBottom: 1}}
                    // helperText={touched.username ? errors.username : ''}
                    // error={touched.username && Boolean(errors.username)}
                    // value={values.username}
                    // onChange={handleChange}
                />
                
                <InputLabel
                    shrink={false}
                    htmlFor={"username"}
                >
                    <Typography sx={{ color: '#fff' }}>Geo Location(Lat, Lon) :</Typography>
                </InputLabel>
                <TextField
                    variant="outlined"
                    id="latlon"
                    name="latlon"
                    fullWidth
                    autoFocus
                    sx={{marginBottom: 1}}
                    // helperText={touched.username ? errors.username : ''}
                    // error={touched.username && Boolean(errors.username)}
                    // value={values.username}
                    // onChange={handleChange}
                />

                <InputLabel
                    shrink={false}
                    htmlFor={"username"}
                >
                    <Typography sx={{ color: '#fff' }}>Animation File Path :</Typography>
                </InputLabel>
                <TextField
                    variant="outlined"
                    id="animpath"
                    name="animpath"
                    fullWidth
                    autoFocus
                    sx={{marginBottom: 1}}
                    // helperText={touched.username ? errors.username : ''}
                    // error={touched.username && Boolean(errors.username)}
                    // value={values.username}
                    // onChange={handleChange}
                />

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
                
                <ThemeProvider theme={btnTheme}>
                <Box sx={{display: 'flex', justifyContent: 'center', flexDirection:'column', width:'100%', marginTop:'50px'}}>
                    <Button variant="contained" color="success" sx={{marginTop: 2}} onClick={onSubmit}>Submit</Button>
                    <Button variant="contained" color="primary" sx={{marginTop: 2}} onClick={onSubmit}>Plot Animation</Button>
                    <Button variant="contained" color="error" sx={{marginTop: 2}} onClick={onSubmit}>Close</Button>
                </Box>
                </ThemeProvider>
        </Grid2>
        </form>
        </>
    )
}