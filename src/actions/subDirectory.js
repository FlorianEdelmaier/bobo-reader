import * as consts from './../constants';
import * as api from './../api';

export const fetchSubDirectory = (lang, parentDir) => async(dispatch) => {
    dispatch({ type: consts.SUBDIRECTORY.REQUEST });
    try {
        const subdir = await api.getSubDirectory(lang, parentDir);
        dispatch({
            type: consts.SUBDIRECTORY.SUCCESS,
            payload: subdir
        });
    }
    catch(error) {
        dispatch({
            type: consts.SUBDIRECTORY.FAILURE,
            payload: error
        });
    }
};