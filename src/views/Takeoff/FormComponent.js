import { useState } from "react";
import { Box, Button, createTheme, ThemeProvider, FormControl, Grid2, InputLabel, MenuItem, Select, TextField, Typography, Container } from "@mui/material";

export default function FormComponent(){
    // const [animationID, setAnimationID] = useState(null);
    // const [instance, setInstance] = useState(null);
    // const [dronecount, setDronecount] = useState(null);
    // const [latlon, setLatlon] = useState(null)
    // const [animpath, setAnimpath] = useState(null)
    // const [advVal, setAdvVal] = useState(null)

    const [formData, setFormData] = useState({animationID:'', instance:'', dronecount:'', latlon:'', animpath:'', advVal:''})

    const handleDataChange=(newKey, newVal)=>{
        setFormData(prev=>({...prev, [newKey]:newVal}))
    }

    const onSubmit=(e,)=> {
        e.preventDefault()
        console.log(formData)
    }

    const fileBrowseHandler = (event) => {
        let value = URL.createObjectURL(event.target.files[0]);
        console.log(value);
        // setImageUrl(value);
    };

    const btnTheme = createTheme({
        palette: {
          primary: {
            main: '#3B82F6',
          },
          success: {
            main:'rgba(1, 200, 83, 0.80)'
            // 01C853
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
                    width: '240px',
                    height: '40px',
                    alignSelf: 'center',
                },
                },
            },
        },
      });
    return(
        <>
        {/* <form onSubmit={onSubmit} className="centered-container-form" style={{padding: '20px', background:'#424242'}}> */}
        <form onSubmit={onSubmit} className="centered-container-form" style={{height:'100%', background:'#424242', borderRadius:'8px' }}>
        <Container sx={{height:'100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding:'40px 20px', boxSizing:'border-box'}}>
            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection:'column', width:'100%'}}>
                <InputLabel
                    shrink={false}
                    htmlFor={"username"}
                >
                    <Typography sx={{ color: '#fff', fontWeight:"semibold" }}>Animation ID :</Typography>
                </InputLabel>
                <TextField
                    variant="outlined"
                    id="animationID"
                    name="animationID"
                    fullWidth
                    autoFocus
                    sx={{marginBottom: 1}}
                    InputProps={{ sx: { borderRadius: 2, maxHeight: 50 } }}
                    onChange={(e)=>handleDataChange('animationID',e.target.value)}
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
                    <Typography sx={{ color: '#fff', fontWeight:"semibold" }}>Instance :</Typography>
                </InputLabel>
                <TextField
                    variant="outlined"
                    id="instance"
                    name="instance"
                    fullWidth
                    autoFocus
                    sx={{marginBottom: 1}}
                    InputProps={{ sx: { borderRadius: 2, maxHeight: 50 } }}
                    onChange={(e)=>handleDataChange("instance",e.target.value)}
                    // helperText={touched.username ? errors.username : ''}
                    // error={touched.username && Boolean(errors.username)}
                    // value={values.username}
                    // onChange={handleChange}
                />

                <InputLabel
                    shrink={false}
                    htmlFor={"username"}
                >
                    <Typography sx={{ color: '#fff', fontWeight:"semibold" }}>No. Of Drones :</Typography>
                </InputLabel>
                <TextField
                    variant="outlined"
                    id="dronecount"
                    name="dronecount"
                    fullWidth
                    autoFocus
                    sx={{marginBottom: 1}}
                    InputProps={{ sx: { borderRadius: 2, maxHeight: 50 } }}
                    onChange={(e)=>handleDataChange("dronecount",e.target.value)}
                    // helperText={touched.username ? errors.username : ''}
                    // error={touched.username && Boolean(errors.username)}
                    // value={values.username}
                    // onChange={handleChange}
                />
                
                <InputLabel
                    shrink={false}
                    htmlFor={"username"}
                >
                    <Typography sx={{ color: '#fff', fontWeight:"semibold" }}>Geo Location(Lat, Lon) :</Typography>
                </InputLabel>
                <TextField
                    variant="outlined"
                    id="latlon"
                    name="latlon"
                    fullWidth
                    autoFocus
                    sx={{marginBottom: 1}}
                    InputProps={{ sx: { borderRadius: 2, maxHeight: 50 } }}
                    onChange={(e)=>handleDataChange("latlon",e.target.value)}
                    // helperText={touched.username ? errors.username : ''}
                    // error={touched.username && Boolean(errors.username)}
                    // value={values.username}
                    // onChange={handleChange}
                />

                <InputLabel
                    shrink={false}
                    htmlFor={"username"}
                >
                    <Typography sx={{ color: '#fff', fontWeight:"semibold" }}>Animation File Path :</Typography>
                </InputLabel>
                <TextField
                    type="file"
                    variant="outlined"
                    id="animpath"
                    name="animpath"
                    fullWidth
                    autoFocus
                    sx={{marginBottom: 1}}
                    InputProps={{ sx: { borderRadius: 2, maxHeight: 50 } }}
                    onChange={(e)=>handleDataChange("animpath",e.target.value)}
                    // helperText={touched.username ? errors.username : ''}
                    // error={touched.username && Boolean(errors.username)}
                    // value={values.username}
                    // onChange={handleChange}
                />

                <InputLabel
                    shrink={false}
                    htmlFor={"username"}
                >
                    <Typography sx={{ color: '#fff', fontWeight:"semibold" }}>Advanced Options :</Typography>
                </InputLabel>
                
                <Select
                    id="adv"
                    fullWidth
                    onChange={(e)=>handleDataChange("advVal",e.target.value)}
                    defaultValue={'10'}
                    InputProps={{ sx: { borderRadius: 2, maxHeight: 50 } }}
                    // onChange={handleChange}
                    >
                    <MenuItem value={10} sx={{borderRadius:'5px'}}>Ten</MenuItem>
                    <MenuItem value={20} sx={{borderRadius:'5px'}}>Twenty</MenuItem>
                    <MenuItem value={30} sx={{borderRadius:'5px'}}>Thirty</MenuItem>
                </Select>
            </Box>
                
            <ThemeProvider theme={btnTheme}>
            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection:'column', width:'100%', marginTop:'50px'}}>
                <Button variant="contained" color="success" sx={{marginTop: 2, color:'white', fontSize:'20px'}} onClick={onSubmit}>Submit</Button>
                <Button variant="contained" color="primary" sx={{marginTop: 2, color:'white', fontSize:'20px'}} onClick={onSubmit}>Plot Animation</Button>
                <Button variant="contained" color="error" sx={{marginTop: 2, color:'white', fontSize:'20px'}} onClick={onSubmit}>Close</Button>
            </Box>
            </ThemeProvider>
        </Container>
        </form>
        </>
    )
}