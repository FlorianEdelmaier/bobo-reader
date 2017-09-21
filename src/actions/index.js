import * as directoryActions from './directory';

export const data = [{"name":".DS_Store","displayName":"S_Store","fileType":"","colorCode":"#aabbcc","isDir":false,"isFile":true,"parentDir":"","fileCount":0},{"name":"01Grün","displayName":"Grün","fileType":"","colorCode":"#aabbcc","isDir":true,"isFile":false,"parentDir":"","fileCount":2},{"name":"Latex for beginners.pdf","displayName":"tex for beginners.pdf","fileType":".pdf","colorCode":"#aabbcc","isDir":false,"isFile":true,"parentDir":"01Grün","fileCount":0},{"name":"Programming Haskell.pdf","displayName":"ogramming Haskell.pdf","fileType":".pdf","colorCode":"#aabbcc","isDir":false,"isFile":true,"parentDir":"01Grün","fileCount":0},{"name":"05Blau 1","displayName":"Blau 1","fileType":"","colorCode":"#3399ff","isDir":true,"isFile":false,"parentDir":"","fileCount":2},{"name":"C Programming Guide.pdf","displayName":"Programming Guide.pdf","fileType":".pdf","colorCode":"#aabbcc","isDir":false,"isFile":true,"parentDir":"05Blau 1","fileCount":0},{"name":"node-dev.pdf","displayName":"de-dev.pdf","fileType":".pdf","colorCode":"#aabbcc","isDir":false,"isFile":true,"parentDir":"05Blau 1","fileCount":0},{"name":"06red 2","displayName":"red 2","fileType":"","colorCode":"#ff0000","isDir":true,"isFile":false,"parentDir":"","fileCount":2},{"name":"Bootstrap-tutorial.pdf","displayName":"otstrap-tutorial.pdf","fileType":".pdf","colorCode":"#aabbcc","isDir":false,"isFile":true,"parentDir":"06red 2","fileCount":0},{"name":"Latex for beginners.pdf","displayName":"tex for beginners.pdf","fileType":".pdf","colorCode":"#aabbcc","isDir":false,"isFile":true,"parentDir":"06red 2","fileCount":0}];
export const dir = data.filter(x => x.isDir);
export const files = (dir) => data.filter(x => x.parentDir === dir && !x.isDir);

export const fetchDirectory = directoryActions.fetchDirectory;