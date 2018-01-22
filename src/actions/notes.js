import * as consts from './../constants';
import * as api from './../api';

export const fetchNotes = (uid, filePath, token) => async(dispatch) => {
    dispatch({ type: consts.NOTES.REQUEST });
    try {
        const notes = await api.getNotes(uid, filePath, token);
        console.log('notes', notes)
        dispatch({
            type: consts.NOTES.SUCCESS,
            payload: notes
        });
    }
    catch(error) {
        dispatch({
            type: consts.NOTES.FAILURE,
            payload: error
        });
    }
};

export const createNote = (uid, filePath, note, token) => async(dispatch) => {
    console.log('action add note:', uid, filePath, note)
    dispatch({ type: consts.NOTE.ADD.REQUEST });
    try {
        const noteAdded = await api.createNote(uid, filePath, note, token);
        dispatch({
            type: consts.NOTE.ADD.SUCCESS,
            payload: noteAdded
        })
    }
    catch(error) {
        dispatch({
            type: consts.NOTE.ADD.FAILURE,
            payload: error
        })
    }
}