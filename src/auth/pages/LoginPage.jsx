import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { startGoogleSignIn, startLoginUser } from "../../store/auth/thunks"


const formData = {
    email: '',
    password: ''
}

export const LoginPage = () => {

    const { status, errorMessage } = useSelector( state => state.auth )
    const dispatch = useDispatch()
    
    const { email, password, onInputChange } = useForm( formData )

    const isAuthenticated = useMemo( () => status === 'checking', [status] )
    
    const onSubmit = ( event ) => {
        event.preventDefault()

        dispatch( startLoginUser({ email, password }) )
    }

    const onGoogleSignIn = () => {
        dispatch( startGoogleSignIn() )
    }

    return (
        <AuthLayout title="Sign in">
            <form onSubmit={ onSubmit } >

                <Grid container>

                    <Grid item xs={ 12 } sx={{ mt: 2 }} >
                        <TextField label="Email" type="email" placeholder="example@example.com" fullWidth name="email" value={ email } onChange={ onInputChange } />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }} >
                        <TextField label="Password" type="password" placeholder="Password" fullWidth name="password" value={ password } onChange={ onInputChange } />
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ padding: 1 }}>

                        <Grid container>
                        <Grid item xs={ 12 } sx={{ mt: 3 }} display={ !!errorMessage ? '' : 'none' } >
                            <Alert severity="error">
                                { errorMessage }
                            </Alert>
                        </Grid>
                        </Grid>

                        <Grid item xs={ 12 } md={ 6 }>
                            <Button type="submit" variant="contained" fullWidth sx={{ mt: !!errorMessage ? 0 : 2 }} disabled={ isAuthenticated } >
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={ 12 } md={ 6 }>
                            <Button onClick={ onGoogleSignIn } variant="contained" fullWidth sx={{ mt: !!errorMessage ? 0 : 2 }} disabled={ isAuthenticated } >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Link sx={{ pt: 1, color: 'primary.main' }} component={ RouterLink } variant="button" color='inherit' to='/auth/register'>
                            Register
                        </Link>
                    </Grid>

                </Grid>

            </form>
        </AuthLayout>

    )
}
