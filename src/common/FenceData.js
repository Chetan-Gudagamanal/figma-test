import { Box } from "@mui/material";
import StickyHeadTable from "./StickyHeadTable";

export default function FenceData({features, polygons, setPolygons}) {
    return (
        <Box className='FenceTable'>
            <div className='Display'>
                <StickyHeadTable features={features} polygons={polygons} setPolygons={setPolygons}/>
            </div>
            <div className='Bottombar'>
                {/* <FenceData /> */}
            </div>
        </Box>
    );
}