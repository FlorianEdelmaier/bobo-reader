import { combineReducers } from 'redux';
import directory, * as directorySelector from './directory';
import subDirectory from './subDirectory';
import isFetching from './isFetching';
import login, * as loggedInSelector from './login';
import lang from './lang';
import loginError from './loginError';

const rootReducer = combineReducers([
    directory,
    subDirectory,
    isFetching,
    login,
    lang,
    loginError
]);

export default rootReducer;

export const isLoggedIn = (state) => loggedInSelector.isLoggedIn(state);
export const getDirSelector = (state) => getDirSelector(state);
export const getFilesForDirSelector = (state, dir) => getFilesForDirSelector(state, dir);