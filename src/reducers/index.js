import { combineReducers } from 'redux';
import directory, * as directorySelector from './directory';

const rootReducer = combineReducers([
    directory
]);

export default rootReducer;

export const getDirSelector = (state) => getDirSelector(state);
export const getFilesForDirSelector = (state, dir) => getFilesForDirSelector(state, dir);