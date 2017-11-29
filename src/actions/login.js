import * as consts from './../constants';
import * as api from './../api';
import jwtDecode from 'jwt-decode';

const decode = (token) => jwtDecode(token)._doc;

// export const login = (uname, pwd, url, os) => ({
//     type: consts.LOGIN.SUCCESS,
//     payload: '123456789'
// })

export const login = (uname, pwd, url, os) => async(dispatch) => {
    dispatch({ type: consts.LOGIN.REQUEST });
    try {
        const resp = await api.login(uname, pwd, url, os);
        dispatch({
            type: consts.LOGIN.SUCCESS,
            payload: resp.token
        });
        const user = decode(resp.token);
        //console.log("USER:", user);
        dispatch({
            type: consts.LOGIN.UPDATE,
            payload: user
        });
    }
    catch(error) {
        dispatch({
            type: consts.LOGIN.FAILURE,
            payload: error
        });
    }
};