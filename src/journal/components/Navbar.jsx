import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { logoutFirebase } from "../../firebase/providers"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth/thunks"


export const Navbar = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${ drawerWidth }px)` }, ml: { lg: `${ drawerWidth }` }, display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>

            <Toolbar>

                <IconButton color="inherit" edge='start' sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>

                    <Typography variant="h6" noWrap component='div'>Journal</Typography>

                    <IconButton color="error" onClick={ onLogout } >
                        <LogoutOutlined />
                    </IconButton>

                </Grid>

            </Toolbar>

        </AppBar>
    )
}
