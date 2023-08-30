import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        notes: [],
        activeNote: null,
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true
        },
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload )
            state.isSaving = false
        },
        setActiveNote: ( state, action ) => {
            state.activeNote = action.payload
        },
        setNotes: ( state, action ) => {
            state.notes = action.payload
        },
        setSaving: ( state ) => {
            state.isSaving = true
        },
        updatedNote: ( state, action ) => {
            state.isSaving = false
            state.notes = state.notes.map( note => {
                if( note.id === action.payload.id ){
                    return action.payload
                }
                return note
            } )
        },
        setPhotosActiveNote: ( state, action ) => {
            state.activeNote.imageUrls = [ ...state.activeNote.imageUrls, ...action.payload ]
            state.isSaving = false
        },
        deleteNoteById: ( state, action ) => {
            state.activeNote = null
            state.notes = state.notes.filter( note => note.id !== action.payload )
        },
        clearNotesLogout: ( state ) => {
            state.isSaving = false
            state.notes = []
            state.activeNote = null
        },
    }
});


export const { addNewEmptyNote, clearNotesLogout, setActiveNote, setNotes, setSaving, updatedNote, deleteNoteById, savingNewNote, setPhotosActiveNote } = journalSlice.actions;