import { AddCommentSharp } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelected } from "../views"
import { IconButton } from "@mui/material"


export const JournalPage = () => {
    return (
        <JournalLayout>

            <NothingSelected />
            
            {/* <NoteView /> */}

            <IconButton size="large" sx={{ color: 'antiquewhite', backgroundColor: 'crimson', ':hover': { backgroundColor: 'error.main', opacity: 0.9 }, position: 'fixed', right: 50, bottom: 50 }}>
                <AddCommentSharp />
            </IconButton>

        </JournalLayout>
    )
}
