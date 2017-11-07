import * as directoryActions from './directory';
import * as subDirectoryActions from './subDirectory';

//export const files = (dir) => data.filter(x => x.parentDir === dir && !x.isDir);

export const fetchDirectory = directoryActions.fetchDirectory;
export const fetchSubDirectory = subDirectoryActions.fetchSubDirectory;