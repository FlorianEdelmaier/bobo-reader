const de = {
    title: 'BOBO Reader',
    login: {
        labelUname: 'User Name',
        labelPwd: 'Passwort',
        labelUrl: 'Url',
        labelLogin: 'Login',
        errorUnameEmpty: 'User Name ist ein Pflichtfeld',
        errorUnameSize: 'User Name ist auf 50 Stellen limitiert',
        errorPwdEmpty: 'Passwort ist ein Pflichtfeld',
        errorPwdSize: 'Passwort ist auf 30 Stellen limitiert',
        errorUrlEmpty: 'Url ist ein Pflichtfeld',
        errorUrlUrl: 'Url ist nicht valid'
    },
    document: {
        labelNotes: 'Notizen'
    },
    browser: {
        labelDir: 'Verzeichnis',
        labelDocs: 'Dokumente',
        labelFile: 'Datei',
        labelNotes: 'Anmerkungen'
    } 
}

const en = {
    title: 'BOBO reader',
    login: {
        labelUname: 'username',
        labelPwd: 'password',
        labelUrl: 'url',
        labelLogin: 'login',
        errorUnameEmpty: 'username is mandatory',
        errorUnameSize: 'username is limited to 50 characters',
        errorPwdEmpty: 'password is mandatory',
        errorPwdSize: 'password is limited to 30 characters',
        errorUrlEmpty: 'url is mandatory',
        errorUrlUrl: 'url is not valid'
    },
    document: {
        labelNotes: 'notes'
    },
    browser: {
        labelDir: 'directory',
        labelDocs: 'documents',
        labelFile: 'file',
        labelNotes: 'notes'
    } 
}

export default localize = (lang, path) => {
    const value = eval(`${lang}.${path}`);
    return value;
}