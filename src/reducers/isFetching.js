import * as consts from './../constants';

export default isFetching = (state = false, action) => {
    switch(action.type) {
        case consts.DIRECTORY.REQUEST:
        case consts.SUBDIRECTORY.REQUEST:
        case consts.FILE.REQUEST:
        case consts.LOGIN.REQUEST:
        case consts.LOGIN.RENEW.REQUEST:
        case consts.NOTES.REQUEST:
        case consts.NOTE.ADD.REQUEST:
            return true;
        case consts.DIRECTORY.SUCCESS:
        case consts.DIRECTORY.FAILURE:
        case consts.SUBDIRECTORY.SUCCESS:
        case consts.SUBDIRECTORY.FAILURE:
        case consts.FILE.SUCCESS:
        case consts.FILE.FAILURE:
        case consts.LOGIN.SUCCESS:
        case consts.LOGIN.FAILURE:
        case consts.LOGIN.RENEW.SUCCESS:
        case consts.LOGIN.RENEW.FAILURE:
        case consts.NOTES.SUCCESS:
        case consts.NOTES.FAILURE:
        case consts.NOTE.ADD.SUCCESS:
        case consts.NOTE.ADD.FAILURE:
            return false;
        default:
            return state;
    }
}