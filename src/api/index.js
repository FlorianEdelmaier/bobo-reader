import config from './../../config';

export const getDirectory = () => {
    return fetch(`${config.baseApiPath}/downloads/index`, {
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