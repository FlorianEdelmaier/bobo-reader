import * as consts from './../constants';

const defaultState = {
    id: undefined,
    token: undefined,
    device: {
        token: '',
        type: ''
    },
    identity: {
        firstName: undefined,
        lastName: undefined,
        email: undefined
    },
    reset: {
        token: undefined,
        expirationDate: undefined
    },
    roles: []
};

export default login = (state = defaultState, action) => {
    switch(action.type) {
        case consts.LOGIN.SUCCESS:
            return { ...state, token: action.payload };
        case consts.LOGIN.UPDATE:
            return { ...state,
            id: action.payload._id,
            identity: action.payload.identity,
            reset: {
                token: action.payload.reset.token,
                expirationDate: new Date(action.payload.reset.expirationDate)
            },
            roles: action.payload.roles
        };
        default:
            return state;
    }
}

export const isLoggedIn = (userInfo) => userInfo && userInfo.token !== undefined;
