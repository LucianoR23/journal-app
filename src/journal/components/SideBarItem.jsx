import { useDispatch } from "react-redux"
import { DeleteForever, EditNote } from "@mui/icons-material"
import { Button, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startDeletingNoteSide } from "../../store/journal/thunks"


export const SideBarItem = ({ title = '', body = '', id, date, time, imageUrls = [] }) => {

    const dispatch = useDispatch()

    const onClickNote = () => {
        dispatch( setActiveNote({ title, body, id, date, time, imageUrls }) )
    }

    const onDelete = () => {
        dispatch( startDeletingNoteSide(id) )
    }

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={ onClickNote } sx={{ maxHeight: 100 }}>
                <ListItemIcon>
                    <EditNote />
                </ListItemIcon>
                <Grid flex='column' >
                    <ListItemText primary={ title } primaryTypographyProps={{ noWrap: true }} />
                    <ListItemText secondary={ `${ date } - ${ time }` } secondaryTypographyProps={{ noWrap: true }} />
                    <ListItemText secondary={ body } secondaryTypographyProps={{ noWrap: true }} />
                </Grid>
            </ListItemButton>
            <Button onClick={ onDelete } sx={{ height: 50 }} color="error">
                <DeleteForever />
            </Button>
        </ListItem>
    )
}
