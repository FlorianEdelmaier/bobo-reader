import * as consts from './../constants';

export default isFetching = (state = false, action) => {
    switch(action.type) {
        case consts.DIRECTORY.REQUEST:
        case consts.SUBDIRECTORY.REQUEST:
        case consts.FILE.REQUEST:
        case consts.LOGIN.REQUEST:
            return true;
        case consts.DIRECTORY.SUCCESS:
        case consts.DIRECTORY.FAILURE:
        case consts.SUBDIRECTORY.SUCCESS:
        case consts.SUBDIRECTORY.FAILURE:
        case consts.FILE.SUCCESS:
        case consts.FILE.FAILURE:
        case consts.LOGIN.SUCCESS:
        case consts.LOGIN.FAILURE:
            return false;
        default:
            return state;
    }
}