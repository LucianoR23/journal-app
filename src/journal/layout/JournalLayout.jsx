import { Box } from "@mui/material"
import { Navbar, Sidebar } from "../components";

const drawerWidth = 400

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>

            <Navbar drawerWidth={ drawerWidth } />

            <Sidebar drawerWidth={ drawerWidth } />

            <Box component='main' sx={{ flexGrow: 1, p: 3, pt: 10.5 }}>
                {/* Toolbar */}

                { children }

            </Box>

        </Box>
    )
}
