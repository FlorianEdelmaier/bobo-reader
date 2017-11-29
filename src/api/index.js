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
            deviceToken: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
        })
    })
    .then(resp => resp.json())
    .then(resp => {
        if(!resp.success && resp.erros && resp.errors.length > 0) throw new Error(resp.errors[0].message);
        return resp;
    })
    .catch(err => { console.log("FETCH ERR:", err); throw err; });
};

export const getDirectory = (lang) => {
    console.log("getdir", lang);
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

export const getSubDirectory = (lang, parentDir) => {
    console.log("sub", lang, parentDir)
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