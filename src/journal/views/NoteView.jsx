import { useEffect, useMemo, useRef } from "react"
import { Delete, DeleteForever, DeleteForeverOutlined, DeleteForeverRounded, DeleteForeverSharp, DeleteForeverTwoTone, DeleteOutline, DeleteOutlined, DeleteSweep, DeleteSweepOutlined, DeleteTwoTone, FileUpload, Image, SaveTwoTone } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal/thunks"
import { SnackbarProvider, enqueueSnackbar } from "notistack"



export const NoteView = () => {
    
    const { activeNote, isSaving } = useSelector( state => state.journal )
    const dispatch = useDispatch()
    
    const fileInputRef = useRef()
    
    const { body, title, time, date, onInputChange, formState } = useForm( activeNote )
    
    useEffect(() => {
        dispatch( setActiveNote( formState ) )
    }, [ formState ])
    
    const onSaveNote = (variant) => () => {

        dispatch( startSaveNote() )
        enqueueSnackbar('The note was successfully saved!', { variant });
    }

    const onFileChange = ({ target }) => {
        if( target.files === 0 ) return

        dispatch( startUploadingFiles( target.files ) )
        // console.log(target.files)
    }
    const onDelete = () => {
        dispatch( startDeletingNote() )
    }


    return (
        <SnackbarProvider maxSnack={3}>
            <Grid className="animate__animated animate__fadeIn animate__faster" container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>

                <Grid item>
                    <Typography fontSize={ 35 } fontWeight='light'>{ date } - { time }</Typography>
                </Grid>

                <input ref={ fileInputRef } style={{ display: 'none' }} onChange={ onFileChange } multiple type="file" />
                <IconButton onClick={ () => fileInputRef.current.click() } disabled={ isSaving } color="secondary">
                    <FileUpload />
                    <Image />
                </IconButton>

                <Grid item>
                    <Button disabled={ isSaving } onClick={ onSaveNote('success') } sx={{ padding: 2 }}>
                        <SaveTwoTone sx={{ fontSize: 30, mr: 1 }} />
                        Save
                    </Button>
                </Grid>

                <Grid container>
                    <TextField type="text" variant="filled" fullWidth placeholder="Insert a title" label="Title" sx={{ border: 'none', mb: 1 }} name="title" value={ title } onChange={ onInputChange } />

                    <TextField type="text" variant="filled" fullWidth multiline placeholder="What's going on today?" minRows={ 5 } name="body" value={ body } onChange={ onInputChange } />
                </Grid>

                <Grid container justifyContent='end'>
                    <Button onClick={ onDelete } sx={{ mt: 2 }} color="error">
                        <DeleteTwoTone fontSize="large" />
                        Delete
                    </Button>
                </Grid>


                <ImageGallery images={ activeNote.imageUrls } />


            </Grid>

        </SnackbarProvider>
    )
}
