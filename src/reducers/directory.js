import * as consts from './../constants';

export default directory = (state = [], action) => {
    switch(action.type) {
        case consts.DIRECTORY.SUCCESS:
            return action.payload;
        case consts.DIRECTORY.REQUEST:
        case consts.DIRECTORY.FAILURE:
            return [];
        default:
            return state;
    }
}

export const getDirSelector = (state) => {
    state.filter(d => d.isDir)
}

export const getFilesForDirSelector = (state, dir) => {
    state.filter(d => d.parentDir === dir && !d.isDir)
}