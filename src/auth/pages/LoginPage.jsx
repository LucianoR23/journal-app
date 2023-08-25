import { Google } from "@mui/icons-material"
import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"


export const LoginPage = () => {
    return (
        <AuthLayout title="Sign in">
            <form>

                <Grid container>

                    <Grid item xs={ 12 } sx={{ mt: 2 }} >
                        <TextField label="Email" type="email" placeholder="example@example.com" fullWidth />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }} >
                        <TextField label="Password" type="password" placeholder="Password" fullWidth />
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ padding: 1 }}>

                        <Grid item xs={ 12 } md={ 6 }>
                            <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={ 12 } md={ 6 }>
                            <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Link sx={{ pt: 1 }} component={ RouterLink } variant="button" color='inherit' to='/auth/register'>
                            Register
                        </Link>
                    </Grid>

                </Grid>

            </form>
        </AuthLayout>

    )
}
