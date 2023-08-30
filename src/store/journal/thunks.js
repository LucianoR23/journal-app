import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosActiveNote, setSaving, updatedNote } from "./journalSlice"
import { loadNotes } from "../../journal/helpers/loadNotes"
import { fileUpload } from "../../journal/helpers/fileUpload"


export const startNewNote = () => {
    return async( dispatch, getState ) => {
        dispatch( savingNewNote() )

        const { uid } = getState().auth


        const newNote = {
            title: '',
            body: '',
            date: new Date().toLocaleDateString('es-ES'),
            time: new Date().toLocaleTimeString('es-ES'),
            imageUrls: []
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) )
        await setDoc( newDoc, newNote )

        newNote.id = newDoc.id

        dispatch( addNewEmptyNote( newNote ) )
        dispatch( setActiveNote( newNote ) )

    }
}

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth
        if( !uid ) throw new Error("The UID doesn't match with any user")
        
        const notes = await loadNotes( uid )

        dispatch( setNotes( notes ) )
    }
}

export const startSaveNote = () => {
    return async( dispatch, getState ) => {
        dispatch( setSaving() )

        const { uid } = getState().auth
        const { activeNote } = getState().journal

        const noteToFireStore = { ...activeNote }
        delete noteToFireStore.id

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ activeNote.id }` )
        await setDoc( docRef, noteToFireStore, { merge: true } )

        dispatch( updatedNote( activeNote ) )

    }
}

export const startUploadingFiles = ( files = []) => {
    return async( dispatch ) => {
        dispatch( setSaving() )
        
        const fileUploadPromises = []
        for (const file of files) {
            fileUploadPromises.push( fileUpload( file ) )
        }

        const photosUrls = await Promise.all( fileUploadPromises )
        
        dispatch( setPhotosActiveNote( photosUrls ) )

    }
}

export const startDeletingNote = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth
        const { activeNote } = getState().journal

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ activeNote.id }` )
        await deleteDoc( docRef )

        dispatch( deleteNoteById( activeNote.id ) )

    }
}

export const startDeletingNoteSide = (id) => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ id }` )
        await deleteDoc( docRef )

        dispatch( deleteNoteById( id ) )

    }
}