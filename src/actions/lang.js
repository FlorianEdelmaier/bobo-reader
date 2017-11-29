import * as consts from './../constants';

export const setLang = (code) => {
    console.log("set lang", code);
    return {
    type: consts.LANG.SET,
    payload: code
    };
};