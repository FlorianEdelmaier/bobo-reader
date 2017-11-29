import * as consts from './../constants';

export default directory = (state = null, action) => {
    switch(action.type) {
        case consts.LOGIN.FAILURE:
            return action.payload.message;
        case consts.LOGIN.REQUEST:
            return null;
        default:
            return state;
    }
}