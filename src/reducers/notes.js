import * as consts from './../constants';

export default directory = (state = [], action) => {
    switch(action.type) {
        case consts.NOTES.SUCCESS:
            return action.payload;
        case consts.NOTES.REQUEST:
        case consts.NOTES.FAILURE:
            return [];
        case consts.NOTE.ADD.SUCCESS:
            return [action.payload, ...state] 
        default:
            return state;
    }
}