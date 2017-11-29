import * as consts from './../constants';
import * as api from './../api';

export const fetchDirectory = (lang) => async(dispatch) => {
    dispatch({ type: consts.DIRECTORY.REQUEST });
    try {
        const dir = await api.getDirectory(lang);
        dispatch({
            type: consts.DIRECTORY.SUCCESS,
            payload: dir
        });
    }
    catch(error) {
        dispatch({
            type: consts.DIRECTORY.FAILURE,
            payload: error
        });
    }
};