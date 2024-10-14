
// import take_off_logo from '../utils/icons/🦆 icon _ take off_.png';
// import fense_logo from '../utils/icons/🦆 icon _Fence_.png';
// import upload_logo from '../utils/icons/🦆 icon _upload_.png';

import take_off_logo from '../utils/icons/Takeoff.svg';
import fense_logo from '../utils/icons/Fence.svg';
import upload_logo from '../utils/icons/Upload.svg';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{borderBottom:'1px solid #696969', background:"#333", padding:'0px 20px'}}>
      {/* <Container maxWidth="xl"> */}
        <Toolbar disableGutters sx={{gap:'50px'}}>
          
        <div style={{padding:'12px'}}><Link to={'/'}><img src={take_off_logo} className="App-logo" alt="logo" /></Link></div>
        <div style={{padding:'12px'}}><Link to={'/fence'}><img src={fense_logo} className="App-logo" alt="logo" /></Link></div>
        <div style={{padding:'12px'}}><Link to={'/fence'}><img src={upload_logo} className="App-logo" alt="logo" /></Link></div>
        
        {/* <img src={upload_logo} className="App-logo" alt="logo" /> */}

        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
        </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
}
export default ResponsiveAppBar;