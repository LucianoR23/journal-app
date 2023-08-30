import { Close, CloseFullscreen, TurnedInNot } from "@mui/icons-material"
import { AppBar, Avatar, Box, Divider, Drawer, Grid, Icon, IconButton, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem"
import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';

export const Sidebar = ({ drawerWidth = 240 }) => {

    const { displayName, photoURL } = useSelector( state => state.auth )
    const { notes } = useSelector( state => state.journal )

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }} >
                <Typography variant="h6" noWrap component='div'>{ displayName }</Typography>
                <Avatar alt={ displayName } src={ photoURL }  />
                <IconButton sx={{ display: { lg: 'none', xl: 'none' } }} onClick={ handleDrawerToggle }>
                    <CloseFullscreen />
                </IconButton>
            </Toolbar>
            <Divider />
            <List>
                {
                    notes.map( note => (
                        <SideBarItem key={ note.id } {...note} />
                    ))
                }
            </List>
            
            <Divider />
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{
                width: { lg: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                display: { md: 'block', lg: 'none' }
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'block', lg: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography ariant="h6" fontSize='large' component='div'>Journal</Typography>
                </Toolbar>
            </AppBar>
            <Box
            component="nav"
            sx={{ width: { lg: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { md: 'block', lg: 'none', xl: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    >
                        {drawer}
                </Drawer>
                

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', md: 'none',lg: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                    >
                        {drawer}
                </Drawer>


            </Box>

        </Box>
    )
}