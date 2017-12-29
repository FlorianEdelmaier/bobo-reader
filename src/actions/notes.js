import * as consts from './../constants';
import * as api from './../api';

export const fetchNotes = (uid, filePath, token) => async(dispatch) => {
    dispatch({ type: consts.NOTES.REQUEST });
    try {
        const dir = await api.getNotes(uid, filePath, token);
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
    dispatch({ type: consts.NOTE.ADD.REQUEST });
    try {
        const note = await api.createNote(uid, filePath, note, token);
        dispatch({
            type: consts.NOTE.ADD.SUCCESS,
            payload: note
        })
    }
    catch(error) {
        dispatch({
            type: consts.NOTE.ADD.FAILURE,
            payload: error
        })
    }
}