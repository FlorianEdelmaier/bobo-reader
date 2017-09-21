import * as consts from './../constants';
import * as api from './../api';

export const fetchDirectory = () => async(dispatch) => {
    dispatch({ type: consts.DIRECTORY.REQUEST });
    try {
        const dir = data; //await api.getDirectory();
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