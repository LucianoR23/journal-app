import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { Google } from "@mui/icons-material"


export const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <form>

                <Grid container>

                    <Grid item xs={ 12 } sx={{ mt: 2 }} >
                        <TextField label="Name" type="text" placeholder="John" fullWidth required />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }} >
                        <TextField label="Lastname" type="text" placeholder="Doe" fullWidth required />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }} >
                        <TextField label="Date of Birth" type="date" fullWidth required InputLabelProps={{ shrink: true }} />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }} >
                        <TextField label="Email" type="email" placeholder="example@example.com" fullWidth required />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }} >
                        <TextField label="Password" type="password" placeholder="Password" fullWidth required />
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ padding: 1 }}>

                        <Grid item xs={ 12 } >
                            <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                                Register
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ padding: 1}}>Already have an account?</Typography>
                        <Link sx={{ pt: 1 }} component={ RouterLink } variant="button" color='inherit' to='/auth/login'>
                            Sign in
                        </Link>
                    </Grid>

                </Grid>

            </form>
        </AuthLayout>
    )
}
