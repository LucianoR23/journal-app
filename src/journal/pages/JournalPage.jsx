import { StickyNote2TwoTone } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelected } from "../views"
import { IconButton } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"


export const JournalPage = () => {

    const { isSaving, activeNote } = useSelector( state => state.journal )

    const dispatch = useDispatch()

    const onNewNote = () => {
        dispatch( startNewNote() )
    }

    return (
        <JournalLayout>

            {
                (!!activeNote)
                ? <NoteView />
                : <NothingSelected />
            }


            <IconButton disabled={ isSaving } onClick={ onNewNote } size="large" sx={{ color: 'antiquewhite', backgroundColor: 'warning.main', opacity: 0.7, ':hover': { backgroundColor: 'warning.main', opacity: 1 }, position: 'fixed', right: 50, bottom: 50 }}>
                <StickyNote2TwoTone />
            </IconButton>

        </JournalLayout>
    )
}
