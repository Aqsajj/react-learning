import * as actionTypes from './actionTypes';
import axios from 'axios'
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token,
        userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const checkTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime)
    }
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}
export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart())
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDpZR6EDGMGPd_uIGa1jvRPRSHP-u6yq4I'
        if (!isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDpZR6EDGMGPd_uIGa1jvRPRSHP-u6yq4I'
        }
        const authData = {
            email,
            password,
            returnSecureToken: true
        }
        // send request
        axios.post(url, authData)
            .then(res => {
                console.log(res)
                dispatch(authSuccess(res.data.idToken, res.data.localId))
            })
            .catch(err => {
                console.log(err)
                dispatch(authFail(err.response.data.error))
            })
    };
};