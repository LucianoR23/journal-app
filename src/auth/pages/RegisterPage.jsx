import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { startCreatingUser } from "../../store/auth/thunks"

const formData = {
    email: '',
    password: '',
    displayName: '',
}

const formValidations = {
    email: [ (value) => value.includes('@') && value.includes('.co') , 'Must use a valid email' ],
    password: [ (value) => value.length >= 6 , 'Password must have at least 6 characters' ],
    displayName: [ (value) => value.length >= 6 , 'Fullname is required' ],
}

export const RegisterPage = () => {

    const dispatch = useDispatch()

    const [formSubmitted, setFormSubmitted] = useState( false )

    const { status, errorMessage } = useSelector( state => state.auth )
    const isCheckingAuth = useMemo( () => status === 'checking', [ status ] )

    const { displayName, email, password, onInputChange, formState, isFormValid, displayNameValid, emailValid, passwordValid } = useForm( formData, formValidations )


    const onSubmit = ( event ) => {
        event.preventDefault()
        setFormSubmitted( true )
        if( !isFormValid ) return
        dispatch( startCreatingUser( formState ) )

    }

    return (
        <AuthLayout title="Register">
            <form onSubmit={ onSubmit }>

                <Grid container>

                    <Grid item xs={ 12 } sx={{ mt: 2 }} >
                        <TextField label="Full name" type="text" placeholder="John Doe" fullWidth required name="displayName" value={ displayName } onChange={ onInputChange } error={ !!displayNameValid && formSubmitted } helperText={ formSubmitted && displayNameValid } />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }} >
                        <TextField label="Email" type="email" placeholder="example@example.com" fullWidth required name="email" value={ email } onChange={ onInputChange } error={ !!emailValid && formSubmitted } helperText={ formSubmitted && emailValid } />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }} >
                        <TextField label="Password" type="password" placeholder="Password" fullWidth required name="password" value={ password } onChange={ onInputChange } error={ !!passwordValid && formSubmitted } helperText={ formSubmitted && passwordValid } />
                    </Grid>

                    <Grid container spacing={ 2 } sx={{ padding: 1 }}>

                        <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none' } >
                            <Alert severity="error">
                                { errorMessage }
                            </Alert>
                        </Grid>
                        <Grid item xs={ 12 } >
                            <Button variant="contained" fullWidth sx={{ mt: 2 }} type="submit" disabled={ isCheckingAuth } >
                                Register
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ padding: 1}}>Already have an account?</Typography>
                        <Link sx={{ pt: 1, color: 'primary.main' }} component={ RouterLink } variant="button" color='inherit' to='/auth/login'>
                            Sign in
                        </Link>
                    </Grid>

                </Grid>

            </form>
        </AuthLayout>
    )
}
