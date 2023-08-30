import { Grid, Typography } from "@mui/material"


export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid className="animate__animated animate__fadeIn animate__faster" container spacing={ 0 } direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }} >

            <Grid item className="box-shadow" xs={ 3 } sx={{ width: { sm: 500, lg: 600, xs: 300 }, backgroundColor: 'white', padding: 3, borderRadius: 2 }} >

                <Typography variant="h5" sx={{ padding: 1, color: 'primary.main' }} >{ title }</Typography>

                { children }

            </Grid>

        </Grid>
    )
}
