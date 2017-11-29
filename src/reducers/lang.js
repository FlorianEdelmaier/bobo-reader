import * as consts from './../constants';

export default lang = (state = 'de', action) => {
    switch(action.type) {
        case consts.LANG.SET:
            return action.payload;
        default:
            return state;
    }
}