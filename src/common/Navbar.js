import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link, NavLink, useLocation } from "react-router-dom";
import TakeoffIcon from "../utils/icons/TakeoffIcon";
import FenceIcon from "../utils/icons/FenceIcon";
import UploadIcon from "../utils/icons/UploadIcon";
import { Typography } from "@mui/material";

function ResponsiveAppBar() {
  const [iconColor, setIconColor] = React.useState({
    // takeOffHover: "none",
    // fenceHover: "none",
    // uploadHover: "none",
    takeOffHover: false,
    fenceHover: false,
    uploadHover: false,
  });
  const param = useLocation();
  const activeStyle = {
    padding: "4px 8px",
    borderRadius: 4,
    color: "white",
    background: "#585858",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    color: "white",
  };
  const baseStyle = {
    padding: "4px 8px",
    borderRadius: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    color: "white",
  };
  return (
    <AppBar
      position="static"
      sx={{
        borderBottom: "1px solid #696969",
        background: "#333",
        padding: "0px 20px",
      }}
    >
      <Toolbar disableGutters sx={{ gap: "50px" }}>
        {/* <div onMouseEnter={()=>{setColor('white')}} onMouseLeave={()=>setColor('none')} style={param.pathname == '/' ? {...activeStyle}:{...baseStyle}}><NavLink style={{display:'flex', flexDirection:'column', alignItems:'center'}} to={'/'}><TakeoffIcon color={color} /></NavLink><Typography sx={{fontSize:'12px', textAlign:'center'}}>Take-off</Typography></div>
          <div onMouseEnter={()=>{setColor('white')}} onMouseLeave={()=>setColor('none')} style={param.pathname == '/fence' ? {...activeStyle}:{...baseStyle}}><NavLink style={{display:'flex', flexDirection:'column', alignItems:'center'}} to={'/fence'}><FenceIcon color={color} /></NavLink><Typography sx={{fontSize:'12px', textAlign:'center'}} >Set-up-giofence</Typography></div>
          <div onMouseEnter={()=>{setColor('white')}} onMouseLeave={()=>setColor('none')} style={param.pathname == '/fence' ? {...activeStyle}:{...baseStyle}}><NavLink style={{display:'flex', flexDirection:'column', alignItems:'center'}} to={'/fence'}><UploadIcon color={color} /></NavLink><Typography sx={{fontSize:'12px', textAlign:'center'}}>Upload show data</Typography></div> */}

        <NavLink
          to={"/"}
          style={param.pathname == "/" ? { ...activeStyle } : { ...baseStyle }}
          onMouseEnter={() => {
            setIconColor({ ...iconColor, takeOffHover: true });
          }}
          onMouseLeave={() =>
            setIconColor({ ...iconColor, takeOffHover: false })
          }
        >
          <TakeoffIcon color={iconColor} />
          <Typography sx={{ fontSize: "12px", textAlign: "center", fontWeight:"semibold" }}>
            Take-off
          </Typography>
        </NavLink>
        <NavLink
          to={"/fence"}
          style={
            param.pathname == "/fence" ? { ...activeStyle } : { ...baseStyle }
          }
          onMouseEnter={() => {
            setIconColor({ ...iconColor, fenceHover: true });
          }}
          onMouseLeave={() =>
            setIconColor({ ...iconColor, fenceHover: false })
          }
        >
          <FenceIcon color={iconColor} />
          <Typography sx={{ fontSize: "12px", textAlign: "center", fontWeight:"semibold" }}>
            Set-up-giofence
          </Typography>
        </NavLink>
        <NavLink
          style={
            param.pathname == "/upload" ? { ...activeStyle } : { ...baseStyle }
          }
          to={"/upload"}
          onMouseEnter={() => {
            setIconColor({ ...iconColor, uploadHover: true });
          }}
          onMouseLeave={() =>
            setIconColor({ ...iconColor, uploadHover: false })
          }
        >
          <UploadIcon color={iconColor} />
          <Typography sx={{ fontSize: "12px", textAlign: "center", fontWeight:"semibold" }}>
            Upload show data
          </Typography>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
