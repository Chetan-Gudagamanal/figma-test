import { Box } from "@mui/material";
import StickyHeadTable from "./StickyHeadTable";

export default function FenceData() {
    return (
        <Box className='FenceTable'>
            <div className='Display'>
                <StickyHeadTable />
            </div>
            <div className='Bottombar'>
                {/* <FenceData /> */}
            </div>
        </Box>
    );
}