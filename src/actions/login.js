import * as consts from './../constants';
import * as api from './../api';
//import * as jwt from './../common/jwtToken';

// export const logout = () => ({
//     type: consts.NOTE_COMPONENT.LOGOUT
// });

export const login = (uname, pwd, url) => ({
    type: consts.LOGIN.SUCCESS,
    payload: '123456789'
})

// export const login = (uname, pwd, url) => async(dispatch) => {
//     dispatch({ type: consts.LOGIN.REQUEST });
//     try {
//         const resp = await api.login(uname, pwd, url);
//         dispatch({
//             type: consts.LOGIN.SUCCESS,
//             payload: '123456789' //resp.token
//         });
//         //const user = jwt.decode(resp.token);
//         //console.log("USER:", user);
//         // dispatch({
//         //     type: consts.LOGIN.UPDATE_USER,
//         //     payload: user
//         // });
//     }
//     catch(error) {
//         dispatch({
//             type: consts.LOGIN.FAILURE,
//             payload: error
//         });
//     }
// };