import * as consts from './../constants';

export default subDirectory = (state = [], action) => {
    switch(action.type) {
        case consts.SUBDIRECTORY.SUCCESS:
            return action.payload;
        case consts.SUBDIRECTORY.REQUEST:
        case consts.SUBDIRECTORY.FAILURE:
            return [];
        default:
            return state;
    }
}