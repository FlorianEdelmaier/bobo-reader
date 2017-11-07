import { combineReducers } from 'redux';
import directory, * as directorySelector from './directory';
import subDirectory from './subDirectory';
import isFetching from './isFetching';
import login from './login';

const rootReducer = combineReducers([
    directory,
    subDirectory,
    isFetching,
    login
]);

export default rootReducer;

export const getDirSelector = (state) => getDirSelector(state);
export const getFilesForDirSelector = (state, dir) => getFilesForDirSelector(state, dir);