import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#2970db'
        },
        secondary: {
            main: '#024ec0'
        },
        error: {
            main: red.A400
        }
    }
})