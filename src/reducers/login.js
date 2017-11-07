import * as consts from './../constants';

export default login = (state = false, action) => {
    switch(action.type) {        case consts.DIRECTORY.REQUEST:
        case consts.LOGIN.SUCCESS:
            return true;
        case consts.LOGIN.FAILURE:
            return false;
        default:
            return state;
    }
}
