import config from './../../config';

export const getDirectory = () => {
    return fetch(`${config.baseApiPath}/download/index/de`, {
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

export const getSubDirectory = (parentDir) => {
    return fetch(`${config.baseApiPath}/download/index/de/sub/${parentDir}`, {
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