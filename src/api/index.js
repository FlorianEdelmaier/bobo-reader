import config from './../../config';

export const login = (userName, password, url, deviceType) => {
    // console.log("LOGIN", deviceType, deviceToken);
    return fetch(`${config.baseApiPath}/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userName,
            password,
            url,
            deviceType,
            deviceToken: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            isBobo: true
        })
    })
    .then(resp => resp.json())
    .then(resp => {
        if(!resp.success && resp.erros && resp.errors.length > 0) throw new Error(resp.errors[0].message);
        return resp;
    })
    .catch(err => { console.log("FETCH ERR:", err); throw err; });
};

export const getDirectory = (lang, userToken) => {
    // console.log("getdir", lang, userToken);
    return fetch(`${config.baseApiPath}/download/index/${lang}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(resp => {
        if(!resp.status !== 200 && resp.erros && resp.errors.length > 0) throw new Error(resp.errors[0].message);
        return resp;
    });
}

export const getSubDirectory = (lang, parentDir, userToken) => {
    //console.log("sub", lang, parentDir)
    return fetch(`${config.baseApiPath}/download/index/${lang}/sub/${parentDir}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(resp => {
        if(!resp.status !== 200 && resp.erros && resp.errors.length > 0) throw new Error(resp.errors[0].message);
        return resp;
    });
}

export const getNotes = (uid, filePath, token) => {
    return fetch(`${config.baseApiPath}/notes/${uid}/${filePath}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    })
    .then(resp => resp.json())
    .then(resp => {
        if(!resp.status !== 200 && resp.erros && resp.errors.length > 0) throw new Error(resp.errors[0].message);
        return resp;
    });
}

export const createNote = (uid, filePath, note, token) => {
    console.log("action", uid, filePath, note);
    return fetch(`${config.baseApiPath}/notes`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        },
        body: JSON.stringify({
            uid,
            filePath,
            note
        })
    })
    .then(resp => resp.json())
    .then(resp => {
        if(!resp.success && resp.erros && resp.errors.length > 0) throw new Error(resp.errors[0].message);
        return resp;
    })
    .catch(err => { console.log("FETCH ERR:", err); throw err; }); 
}